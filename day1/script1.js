// const divElement=document.getElementById("one")
// divElement.innerHTML="Welcome to FSD"

// let player={
//     jno:18,
//     pname:"Virat",
//     mp:100,
//     rs:5000,
//     'mom-name':'Saroj',
//     dad:100,
//     'dad-name':'Prem Nath'
// }

// const name=99

// console.log('I like ' , player.pname);
// console.log(`I like ${player.pname}`)
// console.log(player['pname'])

// console.log(player['mom-name'])
// console.log(player.dad-name)
// console.log(player['dad-name'])
// console.log(player)
// player.centuries=85


// let player={
//     pno:18,
//     pname:'Virat'
// }
// console.log(player)
// player.pno=45;
// player.pname='Rohit';
// console.log(player)

// player="Apple"

// for
// forEach
// while
// do while

//sum of 1st 5 natural numbers
//traditional for loop
// let sum=0
// for(let i=1;i<=5;i++)
//     sum+=i
// console.log(sum)


//sum of all elements in an array
//for each lopp in javascript is known as "for of loop"
// let arr=[10,20,30,40,50]
// let sum1=0
// for(let num of arr)     //num=10
// {
// sum1+=num
//     if(sum1>=100)
//         break;    // prematurely terminate a loop we use break
// }               // break is used to stop a loop

// console.log(sum1)

// // for in loop is used to iterate thru the keys of an object

// let player={
//     jno:18,
//     pname:"Virat",
//     mp:100,
//     rs:5000
// }

// for(let key in player)
// {
//     console.log(`${key} is ${player[key]}`)
// }

// //forEach method
// const cars=["Audi","BMW","Merc"];
// //display I drive Audi, I drive BMW, I drive Merc


// function greet()
// {
//     console.log("Welcome to Pune, Virat")
// }

// greet()
// // - function keyword
// // - functio name 
// // + =>
// const greet1=()=>
// {
//     console.log("Welcome to Pune, Virat")
// }
// greet1()

// cars.forEach(
//     (car)=>{
//             console.log(`I drive ${car}`)
//     }
// )


// display I drive followed by car name
// for those cars whose length > 3
// console.log("****")
// const cars1=["Audi","BMW","Merc","Tesla", "Mahindra", "Honda"];
// cars1.forEach(
//     (car)=>{
//             if(car.length<=3)
//                 return
//             console.log(`I drive ${car}`)
//     }
// )

//return in foreach works like continue in a loop


//map filter 

 const arr=[11,12,13,14,15]

// //display me the square of all odd numbers
// //[1,9,25]

// let oddNumbers=arr.filter(
//     (num)=> num%2==1
// )
// //oddNumbers=[1,3,5]  => [1,9,25]
// const oddSquares=oddNumbers.map(
//     (num)=>num*num
// )

// oddSquares.forEach(
//     (num)=>console.log(num)
// )


arr.filter(n=>n%2==1).map(n=>n*n).forEach(n=>console.log(n))

let a=10
let b="Apple"
let c=[10,20,30]   // [ ] array, list, collection
let d={            // { } object    
    x:1,
    y:2
}

function test()
{
    console.log("hi")
}
console.log(typeof(a))  //number
console.log(typeof(b))  //string
console.log(typeof(c))  //object
console.log(typeof(d))  //object
console.log(typeof(test)) //function

//Javascript object   key:value
let player={
    jno:18,  //type of value? number
    pname:"Virat",  //type of value? string
    mp:100,
    rs:5000,
    century:{
        odi:54,
        test:30,
        t20i:1
    },
    trophies:['champions','ipl','t20wc','asia cup'],
    avg: ()=>
         {
            console.log(this.rs/this.mp)
         }
}
//number as a value to a key in JS object : Yes
//string as a value to a key in JS object : Yes
//array as a value to a key in JS object : Yes
//object as a value to a key in JS object : Yes
//function as a value to a key in JS object : Yes

player.avg();