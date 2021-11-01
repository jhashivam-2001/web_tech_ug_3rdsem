
let a = 4;
function link1 () {
    document.getElementById("demo1").innerHTML = "Let a=4 be a global variable";
}

function link2(){
    a = 3;
    document.getElementById("demo2").innerHTML = "The same global variable is now changed to 3 inside this function.";
    console.log(a);
}

function link3() {
    b = 5;
    document.getElementById("demo3").innerHTML = "A variable b=5 is used without declaring it so it's global by default.";
    console.log(b);
}

// program showing local scope of a variable
let c = 6;

function local() {
    let d = 7;
    document.getElementById("demo4").innerHTML = "This is an example of a Local Variable being accessed. Sum = 13";
    console.log(c+d);
}
