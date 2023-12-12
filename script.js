let count1 = 0;

let count2 = document.getElementById('count');
let entries = document.getElementById('entries');


function increment(){
  count1 = count1 + 1;
  count2.textContent = count1;
}

function decrement(){
  count1 = count1 - 1;
  count2.textContent = count1;
}
function save(){

 if (count1 >= 0){
  entries.textContent = entries.innerText  + " " + count1 + " -";
  count2.textContent = 0;
  count1 = 0;
  
  
}
 else {
  entries.textContent = entries.innerText  + " " + "(" + count1 + ")" + " -" ; 
  count2.textContent = 0;
  count1 = 0;

 }
    
  
}