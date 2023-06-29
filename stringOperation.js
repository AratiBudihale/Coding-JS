
//All string methods return a new string. They don't modify the original string.
// Formally said:
// Strings are immutable: Strings cannot be changed, only replaced.


let str="Hello Arati"

//1.convert string in 1 array

console.log([str])
console.log(str.split())
console.log(str.split(''))
console.log(...[str])
console.log(str.split(' '))
console.log(str.split("A"))


//2. Convert string to array with reach character

console.log(str.slice(4,10))
console.log(str.substring(4,10))
console.log(str.substr(4,3)) //The difference bet substr that the second parameter specifies the length of the extracted part.

//3.Replace any character

console.log(str.replace('L','B'))//case sensitive
console.log(str.replace('l','B'))
console.log(str.replace(/l/i,'B'))//replace case insensitivy with /i
console.log(str.replace(/l/g,'B'))//replace all character using /g


//4.Remove first and last charecter

console.log(str.substring(1,str.length))
console.log(str.substring(0,str.length-1))

//5.Remove string before specific character
let fir=str.split('A')
console.log(fir[0])

//6. Reverse string

console.log(str.split('').reverse().join(''))

//7. Remove extra space
console.log(str.trim())

//8.concate

let str1="My name is Piya"
console.log(str.concat('',str1))
console.log(str+str1)
