// // ariables, Data types, and Operators

// // 1. Area of a Circle:  
// // Write a function to calculate the area of a circle given its radius.
// function calculateAreaOfCircle(radius) {
//     return Math.PI * radius * radius;
// }

// // 2. String Interpolation:  
// // Create a function that takes two strings (first name and last name) and returns the full name.
// function getFullName(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }

// // 3. Convert Minutes to Hours and Minutes:  
// // Write a function to convert total minutes into hours and minutes (e.g., 125 minutes → 2 hours 5 minutes).
// function convertMinutesToHoursAndMinutes(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;
//     return `${hours} hours ${minutes} minutes`;
// }
// // 4. Check Data Type:  
// // Create a function that accepts a value and returns its data type.
// function getType(value) {
//     return typeof value;
// }
// // 5. Temperature Converter:  
// // Convert temperatures between Celsius and Fahrenheit using a function.
// function convertTemperature(value, unit) {
//     if (unit === 'C') {
//         return (value * 9/5) + 32; // Celsius to Fahrenheit
//     } else if (unit === 'F') {
//         return (value - 32) * 5/9; // Fahrenheit to Celsius
//     } else {
//         throw new Error('Invalid unit');
//     }
// }
// // 6. Check Even or Odd:  
// // Write a function to check if a number is even or odd.
// function isEvenOrOdd(number) {
//     return number % 2 === 0 ? 'Even' : 'Odd';
// }

// // 7. Calculate Total Bill:  
// // Write a function to calculate the total bill, including a 10% tip.
// function calculateTotalBill(amount) {
//     return amount + amount * 0.1;
// }

// // 8. Compare Two Numbers:  
// // Create a function that returns the larger of two numbers.
// function getLargerNumber(number1, number2) {
//     return Math.max(number1, number2);
// }

// // 9. Reverse a String:  
// // Write a function to reverse a given string.
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// // 10. Calculate Age:  
// // Given a birth year, calculate the person's current age.
// function calculateAge(birthYear) {
//     return new Date().getFullYear() - birthYear;
// }





class Animal {
    constructor(name) {
        this.name = name;
        
    }

    makeSound(name) {
        console.log('Animal sound', name);
    }
    makeSound() {
        console.log('Animal sound');
    }
}

class Dog extends Animal{
    makeSound() {
        console.log('Bark');
    }
}

const dog = new Dog('Rex');
const animal = new Animal('Dog');
console.log(animal.makeSound());
console.log(dog.makeSound());
console.log(animal.makeSound("rax"));