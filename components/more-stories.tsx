import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-1 md:gap-x-32 lg:gap-x-32 gap-y-8 md:gap-y-16 mb-16">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
            categories={node.terms}
          />
        ))}
      </div>
    </section>
  );
}
