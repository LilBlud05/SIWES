/*1. A FUNCTION THAT TAKES AN ARRAY OF NUMBERS AND RETURNS THEIR TOTAL SUM USING A LOOP */
function sumArray(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++){
        total = total += numbers[i];
    }

    return total;
}

console.log("1. Total Sum:", sumArray([2,4,6,8]));

/*2. A FUNCTION THAT ACCEPTS AN ARRAY AND RETURNS HOW MANY EVEN NUMBERS ARE IN THE ARRAY */
function countEvenNumbers(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0) {
            count = count + 1
        }
    }
    return count;
}

console.log("2. Total Even Numbers:", countEvenNumbers([1,2,3,4,5,6,7,8]));

/* 3. A FUNCTION THAT ACCEPTS AN ARRAY AND RETURNS THE LARGEST NUMBER */
function findLargest(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        if (numbers[i] > largest) {
            largest = numbers[i]
        }
    }
    return largest;
}

console.log("3. Largest Number:", findLargest([12,4,50,8,20]))

/*4. A FUNCTION THAT RETURNS A NEW ARRAY WITH THE ELEMENTS REVERSED  */
function reverseArray(numbers) {
    let reverse = []
    for (let i = numbers.length - 1; i >= 0; i--) {
       reverse.push(numbers[i]);
        }
    
    return reverse;
}

console.log("4. Reverse Array:", reverseArray([1,2,3,4]))

/*5. A FUNCTION THAT COUNTS HOW MANY TIMES A GIVEN VALUE APPEARS IN AN ARRAY  */
function countOccurrence(arr, target){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            count = count + 1;
        }
    }
    return count;
}

console.log("5. Target:", countOccurrence([2,3,2,5,2,7], 2))

/*6. A FUNCTION THAT RETURNS ONLY THE POSITIVE NUMBERS FROM AN ARRAY  */
function getPositiveNumbers(arr){
    let positive = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            positive.push(arr[i])
        }
    }
    return positive;
}

console.log("6. Positive Numbers In The Array:", getPositiveNumbers([-2,5,-1,8,0,10]))

/*7. A FUNCTION THAT ACCEPTS AN ARRAY AND MULTIPLES EVERY ELEMENT BY 3  */
function multiplyByThree(arr){
    let multiply = []
    for (let i = 0; i < arr.length; i++){
        multiply.push(arr[i] * 3)
    }
    return multiply;
}

console.log("7. Array Multiplied By Three:", multiplyByThree([2,4,6]))

/*8. A FUNCTION THAT RETURNS TRUE IF A VALUE EXISTS IN THE ARRAY AND FALSE OTHERWISE */
function containsItem(arr, item){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === item){
            return console.log("8. Item Search:", true)
        }
       
    }
    return console.log("8. Item Search:", false);
}

containsItem(["Apple","Banana","Orange"], "Orange")

/*9. A FUNCTION THAT RETURNS A NEW ARRAY WITHOUT DUPLICATE VALUES  */
function removeDuplicates(arr){
    let duplicates = [];
    for (let i = 0; i < arr.length; i++){
        if (!duplicates.includes(arr[i])){
            duplicates.push(arr[i]);
        }
    }
    return duplicates;
}

console.log("9. Remove Duplicates:", removeDuplicates([1,2,2,3,4,4,5]))

/*10. A FUNCTION THAT ACCEPTS AN ARRAY OF SCORES AND RETURNS THE AVERAGE  */
function calculateAverage(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = (sum + arr[i]);
    }
    return sum / arr.length;
}

console.log("10. Average:", calculateAverage([80,90,100,70]))

/*11. A FUNCTION THAT RETURNS ONLY THE SCORES THAT ARE 50 OR ABOVE  */
function passedStudents(arr){
    let pass = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 50){
            pass.push(arr[i]);
        }
    }
    return pass;
}

console.log("11. Passed Students:", passedStudents([30,55,80,45,90]))

/*12. A FUNCTION THAT ACCEPTS OF STRINGS AND RETURNS THE LONGEST WORD  */
function findLongestWord(words){
    let longestWord = ""
    for (let i = 0; i < words.length; i++){
        if (words[i].length > longestWord.length){
            longestWord = words[i]
        }
    }
    return longestWord
}

console.log("12. Longest Word:", findLongestWord(["cat", "elephant", "dog", "javascript"]))

/*13. A FUNCTION THAT COUNTS THE TOTAL NUMBER OF VOWELS FOUND IN ALL THE WORDS IN AN ARRAY  */
function countVowels(words){
    let count = 0
    let vowels = "aeiouAEIOU"
    for (let i = 0; i < words.length; i++){
        for (let j = 0; j < words[i].length; j++){
            if (vowels.includes(words[i][j])){
                count = count + 1;
            }
        }
    }
    return count;
}

console.log("13. Total Number Of Vowels:", countVowels(["apple", "dog", "education"]))

/*14. A FUNCTION THAT RETURNS THE MISSING NUMBER  */
function findMissing(){

}

/*15. A FUNCTION THAT RETURNS AN OBJECT CONTAINING: TOTAL SCORE, AVERAGE SCORE, HIGHEST SCORE, LOWEST SCORE, NUMBER OF PASSED STUDENTS (>=50)  */
function analyzeScores(scores){
    let total = 0;
    let passed = 0;
    let highest = scores[0];
    let lowest = scores[0];

    for (let i = 0; i < scores.length; i++){
        total += scores[i]

        if (scores[i] > highest){
            highest = scores[i]
        }

        if (scores[i] < lowest){
            lowest = scores[i]
        }

        if (scores[i] >= 50){
            passed++
        }
    }
    return {
        total: total,
        average: total / scores.length,
        highest: highest,
        lowest: lowest,
        passed: passed
    };
}

console.log(analyzeScores([80,45,60,90,30]))

