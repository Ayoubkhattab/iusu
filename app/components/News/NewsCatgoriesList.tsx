import getNewsCategories from "@/app/_actions/NewsCategories";
import { NewsCategoriesType } from "@/app/_types/NewsCardType";
import Link from "next/link";

export default async function NewsCatgoriesList() {
  const categoriesData: Array<NewsCategoriesType> = await getNewsCategories();

  if (!Array.isArray(categoriesData)) {
    return <p>لا يوجد بيانات حتى هذه اللحظة.</p>;
  }

  return (
    <div className="mt-4 overflow-hidden px-4">
      <ul className="list-disc space-y-4 text-primary">
        {categoriesData.map((item, index) => (
          <li className="cursor-pointer" key={`news-category-${index}`}>
            <Link href={`?categoryId=${item.newsCategoryId}`}>
              {item.newsCategoryName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
