import { faker } from '@faker-js/faker';
import {writeFile} from 'node:fs';
// const fs = require('fs');
// const randomName = faker.name.fullName(); // Rowan Nikolaus
// const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

function getRandomMarks(){
  return Math.round(10 + Math.random()*90)
}

function getStudentMarks() {
  let marks = []
  for (let i=0; i<50; i++){
    const randomName = faker.name.fullName(); 
    let tempObj = {}
    
    tempObj[randomName] = {
      "english": getRandomMarks(),
      "physics": getRandomMarks(),
      "maths": getRandomMarks(),
      "computer": getRandomMarks(),
      "nepali": getRandomMarks()
    }
    marks.push(tempObj)
  }
  return marks
}

const marks = getStudentMarks();
writeFile("marks.json", JSON.stringify(marks), 'utf8', (err)=>{
  if (err) throw err;
    console.log('The file has been saved!');
});
console.log(marks);
