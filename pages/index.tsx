import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import Header from "../components/header";

export default function Index({ allPosts: { edges }, preview, settings }) {
  const morePosts = edges;
  const { title, description } = settings;
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`${title} - ${description}`}</title>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
      </Head>
      <Container >
        <Header title={title} description={description} />
        <div className="max-w-5xl mx-auto">
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const {allPosts, settings} = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview, settings },
    revalidate: 10,
  };
};
