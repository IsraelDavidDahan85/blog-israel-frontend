export default function Categories({ categories }) {
  return (
    <span className="ml-1">
      under
      {categories.edges.length > 0 ? (
        categories.edges.map((category, index) => (
          <span key={index} className="ml-1">
            <a href={`/categories/${category.node.name}`}>
              {category.node.name}
            </a>
          </span>
        ))
      ) : (
        <span className="ml-1">
          <a href={`/categories/${categories.edges.node.slug}`}>
          {categories.edges.node.name}
          </a>
          </span>
      )}
    </span>
  );
}
