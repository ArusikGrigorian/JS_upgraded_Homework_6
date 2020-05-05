EX_1

function isUnique(arr){
  arr.sort((item1, item2) => {return item1 - item2;})
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] == arr[i+1]){
      return "Array's numbers are not unique";
    }
  }
  return "Array's numbers are unique";
}
isUnique([1,2,4,5,11,6,7,8,9,10,11,12,13]);


EX_2

function quadrSum(arr){
  return arr.filter(item => item % 2 == 0)
            .reduce((total, current) => {return total + Math.pow(current, 2);},0);
}
quadrSum([1,2,3,4,5,6,7,8,9,10,11,12]);


EX_3

function isPalindrome(str){
  let baseStr = str.split(" ").join("").toLowerCase();
  let length = baseStr.length;
  for(let i = 0, j = length - 1; i < length - 1, j > 0; i++, j--){
    if(baseStr[i] != baseStr[j]){
      return "The given string is not a palindrome";
    }
  }
  return "The given string is a palindrome";
}
isPalindrome("In girum imus nocte et consumimur igni");


EX_4

function sorting(str){
  return str.toLowerCase().split("").sort().join("");
} 

function getAnagrams(arr, word){
  let result = [];
  arr.forEach(item => sorting(item) == sorting(word)? result.push(item) : null);
    if(result.length == 0){
      return "There is no matching";
    }
  return result;
}  
getAnagrams(["licnep", "circular", "pupil", "nilcpe", "leppnec"], "pencil");