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

export {};