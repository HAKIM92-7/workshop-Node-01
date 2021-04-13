// console.log('welcome to node.js !')


// // http module 
// const http = require('http') 


// http.createServer((req,res) => {



// res.end('hello world')


// }).listen(1111)

// // fs module 

// const fs = require('fs')


// fs.readFile('nodeTests' , (err , data) => {

// if(err) {
//     console.log(err);

// }
// else {

// console.log("async data:" , data.toString());

// }




// })





// let data = fs.readFileSync('nodeTests')

// console.log(data.toString()) 


// fs.readdir('./' ,  (err , files) => {

// if(err) {
//     console.log(err)
// }
// else {

// console.log('files:' , files );

// }



// })

// // Local module 

// const mainModule = require('./main')

// mainModule.miliplication(4,5)
// mainModule.plus(4,5)

// // third party modules 

// const uuid= require ('uuid')

// const persons = [

// {  id : uuid.v4() , 
//    firstname : "John" ,
//    lastname:"Doe"
// },

// { id : uuid.v4() ,
//   firstname : "John" ,
//   lastname:"Snow" 


// },

// { id : uuid.v4() ,
//   firstname : "Mark" ,

//   lastname:"Zuckerberg"


// }

// ]

// console.log(persons);


// console.log(__filename)
// console.log(__dirname)

const mainModule = require ('./main')

mainModule.plus(...process.argv.slice(2))

console.log(process.argv)
