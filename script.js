$('#display').click(function(){
    if($(this).is(":checked")){
        $('.boxes').attr('class','boxes display-flex')
    }
    else if( $(this).is(":not(:checked)")) {
        $('.boxes').attr('class','boxes')
    }
});

$('#flex-direction-row').click(function(){
    if($(this).is(":checked") && $('#display').is(":checked") ){
        $('.boxes').attr('class','boxes flex-direction-row')
    }
    else if( $(this).is(":not(:checked)")) {
        $('.boxes').attr('class','boxes')
    }
});

$('#flex-direction-row-reverse').click(function(){
    if($(this).is(":checked") && $('#display').is(":checked") ){
        $('.boxes').attr('class','boxes flex-direction-row-reverse')
    }
    else if( $(this).is(":not(:checked)")) {
        $('.boxes').attr('class','boxes')
    }
});

$('#flex-direction-column').click(function(){
    if($(this).is(":checked") && $('#display').is(":checked") ){
        $('.boxes').attr('class','boxes flex-direction-column')
    }
    else if( $(this).is(":not(:checked)")) {
        $('.boxes').attr('class','boxes')
    }
});

$('#flex-direction-column-reverse').click(function(){
    if($(this).is(":checked") && $('#display').is(":checked") ){
        $('.boxes').attr('class','boxes flex-direction-column-reverse')
    }
    else if( $(this).is(":not(:checked)")) {
        $('.boxes').attr('class','boxes')
    }
});

$('#flex-wrap-wrap').click(function(){
    if($(this).is(":checked") && $('#display').is(":checked") ){
        $('.boxes').attr('class','boxes flex-wrap-wrap')
    }
    else if( $(this).is(":not(:checked)")) {
        $('.boxes').attr('class','boxes')
    }
});


$('#flex-wrap-reverse').click(function(){
    if($(this).is(":checked") && $('#display').is(":checked") ){
        $('.boxes').attr('class','boxes flex-wrap-reverse')
    }
    else if( $(this).is(":not(:checked)")) {
        $('.boxes').attr('class','boxes')
    }
});

$('#flex-wrap-nowrap').click(function(){
    if($(this).is(":checked") && $('#display').is(":checked") ){
        $('.boxes').attr('class','boxes flex-wrap-nowrap')
    }
    else if( $(this).is(":not(:checked)")) {
        $('.boxes').attr('class','boxes')
    }
});





