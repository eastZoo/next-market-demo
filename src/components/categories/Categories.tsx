"use client";
import { useSearchParams } from "next/navigation";

import CategoryBox from "./CategoryBox";
import { categories } from "@/lib/dummy";

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");

  return (
    <div className="flex flex-row items-center justify-between pt-4 overflow-x-auto ">
      {categories?.map((item) => (
        <CategoryBox
          key={item.label}
          label={item.label}
          path={item.path}
          icon={item.icon}
          selected={category === item.label}
        />
      ))}
    </div>
  );
};

export default Categories;
