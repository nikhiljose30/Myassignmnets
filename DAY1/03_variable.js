
//var
var company="testleaf"
console.log(company)
var company="VVDN"
console.log(company)

/**
 var allows deciration
 var allow reassignment
 * 
 */
let browsername="Chrome"
console.log(browsername);
browsername =12333
console.log(browsername)
/**  let  allows reassignment of variable
*let will not allow redecalrtion of variales*/
//const
const password ='crmsfa'
console.log(password)
//password='testing123'
//console.log(password)
/** const--redecalrtion and reassignment are not allowed */


var gender = 'female'; // global variable

function printGender() {
    var age = 28; // function scoped variable

    let cardColor; // declare outside if block

    if (gender.startsWith('female')) {
        cardColor = 'pink'; // assign inside block
        console.log('The card color is: ', cardColor);
    }

    console.log('The cardColor from outside the if block: ' + cardColor);
}

printGender();
console.log('The gender is: ' + gender);
