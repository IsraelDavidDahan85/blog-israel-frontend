import { ca } from "date-fns/locale"

export default function Categories({ categories }) {
  const categoriesNew = categories.edges.filter((category) => category.node.name !== "Uncategorized");
  const CatgoriesComponent = ({ title, categories }) => {
    return (
      <span>
        <span className="ml-1 font-bold">{title}</span>
        {categories.map((category, index) => (
          <span className="hover:text-gray-500" key={category.node.name}>
            <a href={`/categories/${category.node.name}`}>{category.node.name}</a>
            {index < categoriesNew.length - 1 ? ', ' : ''}
          </span>
        ))}
      </span>
    );
  }
  return (
    <span className="ml-1">
      {categoriesNew.length == 0 ? '' :
        categoriesNew.length > 1 ? <CatgoriesComponent title='Categories: ' categories={categoriesNew} /> : <CatgoriesComponent title='Category: ' categories={categoriesNew} />
      }

    </span>
  );
}
