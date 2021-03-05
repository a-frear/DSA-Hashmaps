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
Input: String
Output: Boolean
Constraints: Optimize
Edge cases: empty string, spaces, more than 2 of the same char, even and odd char
*/

const isPalindrome = (str) => {
  //if the string is even: there must be two of every char
  //if odd: there must be only one unique char

  //use hash table to store letters
  //if we see the same letter again, delete from mash table
  //check hash table at end... if it's odd, there should only be 1 key left
  //or no keys left if not odd

  let map = new Hashmap()
  let charCount = 0

  for (let i =0; i < str; i++) {
    console.log('string index: ' + str[i])
    let c = str[i]
    if (map.get(c) === undefined) {
      map.set('c', true)
    } else {
      map.delete(c)
    }
    charCount++;
  }
  if (charCount % 2 === 0) {
    console.log('map length is 0')
    console.log(map.length)
    return map.length === 0;
  }
  console.log('map length is 1')
  return map.length === 1
  }

  console.log('acecarr is Palindrome? ' + isPalindrome('acecarr'))
  console.log('amy is Palindrome? ' + isPalindrome('aam'))

  //this kind of works, but it has to rearrange all the letters in the words to make them the same. 
  //I haven't figured out how to keep the words the way they are
  //Example: answer is supposed to be [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]
  //I get: [ [ 'race', 'race' ], [ 'teas', 'teas', 'eats' ], [ 'arcs', 'arcs' ] ]
  function anagram(array) {
    let map = new Chainedmap(); // creates a chained hashmap
    const sortWords = (input) => input.split('').sort().join(''); 
    // sorts letters inside a single word car -> acr

    array.forEach((word) => { // iterates through the words
      const groupWords = sortWords(word);
      map.set(groupWords, word); 
      // sorted word becomes the key, with a value of [all the previous words + this new one]
    });

    const anagrams = [];

    map._hashTable.forEach(hash => {
      if (hash !== null) {
        if (typeof hash.value === "string") {
          anagrams.push(hash.value)
        }
        else {
          const newElement = []
          const head = hash.value.head;

          newElement.push(head.data.value)
          let currentNode = head;

          while (currentNode !== null) {
            newElement.push(currentNode.data.value)
            currentNode = currentNode.next;
          }
          anagrams.push(newElement)
        }
      }
    })
    return anagrams;
  }

  console.log(anagram(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));
  //preserve key and value