$( document ).ready(function() {

    $('.modal').modal();
    $('.setUp').hide();
    setTimeout(function(){
        $('.setUp').show();
        $('.intro').hide();
    }, 3000);
    $('select').formSelect();
    //Disable, enable buttons
    $('#searchInput').keyup(function(){
        if($(this).val() == ''){
          $('.enableOnInput').prop('disabled',true);
      }else{
          $('.enableOnInput').prop('disabled',false);
      }
    });
});
    //Disable, enable checkbox
    $('#checkThis').click(function(){
        if (this.checked) {
         $("#checkBoxButton").removeAttr("disabled");
         console.log("hola");
        } else {
          $("#checkBoxButton").attr("disabled", true);
    }})

//checkBoxButton
//checkThis

//<input type="text"  id="searchInput"/>
//<a href="login.html"><input type="submit" value="Return to Log In"  id="submitBtn" class="enableOnInput" disabled=disabled/></a>
