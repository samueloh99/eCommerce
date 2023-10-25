import { Product } from "@/types/global";
import { NoResults } from "@/components/noResults";
import { ProductCard } from "@/components/productCard";

interface ProductListProps {
  title: string;
  data: Product[];
}

export function ProductList({ data, title }: ProductListProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {data.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
