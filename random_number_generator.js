const myButton = document.getElementById("generate"); 
let min; 
let max; 
let random_num; 

myButton.onclick = function(){
    min = document.getElementById("inpmin").value; 
    max = document.getElementById("inpmax").value;
    min = Number(min) - 1; 
    max = Number(max); 
    random_num = (Math.floor(Math.random() * (max - min))) + min + 1;
    document.getElementById("random_number").textContent = random_num;
}