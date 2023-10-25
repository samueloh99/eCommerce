import getProduct from "@/actions/getProduct";
import getProducts from "@/actions/getProducts";
import Container from "@/components/container";
import { Gallery } from "@/components/gallery";
import { Info } from "@/components/info";
import { ProductList } from "@/components/productList";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm>px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
        </div>
        <hr className="my-10" />
        <div className="px-4 sm:px-6 lg:px-8">
          <ProductList title="Related Items" data={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
}
