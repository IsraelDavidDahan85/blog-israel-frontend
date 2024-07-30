import Link from "next/link";

export default function Excerpt({ excerpt, slug }) {
    return (
        <div className="mr-4 ml-4">
        <div
        className="text-lg leading-relaxed mb-3"
        dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <div className="text-lg a-link"> <Link href={`/posts/${slug}`}>Read more</Link></div>
        </div>
 
    );
}