import { Category } from "@/types/global";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL, {
    cache: "no-cache",
  });

  return res.json();
};

export default getCategories;
