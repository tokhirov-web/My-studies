// let products = [
//     {
//         name: "milk",
//         type: "milk",
//         price: 12000
//     },
//     {
//         name: "tomato",
//         type: "vegetables",
//         price: 20000
//     },
//     {
//         name: "govyadina",
//         type: "meat",
//         price: 88000
//     },
//     {
//         name: "konyak",
//         type: "alcohol",
//         price: 50000
//     },
//     {
//         name: "tvorog",
//         type: "milk",
//         price: 13000
//     },
//     {
//         name: "potato",
//         type: "vegetables",
//         price: 5000
//     },
//     {
//         name: "kruryatina",
//         type: "meat",
//         price: 30000
//     },
//     {
//         name: "baranina",
//         type: "meat",
//         price: 80000
//     },
//     {
//         name: "kolbasa",
//         type: "meat",
//         price: 60000
//     },
//     {
//         name: "pivo",
//         type: "alcohol",
//         price: 6000
//     },
//     {
//         name: "vine",
//         type: "alcohol",
//         price: 45000
//     },
//     {
//         name: "whiskey",
//         type: "alcohol",
//         price: 10000000
//     },
//     {
//         name: "cheese",
//         type: "milk",
//         price: 600000
//     },
//     {
//         name: "yogurt",
//         type: "milk",
//         price: 10000
//     },
// ]

// let categories = [
//     {
//         type: "milk",
//         arr: [],
//         count: 0
//     },

//     {
//         type: "alcohol",
//         arr: [],
//         count: 0
//     },

//     {
//         type: "meat",
//         arr: [],
//         count: 0
//     }
// ];

// for (let item of products) {
//     // console.log(item);

//     for (let categ of categories) {
//         if (item.type === categ.type) {
//             categ.count++
//             categ.arr.push(item.name)
//         }
//     }
// }

// console.log(categories);


// for (let i = 0; i <= 6; i++) {
//     for (let k = 0; k < 3; k++) {
//         // document.write(i)
//     }
// }


// for (let i = 1; i <= 10; i++) {
//     for (let k = 1; k <= 10; k++) {
//         document.write(`${i} * ${k} = ${i * k} <br>`)
//     }
//     document.write(`<hr>`)
// }

// for (let i = 1; i <= 5; i++) {
//     for (let k = 1; k <= i; k++) {
//         document.write('* ')
//     }
//     document.write(`<br>`)
// }