
function init(){
    var myName = "Jithesh";

    function sayFirstName(){
        console.log(myName);
    }

    return sayFirstName;
}

init()();

function addNumber(x){
    return function addIt(y){
        return x + y;
    }

}

//NoteJK -> Calling below way is curring. Not specific to javascript language; addNumber(4)(6)

console.log(addNumber(4)(6));
console.log(addNumber(14)(16));
console.log(addNumber()());

console.log(addNumber(14)(16));
