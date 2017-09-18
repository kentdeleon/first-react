// import Calculator from './Calculator';

// var x = Calculator.multiply(5,4);
// console.log(x);

//Set

// let chars = 'a1231lkalskjaldkajoi1po23iad123kgldkdl';
// let charSet = new Set(chars);
// console.log(charSet);

//Map
// let numArr = [[1,'one'], [2, 'two'], [3, 'three']];
// let valMap = new Map(numArr);

// for (let [key,value] of valMap.entries()){
//     console.log(`${key} points to value ${value}`);
// }

// let string = '12313131313skdfklsflskfsk';
// let letters = new Map();

// for(let i = 0; i < string.length; i++){
//   let char = string[i];
//   if(!letters.has(char)){
//        letters.set(char,1);
//    }else{
//       letters.set(char, letters.get(char) + 1)
//   }

// }

// console.log(letters);


//Closure

// const product = x => y => y*x;
// let mult5 = product(5)(2);
// console.log(mult5);

// const budget = () => {
//     let balance = 0;
//     let updateBalance = (val) => balance += val;

//     const deposit = () => updateBalance(20);
//     const checkBalance = () => balance;

//     return { deposit, checkBalance};
// };

// let wallet = budget();
// wallet.deposit();
// wallet.deposit()
// console.log(wallet.checkBalance());

//Generators

// function* letterMaker(){
       
//     yield 'a';
//     yield 'b';
//     yield 'c';
// }


// let letterGen = letterMaker();
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);

// function* countMaker(){
//     let count = 0;
//     while(count < 3){
//         yield count += 1;
//     }
// }

// let countGen = countMaker();
// console.log(countGen.next().value);
// console.log(countGen.next().value);
// console.log(countGen.next().value);
// console.log(countGen.next().value);


// function* evens(){
//     let count = 0;
//     while(true){
//         let reset = yield count += 2;
//         if(reset){
//             count = 0;
//         }
//     }
// }

// let sequence = evens();
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next(true).value);
// console.log(sequence.next().value);

//Iterators
// const arrayIterator = (array) => {
//     let index = 0;
//     return {
//         next: () => {
//             if(index < array.length){
//                 let next = array[index];
//                 index += 1;
//                 return next;
//             }
//         }
//     }
// }

// // let it = arrayIterator([1,2,3,4,5]);

// // console.log(it.next());
// // console.log(it.next());
// // console.log(it.next());
// // console.log(it.next());


//Generator Iterator

// function* arrayIterator(){
//     //one way to iterate on each arguments
//     // for(let args of arguments){
//     //     yield args;
//     // }

//     //shortest way possible
//     yield* arguments;
// }


// var it = arrayIterator(1,2,3,4);
// console.log(it.next().value);


//Promises

// function asyncPromises(){
//     return new Promise((resolve, reject) => {
//         // resolve('Resolved Promise data');
//         // reject('Rejected data promises');
//         setTimeout(() => resolve('Resolved Promise Data'), 3000);
//     });
// }

// let p = asyncPromises();


// p.then(response => {
//     console.log(response);
// }).catch(error => {
//     console.log(error);
// })

// console.log('After promise consumptiom');v


// //const root = 'http://jsonplaceholder.typicode.com/posts/1';
// const root = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';

// fetch(root, {method: 'GET'})
// .then(response => response.json())
// .then(response => {
//   console.log(response)
// });


//ES7 and ES8

// let x = 2**4;
// console.log(x);


// let obj = {a: 'one', b: 'two', c:'three'};

// let keys = Object.keys(obj);
// let values = Object.values(obj);
// let entries = Object.entries(obj);

// console.log(keys);
// console.log(values);
// console.log(entries);


async function async_one(){
    return "async_one ()";
}


async function async_two(){
    return "async_two ()";
}

//

async function async_three(){
    const one = await async_one();
    console.log(one);
    const two = await async_two();
    console.log(two);
}

async_three();

async function async_four(){
    const[res_one, res_two] = await Promise.all(
        [
            async_one(),
            async_two()
        ]
    )

    console.log(res_one, res_two);
}