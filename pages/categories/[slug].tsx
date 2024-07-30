import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

import { getAllPostsByCategory, getAllCategoriesWithSlug } from "../../lib/api";
import Layout from "../../components/layout";
import Container from "../../components/container";
import Header from "../../components/header";
import PostTitle from "../../components/post-title";
import CategoryHeader from "../../components/category-header";
import Date from "../../components/date";

export default function Post({ posts, preview, settings, slug }) {
  const router = useRouter();

  if (!router.isFallback && !posts) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header title={settings.title} description={settings.description} />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {`All posts in ${slug} | ${settings.title}`}
                </title>
                <meta
                  property="og:image"
                />
              </Head>
              <CategoryHeader category={slug}/> 
              <div className="max-w-5xl mx-auto"> {posts.map(post => {
                return (
                  <div className="mb-2" key={post.node.slug}>
                    <h1>
                      <a href={`/posts/${post.node.slug}`}>
                        <span className="font-bold">{post.node.title}</span> // <Date dateString={post.node.date} /> // {post.node.author.node.name} 
                      </a>
                    </h1>
                  </div>
                );
              })} </div>

            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const { posts, settings } = await getAllPostsByCategory(params?.slug);
  return {
    props: {
      preview,
      posts: posts?.edges || null,
      settings,
      slug: params?.slug,
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
