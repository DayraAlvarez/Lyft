//alert ('hola');
//click event listener = hide y show en jquery

//1. When choosing flag, prefix shows
//2. Enable button until writing down number
//3. Modal with sign up code lab-xxx
//4. Enter code, enable button
//5. Sign up, enble button when check terms
//6. Modal, sign up succes






















$( document ).ready(function() {

    $('.modal').modal();
    $('.setUp').hide();
    setTimeout(function(){
        $('.setUp').show();
        $('.intro').hide();
        console.log("hola");
    }, 3000);
    $('select').formSelect();
});
