"use strict";
let Student1 = require ('./Student.js')
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout

});

    rl.question('Name   : ', (name)=>{
    rl.question('Matric no.: ', (matricNo)=>{
    rl.question('Major  : ', (major)=>{
        Student1.prototype.display(name,matricNo,major);
        rl.close();
    });
    });
    });