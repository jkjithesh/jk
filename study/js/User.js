class User{
    constructor(name, age, email){
        this.name = name;
        this.email = email;
        this.age = age;
    }
    
    courseList = [];

    getInfo(){
        return {name: this.name, email: this.email}
    }

    enrollCourse(name){
        this.courseList.push(name);
    }

    getCourseList(){
        return this.courseList;
    }

    login(){
        return  " You have logged in ";
    }

    static whoAmI(){
        return "I am User who cannot be inherited"
    }

}

class SubAdmin extends User{

    constructor(name, age, email){
        super(name, age, email);
    }

    
    getAdminInfo(){
        return {name: this.name, email: this.email, admin: "yes"}
    }

    login(){
        return  super.login() + ", Sub Admin have logged in ";
    }

}



// It should be exports
module.exports = User;
module.exports = SubAdmin;

