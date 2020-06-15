document.getElementById('unitTitle').innerHTML = "javaScript Projects";
document.getElementById('pageTitle').innerHTML = "Telephone Number Validator";

// Challenge
// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

//     555-555-5555
//     (555)555-5555
//     (555) 555-5555
//     555 555 5555
//     5555555555
//     1 555 555 5555

// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.


// My Solution
function telephoneCheck(str) {
    const accept = [40, 41, 45, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
    var withoutPunc = [],
        numsOnly = [],
        valid = false;
    for (let i = 0; i < str.length; i++) {
        // convert to array of ASCII codes
        withoutPunc.push(str.charCodeAt(i));
    }
    withoutPunc = withoutPunc.filter(dig => dig != 32); // remove all spaces
    numsOnly = withoutPunc.filter(dig => dig > 47); // new Array with only numbers
    if (withoutPunc.every((num) => accept.indexOf(num) != -1)) {
        valid = true;
    }
    if (withoutPunc.indexOf(40) > 1 || withoutPunc.indexOf(41) > 5) {
        valid = false;
    }
    if (withoutPunc.indexOf(40) != -1) {
        if (withoutPunc.indexOf(41) === -1) {
            valid = false;
        }
    }
    if (withoutPunc.indexOf(41) != -1) {
        if (withoutPunc.indexOf(40) === -1) {
            valid = false;
        }
    }
    if (withoutPunc.indexOf(40) != -1 && withoutPunc.indexOf(41) != -1) {
        if (withoutPunc.indexOf(41) - withoutPunc.indexOf(40) != 4) {
            valid = false;
        }
    }
    if (numsOnly.length > 11 || numsOnly.length < 10) {
        valid = false;
    }
    if (numsOnly.length === 11 && numsOnly[0] != 49) {
        valid = false;
    }
    return valid;
}


// Their Solution
// function telephoneCheck(str) {
//     var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
//     return re.test(str);
// }
// telephoneCheck("555-555-5555");


// Testing
console.log("1. " + telephoneCheck("555-555-5555")); // return a boolean

console.log("2. true)" + telephoneCheck("1 555-555-5555")); // return true

console.log("3. true)" + telephoneCheck("1 (555) 555-5555")); // return true

console.log("4. true)" + telephoneCheck("5555555555")); // return true

console.log("5. true)" + telephoneCheck("555-555-5555")); // return true

console.log("6. true)" + telephoneCheck("(555)555-5555")); // return true

console.log("7. true)" + telephoneCheck("1(555)555-5555")); // return true

console.log("8. false)" + telephoneCheck("555-5555")); // return false

console.log("9. false)" + telephoneCheck("5555555")); // return false

console.log("10. false)" + telephoneCheck("(1 555)555-5555")); // return false !!

console.log("11. true)" + telephoneCheck("1 555 555 5555")); // return true

console.log("12. true)" + telephoneCheck("1 456 789 4444")); // return true

console.log("13. false)" + telephoneCheck("123**&!!asdf#")); // return false

console.log("14. false)" + telephoneCheck("55555555")); // return false

console.log("15. false)" + telephoneCheck("(6054756961)")); // return false ??

console.log("16. false)" + telephoneCheck("2 (757) 622-7382")); // return false

console.log("17. false)" + telephoneCheck("0 (757 622-7382)")); // return false

console.log("18. false)" + telephoneCheck("-1 (757) 622-7382")); // return false

console.log("19. false)" + telephoneCheck("2 757 622-7382")); // return false

console.log("20. false)" + telephoneCheck("10 (757) 622-7382")); // return false

console.log("21. false)" + telephoneCheck("27576227382")); // return false

console.log("22. false)" + telephoneCheck("(275)76227382")); // return false

console.log("23. false)" + telephoneCheck("2(757)6227382")); // return false

console.log("24. false)" + telephoneCheck("555)-555-5555")); // return false

console.log("25. false)" + telephoneCheck("(555-555-5555")); // return false

console.log("26. false)" + telephoneCheck("(555)5(55?)-5555")); // return false