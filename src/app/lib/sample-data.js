const product = [
    {
        PNumber: 1001,
        PName: 'Rice',
        PStock: 50,
        PPrice: 20.00,
    },
    {
        PNumber: 1002,
        PName: 'Wheat Flour',
        PStock: 30,
        PPrice: 15.00,
    },
    {
        PNumber: 1003,
        PName: 'Sugar',
        PStock: 100,
        PPrice: 10.00,
    },
    {
        PNumber: 1004,
        PName: 'Salt',
        PStock: 200,
        PPrice: 5.00,
    },
];

const perishable = [
    {
        PNumber: 2001,
        PName: 'Apple',
        PStock: 50,
        PPrice: 3.00,
        PExpiry: '2024-07-01'
    },
    {
        PNumber: 2002,
        PName: 'Banana',
        PStock: 30,
        PPrice: 2.00,
        PExpiry: '2024-06-25'
    },
    {
        PNumber: 2003,
        PName: 'Lettuce',
        PStock: 100,
        PPrice: 1.50,
        PExpiry: '2024-06-23'
    },
    {
        PNumber: 2004,
        PName: 'Tomato',
        PStock: 200,
        PPrice: 2.50,
        PExpiry: '2024-06-28'
    },
];
const dairy = [
    {
        PNumber: 3001,
        PName: 'Milk',
        PStock: 50,
        PPrice: 1.50,
        PExpiry: '2024-06-25'
    },
    {
        PNumber: 3002,
        PName: 'Cheese',
        PStock: 30,
        PPrice: 3.50,
        PExpiry: '2024-07-15'
    },
    {
        PNumber: 3003,
        PName: 'Yogurt',
        PStock: 100,
        PPrice: 2.00,
        PExpiry: '2024-06-30'
    },
    {
        PNumber: 3004,
        PName: 'Butter',
        PStock: 200,
        PPrice: 4.00,
        PExpiry: '2024-07-20'
    },
];
const meat = [
    {
        PNumber: 4001,
        PName: 'Chicken Breast',
        PStock: 50,
        PPrice: 5.00,
        PExpiry: '2024-06-25'
    },
    {
        PNumber: 4002,
        PName: 'Ground Beef',
        PStock: 30,
        PPrice: 6.50,
        PExpiry: '2024-06-23'
    },
    {
        PNumber: 4003,
        PName: 'Pork Chops',
        PStock: 100,
        PPrice: 4.50,
        PExpiry: '2024-07-01'
    },
    {
        PNumber: 4004,
        PName: 'Salmon Fillet',
        PStock: 200,
        PPrice: 10.00,
        PExpiry: '2024-06-28'
    },
];

module.exports = {
    product,
    perishable,
    dairy,
    meat
};
  