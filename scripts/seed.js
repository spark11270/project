const { db } = require('@vercel/postgres');
const {
  products,
  snack,
  pantry,
  candy,
  beverage,
  meatAndSeafood,
  bakeryAndDessert,
  breakfast,
  cleaning,
  coffee,
  deli,
  floral,
  household,
  organic
} = require('../src/app/lib/DTO.js');

async function seedProduct(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Product" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Product (
        PId uuid PRIMARY KEY,
        PName VARCHAR(200),
        PStock INT,
        PPrice DECIMAL(10, 2)
      );
    `;

    console.log(`Created "Product" table`);

    // Insert data into the "Product" table
    const insertedProduct = await Promise.all(
      products.map(
        (p) => client.sql`
        INSERT INTO Product (PId, PName, PStock, PPrice)
        VALUES (${p.PId}, ${p.PName}, ${p.PStock}, ${p.PPrice})
      `,
      ),
    );

    console.log(`Seeded ${insertedProduct.length} products`);

    return {
      createTable,
      product: insertedProduct,
    };
  } catch (error) {
    console.error('Error seeding products:', error);
    throw error;
  }
}

async function seedSnack(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Snack" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Snack (
        PId uuid PRIMARY KEY,
        PName VARCHAR(200),
        PStock INT,
        PExpiry DATE,
        PPrice DECIMAL(10, 2)
      )
    `;

    console.log(`Created "Snack" table`);

    // Insert data into the "Snack" table
    const insertedSnack = await Promise.all(
      snack.map(
        (s) => client.sql`
        INSERT INTO Snack (PId, PName, PStock, PExpiry, PPrice)
        VALUES (${s.PId}, ${s.PName}, ${s.PStock}, ${s.PExpiry}, ${s.PPrice})
      `,
      ),
    );

    console.log(`Seeded ${insertedSnack.length} snacks`);

    const addConstraints = await client.sql`
      ALTER TABLE Snack
      ADD CONSTRAINT fk_product
      FOREIGN KEY (PId)
      REFERENCES Product(PId)
      ON DELETE CASCADE
      ON UPDATE CASCADE;
    `;

    console.log(`Updated table contraints`)

    return {
      createTable,
      snack: insertedSnack,
      addConstraints,
    };
  } catch (error) {
    console.error('Error seeding snack products:', error);
    throw error;
  }
}

async function seedPantry(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Pantry" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Pantry (
        PId uuid PRIMARY KEY,
        PName VARCHAR(200),
        PStock INT,
        PExpiry DATE,
        PPrice DECIMAL(10, 2)
      );
    `;

    console.log(`Created "Pantry" table`);

    // Insert data into the "Pantry" table
    const insertedPantry = await Promise.all(
      pantry.map(
        (p) => client.sql`
        INSERT INTO Pantry (PId, PName, PStock, PExpiry, PPrice)
        VALUES (${p.PId}, ${p.PName}, ${p.PStock}, ${p.PExpiry}, ${p.PPrice})
      `,
      ),
    );

    console.log(`Seeded ${insertedPantry.length} pantry products`);

    const addConstraints = await client.sql`
      ALTER TABLE Pantry
      ADD CONSTRAINT fk_product
      FOREIGN KEY (PId)
      REFERENCES Product(PId)
      ON DELETE CASCADE
      ON UPDATE CASCADE;
    `;

    console.log(`Updated table contraints`)

    return {
      createTable,
      pantry: insertedPantry,
      addConstraints,
    };
  } catch (error) {
    console.error('Error seeding pantry products:', error);
    throw error;
  }
}

async function seedCandy(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Candy" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Candy (
        PId uuid PRIMARY KEY,
        PName VARCHAR(200),
        PStock INT,
        PExpiry DATE,
        PPrice DECIMAL(10, 2)
      );
    `;

    console.log(`Created "Candy" table`);

    // Insert data into the "Candy" table
    const insertedCandy = await Promise.all(
      candy.map(
        (c) => client.sql`
        INSERT INTO Candy (PId, PName, PStock, PExpiry, PPrice)
        VALUES (${c.PId}, ${c.PName}, ${c.PStock}, ${c.PExpiry}, ${c.PPrice})
      `,
      ),
    );

    console.log(`Seeded ${insertedCandy.length} candy products`);

    const addConstraints = await client.sql`
      ALTER TABLE Candy
      ADD CONSTRAINT fk_product
      FOREIGN KEY (PId)
      REFERENCES Product(PId)
      ON DELETE CASCADE
      ON UPDATE CASCADE;
    `;

    console.log(`Updated table contraints`)

    return {
      createTable,
      candy: insertedCandy,
      addConstraints,
    };
  } catch (error) {
    console.error('Error seeding candy products:', error);
    throw error;
  }
}

