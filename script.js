//Weekly Assessment
// 1 Write a simple JavaScript program to join all elements of the following array into a string.
// function join(myColor) {
//   console.log(myColor.slice().join(","));
// }
// join(["Red", "Green", "White", "Black"]);

//3 ungrouped elements in an array

// function unzip(arr) {
//   const result = [];
//   let maxLength = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > maxLength) {
//       maxLength = arr[i].length;
//     }
//   }
//   for (let i = 0; i < maxLength; i++) {
//     const temp = [];
//     console.log(temp);
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j][i] !== undefined) {
//         temp.push(arr[j][i]);
//       }
//     }

//     result.push(temp);
//   }

//   return result;
// }
// console.log(
//   unzip([
//     ["a", 1, true],
//     ["b", 2, false],
//   ])
// );
// console.log(
//   unzip([
//     ["a", 1, true],
//     ["b", 2],
//   ])
// );

//4

//4.Write a JavaScript program to find the most frequent item in an array.

// function mostFrequentFinder(arrayElements) {
//   let mostFrequent = 1,
//     mostValue = 0,
//     item;

//   for (let i = 0; i < arrayElements.length; i++) {
//     for (let j = i; j < arrayElements.length; j++) {
//       if (arrayElements[i] == arrayElements[j]) mostValue++;

//       if (mostFrequent < mostValue) {
//         mostFrequent = mostValue;
//         item = arrayElements[i];
//       }
//     }

//     mostValue = 0;
//   }

//   return {
//     item,
//     mostFrequent,
//   };
// }

// console.log(
//   mostFrequentFinder([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3])
// );

// 5.Unique Values program

// function findUniqueValues(numbers) {
//   let uniqueValues = [];

//   for (let i = 0; i < numbers.length; i++) {
//     let currentValue = numbers[i];

//     if (uniqueValues.indexOf(currentValue) === -1) {
//       uniqueValues.push(currentValue);
//     }
//   }

//   return uniqueValues;
// }

// console.log(findUniqueValues([1, 2, 2, 3, 4, 4, 5]));

//6 Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.

// function CylinderVolume(radius, height) {
//   class Cylinder {
//     constructor(radius, height) {
//       this.radius = radius;
//       this.height = height;
//     }

//     getVolume() {
//       const volume = 3.14 * this.radius ** 2 * this.height;
//       return volume.toFixed(4);
//     }
//   }

//   const myCylinder = new Cylinder(radius, height);
//   const volume = myCylinder.getVolume();

//   return volume;
// }
// console.log(CylinderVolume(8, 5.5));

// 7 finding the length of object
// function getObjectLength(obj) {
//   let length = 0;
//   for (const key in obj) {
//     //used for...in
//     if (obj.hasOwnProperty(key)) {
//       length++;
//     }
//   }
//   console.log(length);
// }
// getObjectLength({
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// });

//9 Create a Clock using JS
// function displayTime() {
//   let currentTime = new Date();
//   let hours = currentTime.getHours();
//   let minutes = currentTime.getMinutes();
//   let seconds = currentTime.getSeconds();
//   if (hours < 10) {
//     hours = `0 ${hours}`;
//   }
//   if (minutes < 10) {
//     minutes = `0 ${minutes}`;
//   }
//   if (seconds < 10) {
//     seconds = `0 ${seconds}`;
//   }
//   let timeString = `${hours}:${minutes}:${seconds}`;
//   console.log(timeString);
// }
// displayTime();

//10 print all the methods in JS objects

// function getMethods(obj) {
//   let methods = [];
//   for (let func in obj) {
//     if (typeof obj[func] == "function") {
//       methods.push(func);
//       console.log(func);
//     }
//   }
//   return methods;
// }
// getMethods({
//   rectangleArea: function () {},
//   circleArea: function () {},
//   length: 12,
//   width: 5,
//   radius: 15,
// });

//2 difference between two arrays

// function difference(arrOne, arrTwo) {
//   let differenceArr = [];

//   function containsElement(array, element) {
//     for (let i = 0; i < array.length; i++) {
//       if (Array.isArray(array[i])) {
//         if (containsElement(array[i], element)) {
//           return true;
//         }
//       } else if (array[i] === element) {
//         return true;
//       }
//     }
//     return false;
//   }

//   for (let i = 0; i < arrOne.length; i++) {
//     if (
//       !containsElement(arrTwo, arrOne[i]) &&
//       !differenceArr.includes(arrOne[i])
//     ) {
//       differenceArr.push(arrOne[i]);
//     }
//   }

//   for (let i = 0; i < arrTwo.length; i++) {
//     if (
//       !containsElement(arrOne, arrTwo[i]) &&
//       !differenceArr.includes(arrTwo[i])
//     ) {
//       differenceArr.push(arrTwo[i]);
//     }
//   }

//   return differenceArr;
// }
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));

//8 bubble sort algorithm

function bubbleSort(arr) {
  let arrayLength = arr.length;
  let doneSwapp;
  for (let i = 0; i < arrayLength; i++) {
    doneSwapp = false;
    for (let j = 0; j < arrayLength - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        doneSwapp = true;
      }
    }
    if (!doneSwapp) {
      break;
    }
  }
  console.log(arr);
}
let arr = [43, 90, 5, 300, 12, 19, 534, 70];
bubbleSort(arr);
