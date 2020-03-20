'use strict'

class FirstClass{
    constructor(name,age,city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    getAge(){
        return this.age;
    }

    SetAge(NewAge){
        this.age = NewAge;
        return this.age;
    }
}

let Employee = {
    name:"Joe",
    age:24,
    display(){
        return this.age;
    },
    place:"Programmer",
    salary:1300,
    setSalary(val){
        this.salary = val;
    },
    showSalary(){
        console.log(this.salary);
    }
};

function Employer(_name,_age,_salary){
    this.name = _name;
    this.age = _age;
    this.salary = _salary;
    this.sex = "male";
    this.showName = function () {
        console.log(this.name);
    }
    this.setWage = function (salary) {
        this.salary = salary;
    }
}

function callObject1() {
    let People1 = new FirstClass("Tony", 20, "London");

    console.log(People1.name);
    People1.SetAge(19);
    console.log(People1.getAge());
}

function  callObject2() {
    Employee.setSalary(20000);
    Employee.showSalary();
}

function callObject3() {
    let Wang = new Employer("Wang",22,2000);
    console.log("The salary of the employer is " + Wang.salary);
    Wang.showName();
    Wang.setWage(2000000);
    console.log(Wang.salary)
}


callObject2();
callObject3()