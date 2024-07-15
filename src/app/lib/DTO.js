const { faker } = require('@faker-js/faker');
const { v4: uuidv4 } = require('uuid')
const csvToJson = require('convert-csv-to-json');

const products = [];
const snack = [];
const pantry = [];
const candy = [];
const beverage = [];
const meatAndSeafood = [];
const bakeryAndDessert = [];
const breakfast = [];
const cleaning = [];
const coffee = [];
const deli = [];
const floral = [];
const household = [];
const organic = [];


let result = csvToJson.fieldDelimiter(',')
                        .formatValueByType()
                        .supportQuotedField(true)
                        .getJsonFromCsv('/Users/sharonpark/School/cs338/inventory/GroceryDataset.csv');

result.map(r => {
    const product = {
        PId: uuidv4(),
        PName: r.Title,
        PStock: Math.floor( Math.random() * 1000 ),
        PPrice: parseInt(r.Price.slice(1), 10),
    };

    products.push(product);

    if (r.SubCategory == 'Snacks') {
        snack.push({
            ...product,
            PExpiry: faker.date.soon()
        });
    }

    if (r.SubCategory == 'Pantry & Dry Goods') {
        pantry.push({
            ...product,
            PExpiry: faker.date.soon()
        });
    }

    if (r.SubCategory == 'Candy') {
        candy.push({
            ...product,
            PExpiry: faker.date.soon()
        });
    }

    if (r.SubCategory == 'Beverages & Water') {
        beverage.push({
            ...product,
            PExpiry: faker.date.soon()
        });
    }

    if (r.SubCategory == 'Meat & Seafood') {
        meatAndSeafood.push({
            ...product,
            PExpiry: faker.date.soon()
        });
    }

    if (r.SubCategory == 'Bakery & Desserts') {
        bakeryAndDessert.push({
            ...product,
            PExpiry: faker.date.soon()
        });
    }

    if (r.SubCategory == 'Breakfast') {
        breakfast.push({
            ...product,
            PExpiry: faker.date.soon()
        });
    }

    if (r.SubCategory == 'Coffee') {
        coffee.push({
            ...product,
            PExpiry: faker.date.soon()
        });
    }

    if (r.SubCategory == 'Deli') {
        deli.push({
            ...product,
            PExpiry: faker.date.soon()
        });
    }

    if (r.SubCategory == 'Organic') {
        organic.push({
            ...product,
            PExpiry: faker.date.soon()
        });
    }

    if (r.SubCategory == 'Cleaning Supplies') {
        cleaning.push(product);
    }

    if (r.SubCategory == 'Floral') {
        floral.push(product);
    }

    if (r.SubCategory == 'Household') {
        household.push(product);
    }
});

module.exports = { 
    products,
    snack,
    pantry,
    candy,
    beverage,
    meatAndSeafood,
    bakeryAndDessert,
    breakfast,
    coffee,
    deli,
    organic,
    cleaning,
    floral,
    household
};
