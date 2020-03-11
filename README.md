# 1712282
module.exports = class Student {
    constructor (name,matricNo,major){
        this.name=name;
        this.matricNo=matricNo;
        this.major=major;
    }
    display(name,matricNo,major){
        this.name=name;
        this.matricNo=matricNo;
        this.major=major;
        console.log(`Your name is ${name} and your matric no. ${matricNo} and you are majoring in ${major}`);
    };
    get Name(){
        return this.name;
    }
    set Name(name){
        this.name=name;
    }
    get MatricNo(){
        return this.matricNo;
    }
    set MatricNo(matricNo){
        this.matricNo=matricNo;
    }
    get Major(){
        return this.major;
    }
    set Major(major){
        this.major=major;
    }
}
