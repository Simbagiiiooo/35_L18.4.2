// A

const superHeroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}
]
    
const findSpiderMan = superHeroes.find((item) =>{
    return item.name === "Spiderman";
})
        
console.log(findSpiderMan); 
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//  B

const array = [1, 2, 3]

const doubleArrayValues = array.map((item) =>{
    return item * 2
})
    
console.log(doubleArrayValues);
// result should be [2, 4, 6]

//  C

// const items1 = [1, 4, 3, 6, 9, 7, 11]
// const items2 = [1,2,1,2,1,2]
// const containsNumberBiggerThan10 = items1.some((item) =>{
//     return item >= 10
// })
// const containsNumbersBiggerThan10 = items2.some((item) =>{
//     return item >= 10
// })

// console.log(containsNumberBiggerThan10) 
// // result should be true
// console.log(containsNumbersBiggerThan10)
// // result should be false



const containsNumberBiggerThan10 = (array) =>{
    const newArray = array.some >= 10;
    return newArray;
};

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])) 
// result should be true
console.log(containsNumberBiggerThan10([1,2,1,2,1,2]));
// result should be false

//  D

const isItalyInTheGreat7 = (array) =>{
    array.find === "italy";
};

isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 
// result should be true

// E
