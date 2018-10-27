/**
 * createNameObject()
 *
 * Write a function called `createNameObject` that takes a full first
 * & last name string and returns an object with `firstName`
 * and `lastName` properties that have string values.
 *
**/


// ++ YOUR CODE HERE
// tenemos que convertir un string a un objeto con propiedades y valores

function createNameObject(strNames){
  // console.log(strNames);
  // console.log(typeof strNames);
  // para separar los elementos del string hacemos un split
        var newObj = {}

    var strSeparate = strNames.split(' ');
    console.log(strSeparate);

    newObj = {
      firstName: strSeparate[0],
      lastName: strSeparate[1]
    }
        console.log(newObj);
        return newObj
}

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-03');
  console.log('%cFunction: createNameObject', 'background-color: green; color: white')
console.groupEnd();

var nameObj1 = createNameObject("Benzo Lorenzo")
var nameObj2 = createNameObject("Felipe Tortuga")
var nameObj3 = createNameObject("Lupe Maria")

/* ----------------------- TEST-1  ----------------------- */
// Function returns an object
/* ------------------------------------------------------ */
console.log('TEST-1');

console.assert(typeof nameObj1 === "object")
console.assert(typeof nameObj2 === "object")


/* ----------------------- TEST-2  ----------------------- */
// Function accepts full name string separated by space
//   returns object with `firstName` and `lastName` properties
//
/* ------------------------------------------------------ */
console.log('TEST-2');

console.assert(nameObj1.firstName === 'Benzo')
console.assert(nameObj1.lastName === 'Lorenzo')

console.assert(nameObj2.firstName === 'Felipe')
console.assert(nameObj2.lastName === 'Tortuga')

console.assert(nameObj3.firstName === 'Lupe')
console.assert(nameObj3.lastName === 'Maria')




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
