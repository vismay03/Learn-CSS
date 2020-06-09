
// DISPLAY

$('#display').click(function(){
    if($(this).is(":checked")){
        $('.boxes').attr('class','boxes display-flex')
    }
    else if( $(this).is(":not(:checked)")) {
        $('.boxes').attr('class','boxes')
    }
});

// FLEX-DIRECTION
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

// FLEX-WRAP
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

// JUSTIFY-CONTENT 

$('#justify-content-flex-start').click(function(){
    if($(this).is(":checked") && $('#display').is(":checked") ){
        $('.boxes').attr('class','boxes justify-content-flex-start')
    }
    else if( $(this).is(":not(:checked)")) {
        $('.boxes').attr('class','boxes')
    }
});

$('#justify-content-center').click(function(){
    if($(this).is(":checked") && $('#display').is(":checked") ){
        $('.boxes').attr('class','boxes justify-content-center')
    }
    else if( $(this).is(":not(:checked)")) {
        $('.boxes').attr('class','boxes')
    }
});

$('#justify-content-flex-end').click(function(){
    if($(this).is(":checked") && $('#display').is(":checked") ){
        $('.boxes').attr('class','boxes justify-content-flex-end')
    }
    else if( $(this).is(":not(:checked)")) {
        $('.boxes').attr('class','boxes')
    }
});

$('#justify-content-space-between').click(function(){
    if($(this).is(":checked") && $('#display').is(":checked") ){
        $('.boxes').attr('class','boxes justify-content-space-between')
    }
    else if( $(this).is(":not(:checked)")) {
        $('.boxes').attr('class','boxes')
    }
});

$('#justify-content-space-around').click(function(){
    if($(this).is(":checked") && $('#display').is(":checked") ){
        $('.boxes').attr('class','boxes justify-content-space-around')
    }
    else if( $(this).is(":not(:checked)")) {
        $('.boxes').attr('class','boxes')
    }
});

$('#justify-content-space-evenly').click(function(){
    if($(this).is(":checked") && $('#display').is(":checked") ){
        $('.boxes').attr('class','boxes justify-content-space-evenly')
    }
    else if( $(this).is(":not(:checked)")) {
        $('.boxes').attr('class','boxes')
    }
});

// ALIGN-ITEMS

$('#align-items-flex-start').click(function(){
    if($(this).is(":checked") && $('#display').is(":checked") ){
        $('.boxes').attr('class','boxes align-items-flex-start')
    }
    else if( $(this).is(":not(:checked)")) {
        $('.boxes').attr('class','boxes')
    }
});
$('#align-items-center').click(function(){
    if($(this).is(":checked") && $('#display').is(":checked") ){
        $('.boxes').attr('class','boxes align-items-center')
    }
    else if( $(this).is(":not(:checked)")) {
        $('.boxes').attr('class','boxes')
    }
});
$('#align-items-flex-end').click(function(){
    if($(this).is(":checked") && $('#display').is(":checked") ){
        $('.boxes').attr('class','boxes align-items-flex-end')
    }
    else if( $(this).is(":not(:checked)")) {
        $('.boxes').attr('class','boxes')
    }
});
$('#align-items-stretch').click(function(){
    if($(this).is(":checked") && $('#display').is(":checked") ){
        $('.boxes').attr('class','boxes align-items-stretch')
    }
    else if( $(this).is(":not(:checked)")) {
        $('.boxes').attr('class','boxes')
    }
});
$('#align-items-baseline').click(function(){
    if($(this).is(":checked") && $('#display').is(":checked") ){
        $('.boxes').attr('class','boxes align-items-baseline')
    }
    else if( $(this).is(":not(:checked)")) {
        $('.boxes').attr('class','boxes')
    }
});