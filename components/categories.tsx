import { ca } from "date-fns/locale"
import Link from "next/link";

export default function Categories({ categories }) {
  const categoriesNew = categories.edges.filter((category) => category.node.name !== "Uncategorized");
  const CatgoriesComponent = ({ title, categories }) => {
    return (
      <span>
        <span className="ml-1 font-bold">{title}</span>
        {categories.map((category, index) => (
          <span className="a-link" key={category.node.name}>
            <Link href={`/categories/${category.node.name}`}>{category.node.name}</Link>
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
