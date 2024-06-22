import clsx from 'clsx';
import { fetchProducts } from 'src/app/lib/data';
import { lusitana } from '../../fonts';
import { LocalGroceryStoreTwoTone } from '@mui/icons-material';

export default async function ProductTable() {
  const products = await fetchProducts();

  return (
    <div className="flex w-full flex-col md:col-span-4 p-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Products
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {products.map((product, i) => {
            return (
              <div
                key={product.pnumber}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <LocalGroceryStoreTwoTone 
                    className="mr-4"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {product.pname}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      Currently in stock: {product.pstock}
                    </p>
                  </div>
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  ${product.pprice}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
