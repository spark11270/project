const { db } = require('@vercel/postgres');
const {
  product,
  perishable,
  dairy,
  meat,
} = require('../src/app/lib/sample-data.js');

async function seedProduct(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Product" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Product (
        PNumber INT PRIMARY KEY,
        PName VARCHAR(100),
        PStock INT,
        PPrice DECIMAL(10, 2)
      );
    `;

    console.log(`Created "Product" table`);

    // Insert data into the "Product" table
    const insertedProducts = await Promise.all(
      product.map(
        (p) => client.sql`
        INSERT INTO Product (PNumber, PName, PStock, PPrice)
        VALUES (${p.PNumber}, ${p.PName}, ${p.PStock}, ${p.PPrice})
      `,
      ),
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    return {
      createTable,
      products: insertedProducts,
    };
  } catch (error) {
    console.error('Error seeding products:', error);
    throw error;
  }
}

async function seedPerishable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Perishable" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Perishable (
        PNumber INT PRIMARY KEY,
        PName VARCHAR(100),
        PStock INT,
        PExpiry DATE,
        PPrice DECIMAL(10, 2)
      );
    `;

    console.log(`Created "Perishable" table`);

    // Insert data into the "Perishable" table
    const insertedPerishables = await Promise.all(
      perishable.map(
        (p) => client.sql`
        INSERT INTO Perishable (PNumber, PName, PStock, PExpiry, PPrice)
        VALUES (${p.PNumber}, ${p.PName}, ${p.PStock}, ${p.PExpiry}, ${p.PPrice})
      `,
      ),
    );

    console.log(`Seeded ${insertedPerishables.length} perishables`);

    return {
      createTable,
      perishables: insertedPerishables,
    };
  } catch (error) {
    console.error('Error seeding perishables:', error);
    throw error;
  }
}

async function seedDairy(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Dairy" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Dairy (
        PNumber INT PRIMARY KEY,
        PName VARCHAR(100),
        PStock INT,
        PExpiry DATE,
        PPrice DECIMAL(10, 2)
      );
    `;

    console.log(`Created "Dairy" table`);

    // Insert data into the "Dairy" table
    const insertedDairy = await Promise.all(
      dairy.map(
        (d) => client.sql`
        INSERT INTO Dairy (PNumber, PName, PStock, PExpiry, PPrice)
        VALUES (${d.PNumber}, ${d.PName}, ${d.PStock}, ${d.PExpiry}, ${d.PPrice})
      `,
      ),
    );

    console.log(`Seeded ${insertedDairy.length} dairy products`);

    return {
      createTable,
      dairy: insertedDairy,
    };
  } catch (error) {
    console.error('Error seeding dairy products:', error);
    throw error;
  }
}

async function seedMeat(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Meat" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Meat (
        PNumber INT PRIMARY KEY,
        PName VARCHAR(100),
        PStock INT,
        PExpiry DATE,
        PPrice DECIMAL(10, 2)
      );
    `;

    console.log(`Created "Meat" table`);

    // Insert data into the "Meat" table
    const insertedMeat = await Promise.all(
      meat.map(
        (m) => client.sql`
        INSERT INTO Meat (PNumber, PName, PStock, PExpiry, PPrice)
        VALUES (${m.PNumber}, ${m.PName}, ${m.PStock}, ${m.PExpiry}, ${m.PPrice})
      `,
      ),
    );

    console.log(`Seeded ${insertedMeat.length} meat products`);

    return {
      createTable,
      meat: insertedMeat,
    };
  } catch (error) {
    console.error('Error seeding meat products:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedProduct(client);
  await seedPerishable(client);
  await seedDairy(client);
  await seedMeat(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
