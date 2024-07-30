import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Categories from "./categories";
import PostDate from "./post-date";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="md:mb-5 flex items-center">
        <Avatar author={author} />
        <div className="ml-2"><PostDate><Date dateString={date} /></PostDate></div>
        <Categories categories={categories} />
      </div>
      {coverImage && (
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} coverImage={coverImage} />
        </div>
      )}
    </>
  );
}
