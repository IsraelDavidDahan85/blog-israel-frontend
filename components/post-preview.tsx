import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Categories from "./categories";
import PostDate from "./post-date";
import Excerpt from "./excerpt";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories,
}) {
  return (
    <div >
      <h3 className="text-3xl mb-3 leading-snug font-bold italic a-link">
        <Link
          href={`/posts/${slug}`}
          className="hover:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></Link>
      </h3>
      <div className="text-lg mb-4">
      
        {/* {coverImage && (
          <div className="m-2 col-span-1">
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
          </div>
        )} */}
      
      <div className="m-2">
      <div className="text-lg mb-4 flex">
        <Avatar author={author} />
        <div className="ml-2"> <PostDate><Date dateString={date} /></PostDate></div>
        <div className="ml-2">
          {categories && (
            <Categories categories={categories} />
          )}
          </div>
      </div>
      <Excerpt excerpt={excerpt} slug={slug} />
    </div>
    </div>
  </div>  
  );
}
