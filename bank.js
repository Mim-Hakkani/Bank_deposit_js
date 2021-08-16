


document.getElementById('submit').addEventListener('click',function(){

       // catch the mail value 

       const mail = document.getElementById('user-mail');
       const mail_value = mail.value;
       

       //catch the password

       const pass = document.getElementById('user-pass');
       const pass_value = pass.value; 

       if(mail_value =='mim@gmail.com' && pass_value == 'hakkani')
       {
           window.location.href ="bank.html"
       }
       else
       {
           console.log('Wrong password and email');
       }

       mail.value = '';
       pass.value = '';

})


