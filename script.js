'use strict';
// ......1

// function sumOfPositiveNumbers(numbers) {
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] > 0) {
//         sum += numbers[i];
//       }
//     }

//     return sum;
//   }

//   const inputNumbers = [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8];
//   const result = sumOfPositiveNumbers(inputNumbers);
//   console.log(result);

// ან
// function sum(...numbersArray) {
//   let numberSum = 0;
//   for (let item of numbersArray) {
//       if (item > 0) {
//           numberSum += item; 
//       }
//   }
//   return numberSum;
// }

// let resultSum = sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);

// console.log(resultSum);

//   131

// .....2
// function calculateSum(numbers) {
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }

//     return sum;
//   }

//   const inputNumbers = [10, 50, 6, 7, 8, 11, 6, 3, 9];
//   const result = calculateSum(inputNumbers);
//   console.log(result);


// ან
// function calculateSum(...numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return sum;
// }
// let resultSum = calculateSum(10, 50, 6, 7, 8, 11, 6, 3, 9);

// console.log(resultSum);

//   110

// .....3
// let user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
//   }
  
//   function getFullNameWithStatus(user) {
//     if (user.isloggedin) {
//       return `${user.firstname} ${user.lastname}`;
//     } else {
//       return 'false';
//     }
//   }
  
//   let fullNameOrStatus = getFullNameWithStatus(user);
//   console.log(fullNameOrStatus);
  
// ან
// let userName = (firstname, lastname, age, isloggedin) => {
//   let nameResult = isloggedin = true ? `${firstname} ${lastname}` :'false';
//   return nameResult;
// }
//   let userNameResult = userName('giorgi','saakadze', 32, true);
//   console.log(userNameResult);


//   giorgi saakadze


// 4

// function findMaxNumber(numbers) {
//     let maxNumber = numbers[0]; 
  
//     for (let i = 1; i < numbers.length; i++) {
//       if (numbers[i] > maxNumber) {
//         maxNumber = numbers[i]; 
//       }
//     }
  
//     return maxNumber;
//   }
  
//   let numbersArray = [5, 52, 20, 14, 33];
//   let maxNumber = findMaxNumber(numbersArray);
//   console.log("მაქსიმალური რიცხვი:", maxNumber); 

//   მაქსიმალური რიცხვი: 52



//   5
// function checkOddEven(number) { 
//     if (number % 2 === 0) {
//       return 'This number is even';
//     } else {
//       return 'This number is odd';
//     }
//   }
  
//   let inputNumber = 5;
//   let result = checkOddEven(inputNumber);
//   console.log(result); 
  
//   This number is odd


// 6
// let array = [1, 2, 3, 4, 5];
// let reversedArray = array.reverse();

// console.log(reversedArray); 


// [5, 4, 3, 2, 1]

// ან
// let array = [1, 2, 3, 4, 5];
// for (let item = array.length - 1; item >= 0; item--) {
// console.log(array[item]);
// }

// 7

// const calculateAgeCategory = (age) => {
//     if (age > 18) {
//       return "სრულწლოვანი";
//     } else {
//       return "არასრულწლოვანი";
//     }
//   };
  
  // მაგალითი:
//   const userAge = 36;
//   const ageCategory = calculateAgeCategory(userAge);
//   console.log(ageCategory); 
  
  // "სრულწლოვანი"
  


// 8
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < array2.length; i++) {
//   if (array2[i] === 5) {
//     console.log('არის');
//     break;
//   }
// }

// არის



// 9
// let array5 = [1, 2, 3, 7, 6, 9];

// for (let i = 0; i < array5.length; i++) {
//   if (array5[i] === 7) {
//     continue; 
//   }
//   console.log(array5[i]);
// }


// 1
// 2
// 3
// 6
// 9

