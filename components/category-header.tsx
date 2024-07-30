export default function CategoryHeader({ category }) {
  return (
        <h2
        className="text-6xl md:text-7xl lg:text-8xl 
        tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
        >
        All posts in <span className="font-bold italic"> {category}</span>
        </h2>
    )
}