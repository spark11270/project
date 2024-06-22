import { lusitana } from "./ui/fonts";
import ProductTable from "./ui/items/products/table";
import PerishableTable from "./ui/items/perishable/table";
import DairyTable from "./ui/items/dairy/table";
import MeatTable from "./ui/items/meat/table";

export default async function Home() {

  return (
    <div className="w-full">
      <ProductTable />
      <PerishableTable />
      <DairyTable />
      <MeatTable />
    </div>
  );
};