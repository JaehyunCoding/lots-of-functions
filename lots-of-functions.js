const prompt = require('prompt-sync')({sigint: true});

/*
// sayHi
// Write a function called sayHi that takes in a name string and adds "Hi, " before the name. Return the newly modified string.

function name: sayHi
parameters: 1 string (str)
return: string

*/

function sayHi(name){
    let result = "Hi, " + name
    return result
}
console.log(sayHi("Jaehyun"))
// let testname = prompt("Enter your name: ")
// console.log(sayHi(testname))

console.log()
/*
bigString
Write a function called bigString that takes in 2 strings and returns which one is bigger. If the strings are equal in size, return a string that indicates this to the user instead. // these strings are the same size

bigstring
parameters: 2 strings
return: the larger string (string) or "equal in size" (string)
- if statement to compare strings
*/

function bigstring(x,y){
    if(x.length > y.length){
        return x
    }   else if (y.length > x.length){
        return y
    }

    return "Equal in Size"
}
console.log()
console.log(bigstring("Bird","Doooooog"))
console.log(bigstring("bird","Doog"))
console.log(bigstring("Birrrrrrrd", "Dog"))
console.log()

/*
let arr = ["words", "talk", "speak"]
console.log(arr)
arr[1] = "talking" // reassigning the content in the array... 
console.log(arr)

let nums = [5,10,15]
console.log(nums)
nums[2] = nums[2]*2
console.log(nums) // reassigning the content multiplied by 2
*/

function bigNumber(x,y){
    if(x>y){
        return x
    }   else if (x<y){
        return y
    }
    return "These are equal"
}
console.log(bigNumber(4,5))
console.log(bigNumber(6,4))
console.log(bigNumber(4,4))
console.log()


function fiveMoreOdd(arr){
    for(let i=0; i<arr.length; i++){
    if (arr[i]%2 != 0){
        arr[i] = arr[i] + 5
    }
}   return arr  // return에는 =이 들어갈 수없는데 왜냐면 이미 reassign했으니까.
                // 이미 for 이내 if 이내 i들로 구성된 재료들이 arr로 집합했다.
                // 이전에 a,b,c 이런 식으로 나온건 arr[i]를 도출하는 거였고 이번 문제처럼 [a,b,c] 이런 식으로 나올려면 걍 arr을 쓰면 된다.
                // 이번 문제는 구성원을 업뎃만 하는 거지, 업뎃 된 odd만 뽑는건 아니니 다시 읽어보자.
}

let arr = [3,4,6,88,43,57,24]
console.log(fiveMoreOdd(arr))
console.log()
// arraySummer
// Write a function called arraySummer that takes in an array of numbers and adds each number in the array together. Return the total.

function arraySummer(arr){
    let sum = 0
    for (i = 0; i < arr.length; i++){
        sum += arr[i]
    }return sum
}
console.log(arraySummer([3,5,6,7,89]))
console.log()
/*내가 쓴 것과 상기의 것 비교해봐
function arraySummer(arr){
    for(let i=0; i<arr.length; i++){
    arr[i] = arr[i] + arr[i+1]
    }
    return arr
}

let sums = [3,5,6,7,89]
console.log(arraySummer(sums[sums.length-1]))
*/

// everyDivisible
// Write a function called everyDivisible that takes in a number n then prints every number less than or equal to 100 that is divisible that number n.

let n = Number(prompt("Enter a number: "))
function everyDivisible(x){
    z=0
    while (z <= 100) {
        z = z + x
        if(z <= 100){
        console.log(z)
        }
    }
}

everyDivisible(n)
