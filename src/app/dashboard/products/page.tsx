import Table from '../../ui/products/table';
import Search from '../../ui/search';
import Pagination from '../../ui/products/pagination';
import { lusitana } from '../../ui/fonts';
import { Metadata } from 'next';
import { CreateProduct } from 'src/app/ui/products/buttons';
import { Suspense } from 'react';
import { ProductsTableSkeleton } from 'src/app/ui/skeletons';
import { fetchProductPages } from 'src/app/lib/data';

export const metadata: Metadata = {
  title: 'Products',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchProductPages(query);

  return (
    <div className="w-full">
    <div className="flex w-full items-center justify-between">
      <h1 className={`${lusitana.className} text-2xl`}>Products</h1>
    </div>
    <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
      <Search placeholder="Search products..." />
      <CreateProduct />
    </div>
    <Suspense key={query + currentPage} fallback={<ProductsTableSkeleton />}>
      <Table query={query} currentPage={currentPage} />
    </Suspense>
    <div className="mt-5 flex w-full justify-center">
      <Pagination totalPages={totalPages} />
    </div>
  </div>
  );
}
