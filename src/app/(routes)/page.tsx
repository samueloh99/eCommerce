import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import { Billboard } from "@/components/billboard";
import Container from "@/components/container";
import { ProductList } from "@/components/productList";

export default async function HomePage() {
  const billboards = await getBillboard("e96606dc-59c9-469f-9db2-62059fb23001");
  const products = await getProducts({});

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" data={products} />
        </div>
      </div>
    </Container>
  );
}
