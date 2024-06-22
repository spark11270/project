import { fetchProducts } from "./lib/fetchItems";
import { lusitana } from "./ui/fonts";
import Table from "./ui/items/table";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Products</h1>
      </div>
      <Table />
    </div>
  );
};