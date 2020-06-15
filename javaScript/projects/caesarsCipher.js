document.getElementById('unitTitle').innerHTML = "javaScript Projects";
document.getElementById('pageTitle').innerHTML = "Caesars Cipher";

// Challenge
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


// My Solution
function rot13(str) {
    var stringArr = [];
    for (let i = 0; i < str.length; i++) {
        stringArr.push(str.charCodeAt(i));
    }
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i] > 64 && stringArr[i] < 78) {
            stringArr[i] = String.fromCharCode(stringArr[i] + 13);
        } else if (stringArr[i] > 77 && stringArr[i] < 91) {
            stringArr[i] = String.fromCharCode(stringArr[i] - 13);
        } else {
            stringArr[i] = String.fromCharCode(stringArr[i]);
        }        
    }
    str = stringArr.join("");
    return str;
}

// Their Solution
// function rot13(str) {
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     return str
//       .split('')
//       .map(char => {  
//         const pos = alphabet.indexOf(char);      
//         return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
//       })
//       .join('');
// }

console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP

console.log(rot13("SERR CVMMN!")); // FREE PIZZA

console.log(rot13("SERR YBIR?")); // FREE LOVE?

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.