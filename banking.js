document.getElementById('inpo-submit').addEventListener('click',function(){

   // 1.input value e dhorbooo..

     const c_input = document.getElementById('depo-input');
      const c_input_value = c_input.value;

  //2. input string value to int convert
      const c_i_to_string = parseFloat(c_input_value);

    

   // 3. catch the deposit html id 

       const c_depo = document.getElementById('deposit');
    

    
   //4.add inner text value in c_depo  + enter input value;
   
      const depost_add = c_depo.innerText;


      //conversion amount
      const previous_depo_amount = parseFloat(depost_add);



        const prev =  previous_depo_amount + c_i_to_string ;

          c_depo.innerText = prev;

  


     //balance amount added

     const bal = document.getElementById('b-id');
       
           

     const total_balance = parseFloat(bal.innerText)+c_i_to_string;

      bal.innerText = total_balance;


      document.getElementById('depo-input').value='';


});

// handling for withdrow 


document.getElementById('withdraw-submit').addEventListener('click',function(){

    const wcatch = document.getElementById('withdraw-input');
    const withdraw_text = wcatch.value;
    const withdraw_amout = parseFloat(withdraw_text);
    console.log(withdraw_amout);

    //for banking html main withdraw
    const mwdow = document.getElementById('withdraw');
    const mmain_draw = mwdow.innerText;
    const mmdraw_amount = parseFloat(mmain_draw);

    const withdraw = withdraw_amout + mmdraw_amount;

    mwdow.innerText = withdraw ;



 //substract amount from balance 

   const balance = document.getElementById('b-id');
   const balance_text = parseFloat(balance.innerText);

   const total_amount = balance_text - withdraw_amout;

   balance.innerText =total_amount;




    wcatch.value ='';




});