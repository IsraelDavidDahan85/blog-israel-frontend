export default function PostTitle({ children }) {
  return (
    <h1
      className="text-6xl md:text-7xl lg:text-8xl font-bold italict  
       tracking-tighter leading-tight md:leading-none mb-8 md:text-left"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
