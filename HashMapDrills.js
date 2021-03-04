const Hashmap = require('./HashMap')
const Chainedmap = require('./chainedmap')

// function main() {
//     const lotr = new Hashmap();
//      lotr.set('Hobbit', 'Bilbo')
//      lotr.set('Hobbit', 'Frodo')
//      lotr.set('Wizard', 'Gandalf')
//      lotr.set('Elf', 'Legolas')
//      lotr.set('Maiar', 'The Necromancer')
//      lotr.set('Maiar', 'Sauron')
//      lotr.set('RingBearer', 'Gollum')
//      lotr.set('LadyOfLight', 'Galadriel')
//      lotr.set('HalfEleven', 'Arwen')
//      lotr.set('Ent', 'Treebeard')
//      return lotr
// }



// // console.log(main())

// const WhatDoesThisDo = function(){
//     let str1 = 'Hello World.';
//     let str2 = 'Hello World.';
//     let map1 = new Hashmap();
//     map1.set(str1,10);
//     map1.set(str2,20);
//     let map2 = new Hashmap();
//     let str3 = str1;
//     let str4 = str2;
//     map2.set(str3,20);
//     map2.set(str4,10);

//     console.log(map1.get(str1));
//     console.log(map2.get(str3));
// }

// WhatDoesThisDo()

// 4. Remove duplicates
// const duplicates = (s) => {
//     const str = s
//     const duplicate = new Hashmap();
//     for (let i = 0; i < str.length; i++) {
//       duplicate.set(str[i], str[i]);
//     }
//     let newStr = "";
//     duplicate._hashTable.forEach((letter) => {
//       newStr += letter.value;
//     });
//     console.log(newStr);
//   };

//   duplicates("google all you can think of");

// 5. Any permutation a palindrome
const isPalindrome = (str) => {
    let map = new Hashmap();
    for (let i = 0; i < str.length; i++) {
      map.set(str[i], i);
    }
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (map.get(str[i]) !== i) {
        console.log('letter doesnt equal other letter', i, str[i], ':', map.get(str[i]))
        count--;
      } else {
        console.log('letters match', i, str[i], ':', map.get(str[i]))
        count++;
      }
    }
    if (count > 1) {
      return false;
    }
    else {
      return true;
    }
  }

  console.log('acecarr is Palindrome? ' + isPalindrome('acecarr'))
  console.log('acecarr3 is Palindrome? ' + isPalindrome('acecarr3'))

  //this kind of works, but it has to rearrange all the letters in the words to make them the same. 
  //I haven't figured out how to keep the words the way they are
  //Example: answer is supposed to be [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]
  //I get: [ [ 'race', 'race' ], [ 'teas', 'teas', 'eats' ], [ 'arcs', 'arcs' ] ]
  function anagram(array) {
    let map = new Chainedmap(); // creates a hashmap
    const sortWords = (input) => input.split('').sort().join(''); 
    // sorts letters inside a single word | car -> acr

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