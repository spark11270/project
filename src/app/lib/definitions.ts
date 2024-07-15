export type Product = {
  pid: string,
  pname: string,
  pstock: number,
  pprice: number,
};

/*------------ Subclasses ------------*/

export type Snack = Product & {
  pexpiry: string,
};

export type Pantry = Product & {
  pexpiry: string,
};

export type Candy = Product & {
  pexpiry: string,
};

export type Beverage = Product & {
  pexpiry: string,
};

export type MeatAndSeafood = Product & {
  pexpiry: string,
};

export type BakeryAndDessert = Product & {
  pexpiry: string,
};

export type Breakfast = Product & {
  pexpiry: string,
};

export type Coffee = Product & {
  pexpiry: string,
};

export type Deli = Product & {
  pexpiry: string,
};

export type Organic = Product & {
  pexpiry: string,
};

export type Cleaning = Product;

export type Floral = Product;

export type Household = Product;

export enum Category {
  Snack,
  Pantry,
  Candy,
  Beverage,
  MeatAndSeafood,
  BakeryAndDessert,
  Breakfast,
  Coffee,
  Deli,
  Organic,
  Cleaning,
  Floral,
  Household,
}

export type ProductForm = {
  id: string;
  name: string;
  category: 'Snack' | 'Pantry' | 'Candy' | 'Beverage' | 'MeatAndSeafood' | 'BakeryAndDessert' | 'Breakfast' | 'Coffee' | 'Deli' | 'Organic' | 'Cleaning' | 'Floral' | 'Household';
  stock: number;
  price: number;
  expiry: string;
};
