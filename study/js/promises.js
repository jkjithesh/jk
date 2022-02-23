const uno = () => {
    return "I am one";
};

const dos = () => {
    setTimeout(() => {
        return "I am two";
    }, 3000)     
};

const tres = () => {
    return "I am three";
};

const callMe = () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
}
callMe();

console.log("**********************");
////////////////////////

const dosNew = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am two");
        }, 3000);
    })
};


const callMeNew = async () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dosNew();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
}

callMeNew();

