function insert(num){
    document.form1.textview.value = document.form1.textview.value + num;
}

function backspace(){
    var exp = document.form1.textview.value;
    document.form1.textview.value = exp.substring(0, exp.length - 1);
}

function equal(){
    var exp = document.form1.textview.value;
    if(exp){
        document.form1.textview.value = eval(exp);
    }
}


let a = myfunction(4, 5);
function myfunction(c, b){
    return c * b;
}
console.log(a);



const x = new Date().getHours();
let text;
if (x < 10){
   text = "good morning";
}
else if(x < 20){
    text = "good day";
}
else{
    text = "good evening";
}
console.log(text);


const time = new Date().getHours();
let txt;
if(time < 10){
    txt = "good morning";
}
else if(time < 20){
    txt = "good day";
}
else{
    txt = "good night";
}
document.getElementById("demo").innerHTML = txt;