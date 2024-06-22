import clsx from 'clsx';
import { fetchPerishables } from 'src/app/lib/data';
import { lusitana } from '../../fonts';
import { LunchDiningTwoTone } from '@mui/icons-material';
import { formatDateToLocal } from 'src/app/lib/utils';

export default async function PerishableTable() {
  const perishables = await fetchPerishables();

  return (
    <div className="flex w-full flex-col md:col-span-4 p-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Perishables
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {perishables.map((perishable, i) => {
            return (
              <div
                key={perishable.pnumber}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <LunchDiningTwoTone
                    className="mr-4"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {perishable.pname}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      Currently in stock: {perishable.pstock}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                  >
                    ${perishable.pprice}
                  </p>
                  <p
                    className={`${lusitana.className} hidden text-sm text-gray-500 sm:block`}
                  >
                    Expires {formatDateToLocal(perishable.pexpiry)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
