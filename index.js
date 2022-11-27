// import { faker } from '@faker-js/faker';
// // import {writeFile} from 'node:fs';
// // const fs = require('fs');
// // const randomName = faker.name.fullName(); // Rowan Nikolaus
// // const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
//
// function getRandomMarks(){
//   return Math.round(10 + Math.random()*90)
// }
//
// function getStudentMarks() {
//   let marks = []
//   for (let i=0; i<50; i++){
//     const randomName = faker.name.fullName();
//     let tempObj = {}
//
//     tempObj[randomName] = {
//       "english": getRandomMarks(),
//       "physics": getRandomMarks(),
//       "maths": getRandomMarks(),
//       "computer": getRandomMarks(),
//       "nepali": getRandomMarks()
//     }
//     marks.push(tempObj)
//   }
//   return marks
// }
//
// const marks = getStudentMarks();
//
// //to write to file
// // writeFile("marks.json", JSON.stringify(marks), 'utf8', (err)=>{
// //   if (err) throw err;
// //     console.log('The file has been saved!');
// // });
// console.log(marks);
//
// //write your code here

let arr=[
  {
    rabin: {
      "math": 60,
      "science": 90,
      "social": 40,
      "nepali": 80,
        "computer": 40
    }
  },
  {
    shyam: {
     "math": 70,
      "science": 90,
      "social": 40,
      "nepali": 50,
         "computer": 10
    }
  },
  {
    hari: {
     "math": 90,
      "science": 90,
      "social": 90,
      "nepali": 100,
        "computer": 90
    }
  },
  {
    pari: {
     "math": 30,
      "science": 40,
      "social": 40,
      "nepali": 20,
         "computer": 100
    }
  }
]
let avg=0
let sum=0
let n=0
let result={}
for(let item of arr){
    // console.log(item['rabin'])

    for(let key in item){
        // console.log(key)
         avg=0
         sum=0
         n=0
        for(let subject in item[key]){
            // console.log(subject)
            // console.log(item[key])
            // console.log(item[key][subject])
            sum+=item[key][subject]
            n=Object.keys(item[key]).length

            avg=sum/n
            if(item[key][subject]<40){
                // result[key]='Fail'
                console.log((item[key][subject]))

            }
            else{
                result[key]='Pass'
            }


        }
          // console.log(n)

        result[key]=avg+'%'
    }
}
   console.log(result)