async function seedBeverage(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Beverage" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Beverage (
        PId uuid PRIMARY KEY,
        PName VARCHAR(200),
        PStock INT,
        PExpiry DATE,
        PPrice DECIMAL(10, 2)
      );
    `;

    console.log(`Created "Beverage" table`);

    // Insert data into the "Beverage" table
    const insertedBeverage = await Promise.all(
      beverage.map(
        (b) => client.sql`
        INSERT INTO Beverage (PId, PName, PStock, PExpiry, PPrice)
        VALUES (${b.PId}, ${b.PName}, ${b.PStock}, ${b.PExpiry}, ${b.PPrice})
      `,
      ),
    );

    console.log(`Seeded ${insertedBeverage.length} beverage products`);

    const addConstraints = await client.sql`
      ALTER TABLE Beverage
      ADD CONSTRAINT fk_product
      FOREIGN KEY (PId)
      REFERENCES Product(PId)
      ON DELETE CASCADE
      ON UPDATE CASCADE;
    `;

    console.log(`Updated table contraints`)

    return {
      createTable,
      beverage: insertedBeverage,
      addConstraints,
    };
  } catch (error) {
    console.error('Error seeding beverage products:', error);
    throw error;
  }
}

async function seedMeatAndSeafood(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "MeatAndSeafood" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS MeatAndSeafood (
        PId uuid PRIMARY KEY,
        PName VARCHAR(200),
        PStock INT,
        PExpiry DATE,
        PPrice DECIMAL(10, 2)
      );
    `;

    console.log(`Created "MeatAndSeafood" table`);

    // Insert data into the "MeatAndSeafood" table
    const insertedMeatAndSeafood = await Promise.all(
      meatAndSeafood.map(
        (m) => client.sql`
        INSERT INTO MeatAndSeafood (PId, PName, PStock, PExpiry, PPrice)
        VALUES (${m.PId}, ${m.PName}, ${m.PStock}, ${m.PExpiry}, ${m.PPrice})
      `,
      ),
    );

    console.log(`Seeded ${insertedMeatAndSeafood.length} meat and seafood products`);

    const addConstraints = await client.sql`
      ALTER TABLE MeatAndSeafood
      ADD CONSTRAINT fk_product
      FOREIGN KEY (PId)
      REFERENCES Product(PId)
      ON DELETE CASCADE
      ON UPDATE CASCADE;
    `;

    console.log(`Updated table contraints`)

    return {
      createTable,
      meatAndSeafood: insertedMeatAndSeafood,
      addConstraints,
    };
  } catch (error) {
    console.error('Error seeding meat and seafood products:', error);
    throw error;
  }
}

async function seedBakeryAndDessert(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "BakeryAndDessert" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS BakeryAndDessert (
        PId uuid PRIMARY KEY,
        PName VARCHAR(200),
        PStock INT,
        PExpiry DATE,
        PPrice DECIMAL(10, 2)
      );
    `;

    console.log(`Created "BakeryAndDessert" table`);

    // Insert data into the "BakeryAndDessert" table
    const insertedBakeryAndDessert = await Promise.all(
      bakeryAndDessert.map(
        (b) => client.sql`
        INSERT INTO BakeryAndDessert (PId, PName, PStock, PExpiry, PPrice)
        VALUES (${b.PId}, ${b.PName}, ${b.PStock}, ${b.PExpiry}, ${b.PPrice})
      `,
      ),
    );

    console.log(`Seeded ${insertedBakeryAndDessert.length} bakery and dessert products`);

    const addConstraints = await client.sql`
      ALTER TABLE BakeryAndDessert
      ADD CONSTRAINT fk_product
      FOREIGN KEY (PId)
      REFERENCES Product(PId)
      ON DELETE CASCADE
      ON UPDATE CASCADE;
    `;

    console.log(`Updated table contraints`)

    return {
      createTable,
      bakeryAndDessert: insertedBakeryAndDessert,
      addConstraints,
    };
  } catch (error) {
    console.error('Error seeding bakery and dessert products:', error);
    throw error;
  }
}

async function seedBreakfast(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Breakfast" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Breakfast (
        PId uuid PRIMARY KEY,
        PName VARCHAR(200),
        PStock INT,
        PExpiry DATE,
        PPrice DECIMAL(10, 2)
      );
    `;

    console.log(`Created "Breakfast" table`);

    // Insert data into the "Breakfast" table
    const insertedBreakfast = await Promise.all(
      breakfast.map(
        (b) => client.sql`
        INSERT INTO Breakfast (PId, PName, PStock, PExpiry, PPrice)
        VALUES (${b.PId}, ${b.PName}, ${b.PStock}, ${b.PExpiry}, ${b.PPrice})
      `,
      ),
    );

    console.log(`Seeded ${insertedBreakfast.length} breakfast products`);

    const addConstraints = await client.sql`
      ALTER TABLE Breakfast
      ADD CONSTRAINT fk_product
      FOREIGN KEY (PId)
      REFERENCES Product(PId)
      ON DELETE CASCADE
      ON UPDATE CASCADE;
    `;

    console.log(`Updated table contraints`)

    return {
      createTable,
      breakfast: insertedBreakfast,
      addConstraints,
    };
  } catch (error) {
    console.error('Error seeding breakfast products:', error);
    throw error;
  }
}

