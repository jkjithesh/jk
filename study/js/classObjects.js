
const User = require("./User.js");
const SubAdmin = require("./User.js");

const jithesh = new User("Jithesh", 42, "jkjithesh@gmail.com")

console.log(jithesh);

console.log(jithesh.getInfo());

console.log(jithesh.getInfo().email);

jithesh.enrollCourse("React Boot Camp");
jithesh.enrollCourse("Java 11");

console.log(jithesh.getCourseList());

let courses = jithesh.getCourseList();

courses.forEach((c) => console.log(c));
console.log(User.whoAmI());

const tom = new SubAdmin("rom", 99, "tom@tm.com");

console.log(tom.getInfo());
console.log(tom.getAdminInfo());
console.log(tom.login());

//console.log(tom.whoAmI());
