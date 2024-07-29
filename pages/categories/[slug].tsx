import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

import { getAllPostsByCategory, getAllCategoriesWithSlug } from "../../lib/api";

export default function Post({  posts, preview }) {
    const router = useRouter();
    
    if (!router.isFallback && !posts ) {
        return <ErrorPage statusCode={404} />;
    }
    
    return (
        <div> {posts.map(post => {
            return (
                <div key={post.node.slug}>
                    <h1>
                        <a href={`/posts/${post.node.slug}`}>
                        {post.node.title}
                        </a>
                        </h1>
                </div>
            );
        } ) } </div>
    );
}

export const getStaticProps: GetStaticProps = async ({
    params,
    preview = false,
    previewData,
  }) => {
    const data = await getAllPostsByCategory(params?.slug);
    console.log(data);
    return {
      props: {
        preview,
        posts: data?.edges || null,
      },
      revalidate: 10,
    };
  };
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const allCategories = await getAllCategoriesWithSlug();
  
    return {
      paths: allCategories.edges.map(({ node }) => `/categories/${node.slug}`) || [],
      fallback: true,
    };
  };
  