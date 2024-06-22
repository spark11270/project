export type Product = {
  pnumber: number,
  pname: string,
  pstock: number,
  pprice: string,
};

/*------------ Subclasses ------------*/

export type Meat = Product & {
  pexpiry: string,
};

export type Dairy = Product & {
  pexpiry: string,
};


export type Perishable = Product & {
  pexpiry: string,
};
