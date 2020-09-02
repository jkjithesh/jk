const jithesh = {
    firstName: "Jithesh",
    lastName: "Janardhanan",
    role: "Admin",
    courseCount: 3,
    getInfo: function () {
        console.log(`
            First name is ${this.firstName}
            Last name is ${this.lastName}
        `);
    },
};

const kalpana = {
    firstName: "Kalpana",
    lastName: "Padmanabhan",
    role: "Sub-Admin",
    courseCount: 4
};


// Put the above in the browser console and the see the _proto 
// against the getInfo function


jithesh.getInfo();


//NoteJK: bind gives reference back

// Option 1: jithesh.getInfo.bind(kalpana)();
// Or
// Option 2 as below
var kalpanaInfo = jithesh.getInfo.bind(kalpana);
kalpanaInfo();

//NoteJK: call will bind and call
jithesh.getInfo.call(kalpana);
