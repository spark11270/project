import { RetailItem } from '@/constants/types';
import { GET } from '@/api/items';

export const fetchItems = async (): Promise<RetailItem[]> => {
    const data = JSON.parse(await GET());
    const result: RetailItem[] = [];

    if (data) {
        for (var i in data) {
            result.push(data[i]);
        }
    }

    return result;
};