async function seedCoffee(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Coffee" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Coffee (
        PId uuid PRIMARY KEY,
        PName VARCHAR(200),
        PStock INT,
        PExpiry DATE,
        PPrice DECIMAL(10, 2)
      );
    `;

    console.log(`Created "Coffee" table`);

    // Insert data into the "Coffee" table
    const insertedCoffee = await Promise.all(
      coffee.map(
        (c) => client.sql`
        INSERT INTO Coffee (PId, PName, PStock, PExpiry, PPrice)
        VALUES (${c.PId}, ${c.PName}, ${c.PStock}, ${c.PExpiry}, ${c.PPrice})
      `,
      ),
    );

    console.log(`Seeded ${insertedCoffee.length} coffee products`);

    const addConstraints = await client.sql`
      ALTER TABLE Coffee
      ADD CONSTRAINT fk_product
      FOREIGN KEY (PId)
      REFERENCES Product(PId)
      ON DELETE CASCADE
      ON UPDATE CASCADE;
    `;

    console.log(`Updated table contraints`)

    return {
      createTable,
      coffee: insertedCoffee,
      addConstraints,
    };
  } catch (error) {
    console.error('Error seeding coffee products:', error);
    throw error;
  }
}

async function seedDeli(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Deli" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Deli (
        PId uuid PRIMARY KEY,
        PName VARCHAR(200),
        PStock INT,
        PExpiry DATE,
        PPrice DECIMAL(10, 2)
      );
    `;

    console.log(`Created "Deli" table`);

    // Insert data into the "Deli" table
    const insertedDeli = await Promise.all(
      deli.map(
        (d) => client.sql`
        INSERT INTO Deli (PId, PName, PStock, PExpiry, PPrice)
        VALUES (${d.PId}, ${d.PName}, ${d.PStock}, ${d.PExpiry}, ${d.PPrice})
      `,
      ),
    );

    console.log(`Seeded ${insertedDeli.length} deli products`);

    const addConstraints = await client.sql`
      ALTER TABLE Deli
      ADD CONSTRAINT fk_product
      FOREIGN KEY (PId)
      REFERENCES Product(PId)
      ON DELETE CASCADE
      ON UPDATE CASCADE;
    `;

    console.log(`Updated table contraints`)

    return {
      createTable,
      deli: insertedDeli,
      addConstraints,
    };
  } catch (error) {
    console.error('Error seeding deli products:', error);
    throw error;
  }
}

