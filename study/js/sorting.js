function roleHierarchy(a, b){
    
    // My Constant List
    var roles = ["M7", "M6", "M5", "IC6", "M4", 
    "IC5", "M3", "IC4", "M2", "IC3", "IC2", "IC1"];

    // Compare and provide the sorting order
    return roles.indexOf(a) - roles.indexOf(b);
}

var newDeptRoles = [ "IC1", "M3", "M4", "IC1", "IC3", "IC4", "IC5", "M7", "IC6"];

newDeptRoles.sort(roleHierarchy);

console.log(newDeptRoles);

