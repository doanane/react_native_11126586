//Task 1: Creating the processArray function
function transformArray(arr) {
    let resultArray = [];
    for (let element of arr) {
        if (element % 2 === 0) {
            resultArray.push(element ** 2);
        } else {
            resultArray.push(element * 3);
        }
    }
    return resultArray;
}

// function styleArrayStrings(texts, nums) {
//     if (texts.length !== nums.length) {
//         throw new Error("Both arrays must have the same length.");
//     }

//     let styledStrings = [];
//     for (let i = 0; i < texts.length; i++) {
//         if (nums[i] % 2 === 0) {
//             styledStrings.push(texts[i].toUpperCase());
//         } else {
//             styledStrings.push(texts[i].toLowerCase());
//         }
//     }
//     return styledStrings;
// }

// let wordsArray = ["Hello", "CS students", "JavaScript", "is", "Awesome"];
// let numsArray = [1, 8, 2, 13, 5];
// let transformedNumbers = transformArray(numsArray);
// console.log(transformedNumbers);

// let styledStrings = styleArrayStrings(wordsArray, transformedNumbers);
// console.log(styledStrings);

// module.exports = {
//     styleArrayStrings,
//     transformArray
// };
