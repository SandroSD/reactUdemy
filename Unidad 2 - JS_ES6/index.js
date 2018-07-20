const printMyName = (name, age) => {
    console.log(name);
    console.log(age);
  }
  
  printMyName("SANDRO", "27");
  
  const multiply = (number) => number * 2;  //puede ir sin llaves y no escribir return.
  console.log(multiply(2));

  class Person{
    name ="Max" // property
    call = () => {} // methods
  }

  const myPerson = new Person()
  myPerson.call()
  console.log(myPerson.name);

  //class Person extends Master ===> Inheritance

  class Human{
  
    gender = "Male";
    
    printGender = () => {
      console.log(this.gender);
    }
  }
  
  class Person extends Human{  
    
    name="Sandro";
    gender="Female";
      
    printMyName = () => {
      console.log(this.name);
    }
  }
  
  const person = new Person();
  person.printMyName();
  person.printGender();
/**Spread Operator */
const numbers = [1, 2, 3];
const newNumbers1 = [...numbers, 4];
const newNumbers2 = [numbers, 4];

console.log(newNumbers1);
console.log(newNumbers2);

const person = {
  name: 'Max';
};

const newPerson = {
  ...person,
  age: 28
}

console.log(newPerson);
/**Rest Operator */
const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));

/**Destructuring */
const numbers = [1,2,3];
[num1, num2] = numbers;
console.log(num1, num2);

const numbers = [1,2,3];
const doubleNumArray = numbers.map((num) => {
  return num * 2;
});

console.log(numbers);
console.log(doubleNumArray);