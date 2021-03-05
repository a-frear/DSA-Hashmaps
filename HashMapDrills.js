const Hashmap = require('./HashMap')
const Chainedmap = require('./chainedmap')

function main() {
    const lotr = new Hashmap();
     lotr.set('Hobbit', 'Bilbo')
     lotr.set('Hobbit', 'Frodo')
     lotr.set('Wizard', 'Gandalf')
     lotr.set('Elf', 'Legolas')
     lotr.set('Maiar', 'The Necromancer')
     lotr.set('Maiar', 'Sauron')
     lotr.set('RingBearer', 'Gollum')
     lotr.set('LadyOfLight', 'Galadriel')
     lotr.set('HalfEleven', 'Arwen')
     lotr.set('Ent', 'Treebeard')
     return lotr
}



console.log(main())

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new Hashmap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new Hashmap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

WhatDoesThisDo()

//Remove duplicates
const duplicates = (s) => {
    const str = s
    const duplicate = new Hashmap();
    for (let i = 0; i < str.length; i++) {
      duplicate.set(str[i], str[i]);
    }
    let newStr = "";
    duplicate._hashTable.forEach((letter) => {
      newStr += letter.value;
    });
    console.log(newStr);
  };

  duplicates("google all you can think of");

// 5. Any permutation a palindrome
/*
What are qualities of a palindrome string?
It has even number counts of characters or at most just one character with an 
odd count. This means the string is either of even length or an odd length 
with just exactly one character with an odd count.

Since we know some basic qualities of a palindrome string, 
we can count characters to determine if the string is a permutation of a palindrome.
Create an array from string and loop through the array, 
either adding the character to the hash table as a key or incrementing the count 
(value) if it already is in the table. Characters = key and count = value.
Iterate through the hash table to make sure character counts are all even 
or at most one value is odd.
*/

const isPalindrome = (str) => {
  //if the string is even: there must be two of every char
  //if odd: there must be only one unique char
 
  let map = new Hashmap()
  //use hash table to store letters
  let charCount = 0
  let newStr = str.split('')
  console.log(newStr)

  for (let i =0; i < newStr.length; i++) {
    let c = newStr[i]
    if (map.get(c) === undefined) {
      map.set(c, true)
      //add to hash table if key does not exist
    } else {
      map.delete(c)
      //if we see the same letter again, delete from hash table
    }
    charCount++;
  }
  if (charCount % 2 === 0) {
     //if the charCount is even, the hash map should be 0, which means the string is a palindrome permutation
    console.log('map length is 0')
    console.log(map.length)
    return map.length === 0;
  } else {
    //or there should only be 1 key left in order to be a palindrome permutation
    return map.length === 1;
    }
}

  console.log('acecarr is Palindrome? ' + isPalindrome('acecarr'))
  console.log('amy is Palindrome? ' + isPalindrome('amy'))
  console.log('kayka is Palindrome? ' + isPalindrome('kayka'))

  //6. Anagrams
  function anagram(array) {
    const anagramMap = new Map();
    //create a new hash table
    array.forEach((word) => {
      //for each word in the array, split the letters and sort them into a new array
      let sorted = word.split("").sort().join("");
      if (anagramMap.has(sorted)) {
        //if the hashmap has a key that matches the sorted array, push the word to the value
        anagramMap.get(sorted).push(word);
      } else {
        anagramMap.set(sorted, [word]);
        //if the hashamp doesn't have the key, set a new key of sorted with a value of the word
      }
    });
    return [...anagramMap.values()];
    //return the values
  }

  console.log(anagram(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));
