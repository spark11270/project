'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {v4 as uuidv4} from 'uuid';
import { z } from 'zod';

export type State = {
  errors?: {
    name?: string[];
    category?: string[];
    stock?: string[];
    price?: string[];
    expiry?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  id: z.string(),
  name: z.string({
    required_error: 'Please input a name.',
  }),
  category: z.enum(['Snack', 'Pantry', 'Candy', 'Beverage', 'MeatAndSeafood', 'BakeryAndDessert', 'Breakfast', 'Coffee', 'Deli', 'Organic', 'Cleaning', 'Floral', 'Household'], {
    invalid_type_error: 'Please select a category.',
  }),
  stock: z.coerce
    .number()
    .gt(-1, { message: 'Please enter a valid amount.' }),
  price: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  expiry: z.string().nullish(),
});

const CreateProduct = FormSchema.omit({ id: true });
const UpdateProduct = FormSchema;

export async function createProduct(prevState: State, formData: FormData): Promise<State> {
  // Validate form using Zod
  const validatedFields = CreateProduct.safeParse({
    name: formData.get('name'),
    category: formData.get('category'),
    stock: formData.get('stock'),
    price: formData.get('price'),
    expiry: formData.get('expiry'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  // Prepare data for insertion into the database
  const { name, category, stock, price, expiry } = validatedFields.data;
  const priceInCents = price * 100;
  const id = uuidv4();
  // const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  try {
    await sql`
    INSERT INTO Product (PId, PName, PStock, PPrice)
    VALUES (${id}, ${name}, ${stock}, ${priceInCents})
    `;

    switch (category) {
      case 'Snack':
        await sql`
        INSERT INTO Snack (PId, PName, PStock, PExpiry, PPrice)
        VALUES (${id}, ${name}, ${stock}, ${expiry}, ${priceInCents})
        `;
        break;
      case 'Pantry':
        await sql`
        INSERT INTO Pantry (PId, PName, PStock, PExpiry, PPrice)
        VALUES (${id}, ${name}, ${stock}, ${expiry}, ${priceInCents})
        `;
        break;
      case 'Candy':
        await sql`
        INSERT INTO Candy (PId, PName, PStock, PExpiry, PPrice)
        VALUES (${id}, ${name}, ${stock}, ${expiry}, ${priceInCents})
        `;
        break;
      case 'Beverage':
        await sql`
        INSERT INTO Beverage (PId, PName, PStock, PExpiry, PPrice)
        VALUES (${id}, ${name}, ${stock}, ${expiry}, ${priceInCents})
        `;
        break;
      case 'MeatAndSeafood':
        await sql`
        INSERT INTO MeatAndSeafood (PId, PName, PStock, PExpiry, PPrice)
        VALUES (${id}, ${name}, ${stock}, ${expiry}, ${priceInCents})
        `;
        break;
      case 'BakeryAndDessert':
        await sql`
        INSERT INTO BakeryAndDessert (PId, PName, PStock, PExpiry, PPrice)
        VALUES (${id}, ${name}, ${stock}, ${expiry}, ${priceInCents})
        `;
        break;
      case 'Breakfast':
        await sql`
        INSERT INTO Breakfast (PId, PName, PStock, PExpiry, PPrice)
        VALUES (${id}, ${name}, ${stock}, ${expiry}, ${priceInCents})
        `;
        break;
      case 'Coffee':
        await sql`
        INSERT INTO Coffee (PId, PName, PStock, PExpiry, PPrice)
        VALUES (${id}, ${name}, ${stock}, ${expiry}, ${priceInCents})
        `;
        break;
      case 'Deli':
        await sql`
        INSERT INTO Deli (PId, PName, PStock, PExpiry, PPrice)
        VALUES (${id}, ${name}, ${stock}, ${expiry}, ${priceInCents})
        `;
        break;
      case 'Organic':
        await sql`
        INSERT INTO Organic (PId, PName, PStock, PExpiry, PPrice)
        VALUES (${id}, ${name}, ${stock}, ${expiry}, ${priceInCents})
        `;
        break;
      case 'Cleaning':
        await sql`
        INSERT INTO Cleaning (PId, PName, PStock, PPrice)
        VALUES (${id}, ${name}, ${stock}, ${priceInCents})
        `;
        break;
      case 'Floral':
        await sql`
        INSERT INTO Floral (PId, PName, PStock, PPrice)
        VALUES (${id}, ${name}, ${stock}, ${priceInCents})
        `;
        break;
      case 'Household':
        await sql`
        INSERT INTO Household (PId, PName, PStock, PPrice)
        VALUES (${id}, ${name}, ${stock}, ${priceInCents})
        `;
        break;      
    }
  } catch (error) {
    // If a database error occurs, return a more specific error.
    console.error(error)
    return {
      message: 'Database Error: Failed to Create Product.',
    };
  }

  // Revalidate the cache for the products page and redirect the user.
  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
}

export async function updateProduct(
  id: string,
  prevState: State,
  formData: FormData,
): Promise<State> {
  const validatedFields = UpdateProduct.safeParse({
    name: formData.get('name'),
    category: formData.get('category'),
    price: formData.get('price'),
    stock: formData.get('stock'),
    expiry: formData.get('expiry'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Product.',
    };
  }

  const { name, category, price, stock, expiry } = validatedFields.data;
  const formattedPrice = price * 100;

  try {
    switch (category) {
      case 'Snack':
        await sql`
        UPDATE Snack
        SET PName = ${name} PStock = ${stock} PExpiry = ${expiry} PPrice = ${formattedPrice},
        WHERE PId = ${id}
        `;
        break;
      case 'Pantry':
        await sql`
        UPDATE Pantry
        SET PName = ${name} PStock = ${stock} PExpiry = ${expiry} PPrice = ${formattedPrice},
        WHERE PId = ${id}
        `;
        break;
      case 'Candy':
        await sql`
        UPDATE Candy
        SET PName = ${name} PStock = ${stock} PExpiry = ${expiry} PPrice = ${formattedPrice},
        WHERE PId = ${id}
        `;
        break;
      case 'Beverage':
        await sql`
        UPDATE Beverage
        SET PName = ${name} PStock = ${stock} PExpiry = ${expiry} PPrice = ${formattedPrice},
        WHERE PId = ${id}
        `;
        break;
      case 'MeatAndSeafood':
        await sql`
        UPDATE MeatAndSeafood
        SET PName = ${name} PStock = ${stock} PExpiry = ${expiry} PPrice = ${formattedPrice},
        WHERE PId = ${id}
        `;
        break;
      case 'BakeryAndDessert':
        await sql`
        UPDATE BakeryAndDessert
        SET PName = ${name} PStock = ${stock} PExpiry = ${expiry} PPrice = ${formattedPrice},
        WHERE PId = ${id}
        `;
        break;
      case 'Breakfast':
        await sql`
        UPDATE Breakfast
        SET PName = ${name} PStock = ${stock} PExpiry = ${expiry} PPrice = ${formattedPrice},
        WHERE PId = ${id}
        `;
        break;
      case 'Coffee':
        await sql`
        UPDATE Coffee
        SET PName = ${name} PStock = ${stock} PExpiry = ${expiry} PPrice = ${formattedPrice},
        WHERE PId = ${id}
        `;
        break;
      case 'Deli':
        await sql`
        UPDATE Deli
        SET PName = ${name} PStock = ${stock} PExpiry = ${expiry} PPrice = ${formattedPrice},
        WHERE PId = ${id}
        `;
        break;
      case 'Organic':
        await sql`
        UPDATE Organic
        SET PName = ${name} PStock = ${stock} PExpiry = ${expiry} PPrice = ${formattedPrice},
        WHERE PId = ${id}
        `;
        break;
      case 'Cleaning':
        await sql`
        UPDATE Cleaning
        SET PName = ${name} PStock = ${stock} PPrice = ${formattedPrice},
        WHERE PId = ${id}
        `;
        break;
      case 'Floral':
        await sql`
        UPDATE Floral
        SET PName = ${name} PStock = ${stock} PPrice = ${formattedPrice},
        WHERE PId = ${id}
        `;
        break;
      case 'Household':
        await sql`
        UPDATE Household
        SET PName = ${name} PStock = ${stock} PPrice = ${formattedPrice},
        WHERE PId = ${id}
        `;
        break;        
    }
  } catch (error) {
    return { message: 'Database Error: Failed to Update Product.' };
  }

  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
}

export async function deleteProduct(id: string) {
  try {
    await sql`DELETE FROM Product WHERE Product.PId = ${id}`;
    revalidatePath('/dashboard/products');
    return { message: 'Deleted product.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Product.' };
  }
}
