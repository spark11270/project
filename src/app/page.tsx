import PantryTable from "./ui/items/pantry/table";
import CandyTable from "./ui/items/candy/table";
import MeatTable from "./ui/items/meat/table";
import SnackTable from "./ui/items/snack/table";
import BeverageTable from "./ui/items/beverage/table";
import HouseholdTable from "./ui/items/household/table";
import FloralTable from "./ui/items/floral/table";
import CleaningTable from "./ui/items/cleaning/table";
import DeliTable from "./ui/items/deli/table";
import BakeryTable from "./ui/items/bakery/table";
import BreakfastTable from "./ui/items/breakfast/table";
import CoffeeTable from "./ui/items/coffee/table";

export default async function Home() {

  return (
    <div className="w-full">
      <BakeryTable />
      <PantryTable />
      <CoffeeTable />
      <CandyTable />
      <SnackTable />
      <BreakfastTable />
      <MeatTable />
      <DeliTable />
      <BeverageTable />
      <CleaningTable />
      <HouseholdTable />
      <FloralTable />
    </div>
  );
};