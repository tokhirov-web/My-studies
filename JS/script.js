

//  процент умножить на сумму и разделить на 100

let arr = [{
    id: 1,
    name: "AZIZs_KABLUK",
    budget: 500000,
    tax: 12,
    expensesPerYear: [{
        for: "design",
        total: 60000,
    },
    {
        for: "material",
        total: 70000,
    },
    {
        for: "place",
        total: 120000,
    },
    ],
},
{
    id: 2,
    name: "KAMERON_CINEMA",
    budget: 600000,
    tax: 12,
    expensesPerYear: [{
        for: "camera",
        total: 90000,
    },
    {
        for: "actors",
        total: 140000,
    },
    {
        for: "electricity",
        total: 50000,
    },
    ],
},
{
    id: 3,
    name: "ISKANDARs_ZOO",
    budget: 450000,
    tax: 12,
    expensesPerYear: [{
        for: "animals",
        total: 100000,
    },
    {
        for: "cloune",
        total: 15000,
    },
    {
        for: "food",
        total: 70000,
    },
    ],
},
{
    id: 4,
    name: "AMINs_SOOOO",
    budget: 800000,
    tax: 12,
    expensesPerYear: [{
        for: "house",
        total: 200000,
    },
    {
        for: "cars",
        total: 150000,
    },
    {
        for: "family",
        total: 300000,
    },
    {
        for: "girls",
        total: 90000,
    },
    ],
},
{
    id: 5,
    name: "new comp",
    budget: 1000000,
    tax: 12,
    expensesPerYear: [{
        for: "house",
        total: 200000,
    },
    {
        for: "cars",
        total: 150000,
    },
    {
        for: "family",
        total: 300000,
    },
    {
        for: "girls",
        total: 90000,
    },
    ],
},
];


for (let item of arr) {
    let money = item['budget']
    let procent = item['tax']

    let sum = procent * money / 100

    item.totalTaxAmount = sum

    item.BudgetPerMonth = Math.round(item.budget / 12)

    // console.log(sum, item.name);

    item.ExpensesPerMonth = Math.round(item.expensesPerYear.reduce((a, b) => {
        return a + b.total
    }, 0) / 12)

    item.expensesPerMonthInPercent = Math.round(item.ExpensesPerMonth / item.BudgetPerMonth * 100)
};



// let max = arr.reduce((a, b) => {
//     if (a.totalTax > b.totalTax) {
//         return a
//     } else {
//         return b
//     }
// });

// let min = arr.reduce((a, b) => {
//     if (a.totalTax < b.totalTax) {
//         return a
//     } else {
//         return b
//     }
// });



// console.log(max);

// console.log(min);

console.log(arr);