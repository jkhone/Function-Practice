// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------

var jsinstruct = instructors.filter(teach => {return teach.teaches == "JavaScript"})

jsinstruct.sort(function(a, b) {
    var nameA = a.firstname.toUpperCase();
    var nameB = b.firstname.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

 
  return 0;
});

console.log(jsinstruct)


// ---------------------------
// 1. Find largest number
// ---------------------------

console.log(Math.max(...numbers))

// ---------------------------
// 2. Find longest string
// ---------------------------
var longest = strings.reduce(function (a,b) {return a.length > b.length ? a : b})
console.log(longest)

// ---------------------------
// 3. Find even numbers
// ---------------------------
function even(numarr) {
    var onlyeven = [];
    for (i = 0; i < numarr.length; i++) {
        if (numarr[i] % 2 === 0) {
            onlyeven.push(numarr[i])
        }
    } 
    return onlyeven
}

console.log(even(numbers))


// ---------------------------
// 4. Find odd numbers
// ---------------------------
function odd(numarr) {
    var onlyodd = [];
    for (i = 0; i < numarr.length; i++) {
        if (numarr[i] % 2 === 1) {
            onlyodd.push(numarr[i])
        }
    } 
    return onlyodd
}

console.log(odd(numbers))

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

function is(strarr) {
    var checked = []
    for (i = 0; i < strarr.length; i++) {
        if (strarr[i].includes("is")) {
            checked.push(strarr[i])
        }
    }
    return checked
}

console.log(is(strings))

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

console.log(numbers.concat(strings))

// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------

