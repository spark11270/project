export type Product = {
  PNumber: number,
  PName: string,
  PStock: number,
  PPrice: string,
};

// format PPrice to a string with formatCurrency()
export type ProductRaw = Omit<Product, 'PPrice'> & {
  PPrice: number;
};

/*------------ Subclasses ------------*/

export type Meat = Product & {
  PStock: number,
  PExpiry: number,
};

export type MeatRaw = Omit<Meat, 'PPrice'> & {
  PPrice: number;
};

export type Dairy = Product & {
  PStock: number,
  PExpiry: number,
};

export type DairyRaw = Omit<Dairy, 'PPrice'> & {
  PPrice: number;
};


export type Perishable = Product & {
  PStock: number,
  PExpiry: number,
};

export type PerishableRaw = Omit<Perishable, 'PPrice'> & {
  PPrice: number;
};
