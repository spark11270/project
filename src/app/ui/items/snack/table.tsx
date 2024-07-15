import clsx from 'clsx';
import { lusitana } from '../../fonts';
import { FreeBreakfastTwoTone } from '@mui/icons-material';
import { fetchSnack } from 'src/app/lib/data';
import { formatDateToLocal } from 'src/app/lib/utils';

export default async function SnackTable() {
  const snack = await fetchSnack();

  return (
    <div className="flex w-full flex-col md:col-span-4 p-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Snacks
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {snack.map((s, i) => {
            return (
              <div
                key={s.pid}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <FreeBreakfastTwoTone
                    className="mr-4"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {s.pname}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      Currently in stock: {s.pstock}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                  >
                    ${s.pprice}
                  </p>
                  <p
                    className={`${lusitana.className} hidden text-sm text-gray-500 sm:block`}
                  >
                    Expires {formatDateToLocal(s.pexpiry)}
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
