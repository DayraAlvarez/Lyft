$( document ).ready(function() {
    $('.setUp').hide();
    setTimeout(function(){
        $('.setUp').show();
        $('.intro').hide();
        console.log("hola");
    }, 3000);
    $('select').formSelect();
});

//click event listener = hide y show en jquery
