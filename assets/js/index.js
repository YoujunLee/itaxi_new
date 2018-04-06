/*main page에서 사용되는 js*/

/*header file load*/
// $(document).ready(function(){
//   $("#header_area").load("./header.html"); 
// });

/*main page filter dropdown 구현 (open & close)*/
$(".dropdown dt a"+"#classify").on('click', function() {
$(".dropdown dd ul"+"#classify").slideToggle('fast');
$(this).parents().siblings('dd').addClass('open_classify');
});

$(".dropdown dt a"+"#departure").on('click', function() {
$(".dropdown dd ul"+"#departure").slideToggle('fast');
$(this).parents().siblings('dd').addClass('open_departure');
});

$(".dropdown dt a"+"#arrival").on('click', function() {
$(".dropdown dd ul"+"#arrival").slideToggle('fast');
$(this).parents().siblings('dd').addClass('open_arrival');
});

//해당 dropdown 영역 外 영역 click시 dropdown close
$(document).bind('click', function(e) {
var $clicked = $(e.target);
if ($clicked.parents().hasClass("dropdown")){
  
  if($clicked.parents().siblings('dd').hasClass('open_classify')){
    $(".dropdown dd ul"+"#arrival").hide();
    $(".dropdown dd ul"+"#departure").hide();
  }else if($clicked.parents().siblings('dd').hasClass('open_departure')){
    $(".dropdown dd ul"+"#arrival").hide();
    $(".dropdown dd ul"+"#classify").hide();
  }else if($clicked.parents().siblings('dd').hasClass('open_arrival')){  
    $(".dropdown dd ul"+"#departure").hide();
    $(".dropdown dd ul"+"#classify").hide();
 }
}else{
  $(".dropdown dd ul"+"#departure").hide();
    $(".dropdown dd ul"+"#classify").hide();
    $(".dropdown dd ul"+"#arrival").hide();
 }
});

$(".dropdown dd ul li a").on('click', function() {
$(".dropdown dd ul").hide();
});

function getSelectedValue(id) {
return $("#" + id).find("dt a span.value").html();
}

$('.mutliSelect input[type="radio"]').on('click', function(e) {

var title = $(this).closest('.mutliSelect').find('input[type="radio"]').val(),
title = $(this).val();
var $clicked = $(e.target);
var $parent_target=$clicked.parents('.dropdown').children('dt').children('a').children('.multiSel');
var $parent_hide=$clicked.parents('.dropdown').children('dt').children('a').children('.hida');


if ($(this).is(':checked')) {
  var html = '<span title="' + title + '">' + title + '</span>';
  $($parent_target.children('span')).remove();
  $($parent_target).append(html);
  $($parent_hide).hide();
} else {
  $('span[title="' + title + '"]').remove();
  var ret = $(".hida");
  $('.dropdown dt a').append(ret);
}
});

/*card 영역에 참가중인 방만 나타나는 것*/
$('#change_post').on('click', function() {
  console.log("change");
  $(this).parent().siblings().children('#all_room').replaceWith("<div id='participate_room'></div>")
 $('#change_post').hide();
 $('#return_post').show();
});

/*참가 중인 방만 나타나는 것에서 다시 전체 방 나타나기*/
$('#return_post').on('click', function() {
  console.log("return");
  $(this).parent().siblings().children('#participate_room').replaceWith("<div id='all_room'></div>")
  $('#return_post').hide();
  $('#change_post').show();
});

/*방 등록 창에서 select를 input창으로 바꾸기*/
$('#departure_select').on('change', function() {
var value = $(this).val();

if(value=="직접입력")
  $(this).parent('.departure_select').replaceWith("<input type='text' name='departure' class='departure_input' placeholder='출발지를 입력해주세요.'>")
});

$('#arrival_select').on('change', function() {
var value = $(this).val();
if(value=="직접입력")
  $(this).parent('.arrival_select').replaceWith("<input type='text' name='arrival' class='arrival_input' placeholder='출발지를 입력해주세요.'>")
});

/*-----------------------------------------------------*/
filterSelection("all")
function filterSelection(c) {
var x, i;
x = document.getElementsByClassName("filterDiv");
if (c == "all") c = "";
// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
for (i = 0; i < x.length; i++) {
  w3RemoveClass(x[i], "show");
  if (x[i].className.indexOf(c) > -1) 
    w3AddClass(x[i], "show");
}
}

// Show filtered elements
function w3AddClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  if (arr1.indexOf(arr2[i]) == -1) {
    element.className += " " + arr2[i];
  }
}
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  while (arr1.indexOf(arr2[i]) > -1) {
    arr1.splice(arr1.indexOf(arr2[i]), 1); 
  }
}
element.className = arr1.join(" ");
}

/*방 등록 창, datepicker*/
$(document).ready(function() {
    $('select').material_select();
  });

  $('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15, // Creates a dropdown of 15 years to control year,
  today: 'Today',
  clear: 'Clear',
  close: 'Ok',
  closeOnSelect: false // Close upon selecting a date,
});

/*방 등록 창, timepicker*/
$('.timepicker').pickatime({
  default: 'now', // Set default time: 'now', '1:30AM', '16:30'
  fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
  twelvehour: false, // Use AM/PM or 24-hour format
  donetext: 'OK', // text for done-button
  cleartext: 'Clear', // text for clear-button
  canceltext: 'Cancel', // Text for cancel-button
  autoclose: false, // automatic close timepicker
  ampmclickable: true, // make AM PM clickable
  aftershow: function(){} //Function for after opening timepicker
});

/*modal(방등록, 방참여 confirm) 실행*/
$(document).ready(function(){
  $('.modal').modal();
});
//modal1 = 방 등록
$('#modal1').modal('open');
$('#modal1').modal('close');
//modal2 = 방 참여 confirm
$('#modal2').modal('open');
$('#modal2').modal('close');



