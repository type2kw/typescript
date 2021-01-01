const name = "John",
    age = 24,
    gender = "Male";

const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age, gender); // -> Hello John, you are 24, you are a Male
// sayHi(name, age); -> error TS2554: Expected 3 arguments, but got 2. 에러발생 = 컴파일시 타입체크를 통해 오류를 잡아줌

const sayHi2 = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi2(name, age); // -> Hello John, you are 24, you are a undefined = {gender?}를 통해 옵셔널 값으로 타입 지정 가능 


// argument에 대한 타입지정, function의 return 타입 지정
const sayHi3 = (name: string, age: number, gender: string): void => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi3("Henry", 26, "male");

const sayHi4 = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi4("Henry", 26, "male"));



// object & interface

interface Human {
    name: string,
    age: number,
    gender: string
};

const person = {
    name: "Henry",
    age: 33,
    gender: "male" 
}

const sayHi5 = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi5(person));


// class

class HumanClass {
    public name: string;
    private age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    
    /**
     * getAge
     */
    public getAge() {
        return this.age;
    }
};

const lynn = new HumanClass("Lynn", 19, "female");

const sayHi6 = (person: HumanClass): string => {
    return `Hello ${person.name}, you are ${person.getAge()}, you are a ${person.gender}!!`;
};

console.log(sayHi6(lynn));

export {};