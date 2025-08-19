 function userinput()
 {
    const input = document.getElementById("input");
    const increaseBtn = document.getElementById("increase-btn");
    const decreaseBtn = document.getElementById("decrease-btn");

 //increase button//

 increaseBtn.addEventListener('click',function()
 {
   let value = parseInt(input.value);
   if(isNaN(value)){
      value = 0;
   }
   input.value = value + 1;
 });
 //decrease button//

  decreaseBtn.addEventListener('click', function()
 {
   let value = parseInt(input.value);
   if(isNaN(value)){
      value = 0;
   }
   if(value > 0){
      input.value = value - 1;
   }
 } );
}
userinput();