import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '../fonts';
import { fetchCardData } from '../../lib/data';

const iconMap = {
  snack: BanknotesIcon,
  pantry: UserGroupIcon,
  candy: ClockIcon,
  beverage: UserGroupIcon,
  meatAndSeafood: InboxIcon,
  bakeryAndDessert: BanknotesIcon,
  breakfast: UserGroupIcon,
  coffee: UserGroupIcon,
  deli: UserGroupIcon,
  organic: ClockIcon,
  cleaning: InboxIcon,
  floral: InboxIcon,
  household: BanknotesIcon,
};

export default async function CardWrapper() {
  const {
    numberOfSnackProducts,
    numberOfPantryProducts,
    numberOfCandyProducts,
    numberOfBeverageProducts,
    numberOfMeatAndSeafoodProducts,
    numberOfBakeryAndDessertProducts,
    numberOfBreakfastProducts,
    numberOfCoffeeProducts,
    numberOfDeliProducts,
    numberOfOrganicProducts,
    numberOfCleaningProducts,
    numberOfFloralProducts,
    numberOfHouseholdProducts,
  } = await fetchCardData();

  return (
    <>
      <Card title="Snack Products" value={numberOfSnackProducts} type="snack" />
      <Card title="Pantry Products" value={numberOfPantryProducts} type="pantry" />
      <Card title="Candy Products" value={numberOfCandyProducts} type="candy" />
      <Card title="Beverage Products" value={numberOfBeverageProducts} type="beverage" />
      <Card title="Meat and Seafood Products" value={numberOfMeatAndSeafoodProducts} type="meatAndSeafood" />
      <Card title="Bakery and Dessert Products" value={numberOfBakeryAndDessertProducts} type="bakeryAndDessert" />
      <Card title="Breakfast Products" value={numberOfBreakfastProducts} type="breakfast" />
      <Card title="Coffee Products" value={numberOfCoffeeProducts} type="coffee" />
      <Card title="Deli Products" value={numberOfDeliProducts} type="deli" />
      <Card title="Organic Products" value={numberOfOrganicProducts} type="organic" />
      <Card title="Cleaning Products" value={numberOfCleaningProducts} type="cleaning" />
      <Card title="Floral Products" value={numberOfFloralProducts} type="floral" />
      <Card title="Household Products" value={numberOfHouseholdProducts} type="household" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'snack' | 'pantry' | 'candy' | 'beverage' | 'meatAndSeafood' | 'bakeryAndDessert' | 'breakfast' | 'coffee' | 'deli' | 'organic' | 'cleaning' | 'floral' | 'household';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