async function seedOrganic(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Organic" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Organic (
        PId uuid PRIMARY KEY,
        PName VARCHAR(200),
        PStock INT,
        PExpiry DATE,
        PPrice DECIMAL(10, 2)
      );
    `;

    console.log(`Created "Organic" table`);

    // Insert data into the "Organic" table
    const insertedOrganic = await Promise.all(
      organic.map(
        (o) => client.sql`
        INSERT INTO Organic (PId, PName, PStock, PExpiry, PPrice)
        VALUES (${o.PId}, ${o.PName}, ${o.PStock}, ${o.PExpiry}, ${o.PPrice})
      `,
      ),
    );

    console.log(`Seeded ${insertedOrganic.length} organic products`);

    const addConstraints = await client.sql`
      ALTER TABLE Organic
      ADD CONSTRAINT fk_product
      FOREIGN KEY (PId)
      REFERENCES Product(PId)
      ON DELETE CASCADE
      ON UPDATE CASCADE;
    `;

    console.log(`Updated table contraints`)

    return {
      createTable,
      organic: insertedOrganic,
      addConstraints,
    };
  } catch (error) {
    console.error('Error seeding organic products:', error);
    throw error;
  }
}

async function seedCleaning(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Cleaning" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Cleaning (
        PId uuid PRIMARY KEY,
        PName VARCHAR(200),
        PStock INT,
        PPrice DECIMAL(10, 2)
      );
    `;

    console.log(`Created "Cleaning" table`);

    // Insert data into the "Cleaning" table
    const insertedCleaning = await Promise.all(
      cleaning.map(
        (c) => client.sql`
        INSERT INTO Cleaning (PId, PName, PStock, PPrice)
        VALUES (${c.PId}, ${c.PName}, ${c.PStock}, ${c.PPrice})
      `,
      ),
    );

    console.log(`Seeded ${insertedCleaning.length} cleaning products`);

    const addConstraints = await client.sql`
      ALTER TABLE Cleaning
      ADD CONSTRAINT fk_product
      FOREIGN KEY (PId)
      REFERENCES Product(PId)
      ON DELETE CASCADE
      ON UPDATE CASCADE;
    `;

    console.log(`Updated table contraints`)

    return {
      createTable,
      cleaning: insertedCleaning,
      addConstraints,
    };
  } catch (error) {
    console.error('Error seeding cleaning products:', error);
    throw error;
  }
}

async function seedFloral(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Floral" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Floral (
        PId uuid PRIMARY KEY,
        PName VARCHAR(200),
        PStock INT,
        PPrice DECIMAL(10, 2)
      );
    `;

    console.log(`Created "Floral" table`);

    // Insert data into the "Floral" table
    const insertedFloral = await Promise.all(
      floral.map(
        (f) => client.sql`
        INSERT INTO Floral (PId, PName, PStock, PPrice)
        VALUES (${f.PId}, ${f.PName}, ${f.PStock}, ${f.PPrice})
      `,
      ),
    );

    console.log(`Seeded ${insertedFloral.length} floral products`);

    const addConstraints = await client.sql`
      ALTER TABLE Floral
      ADD CONSTRAINT fk_product
      FOREIGN KEY (PId)
      REFERENCES Product(PId)
      ON DELETE CASCADE
      ON UPDATE CASCADE;
    `;

    console.log(`Updated table contraints`)

    return {
      createTable,
      floral: insertedFloral,
      addConstraints,
    };
  } catch (error) {
    console.error('Error seeding floral products:', error);
    throw error;
  }
}

async function seedHousehold(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Household" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Household (
        PId uuid PRIMARY KEY,
        PName VARCHAR(200),
        PStock INT,
        PPrice DECIMAL(10, 2)
      );
    `;

    console.log(`Created "Household" table`);

    // Insert data into the "Household" table
    const insertedHousehold = await Promise.all(
      household.map(
        (h) => client.sql`
        INSERT INTO Household (PId, PName, PStock, PPrice)
        VALUES (${h.PId}, ${h.PName}, ${h.PStock}, ${h.PPrice})
      `,
      ),
    );

    console.log(`Seeded ${insertedHousehold.length} household products`);

    const addConstraints = await client.sql`
      ALTER TABLE Household
      ADD CONSTRAINT fk_product
      FOREIGN KEY (PId)
      REFERENCES Product(PId)
      ON DELETE CASCADE
      ON UPDATE CASCADE;
    `;

    console.log(`Updated table contraints`)

    return {
      createTable,
      household: insertedHousehold,
      addConstraints,
    };
  } catch (error) {
    console.error('Error seeding household products:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedProduct(client);
  await seedSnack(client);
  await seedPantry(client);
  await seedCandy(client);
  await seedBeverage(client);
  await seedMeatAndSeafood(client);
  await seedBakeryAndDessert(client);
  await seedBreakfast(client);
  await seedCoffee(client);
  await seedDeli(client);
  await seedOrganic(client);
  await seedCleaning(client);
  await seedFloral(client);
  await seedHousehold(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
