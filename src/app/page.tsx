import SelectableTable from '@/components/selectableTable';
import { fetchItems } from './api/util';
import { RetailItem } from './constants/types';

export default async function Home() {
  const ITEMS = await fetchItems();

  return (
    <main className='flex min-h-screen flex-col p-24'>
      <div>
      <SelectableTable items={ITEMS} />
      </div>
    </main>
  );
};
