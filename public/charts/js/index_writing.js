"use strict";
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'transform': 'scale('+scale+')'});
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 500, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeOutQuint'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 500, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeOutQuint'
	});
});

$(".submit").click(function(){
	return false;
})

 $(document).ready(function() {
    $('select').material_select();
  });

 var counter = 0;
var orderCounter = 1;
function newKeyword() {
   
  $( ".keywords" ).append( '<div class=\"row rowKey animated zoomIn2\">\r\n        <div class=\"input-field col s6\" style=\"\r\n    width: 42%;\r\n\">\r\n          \r\n          <input id=\"icon_prefix1' + counter + '\" type=\"text\" class=\"validate\">\r\n          <label for=\"icon_prefix1' + counter + '\" class=\"\">Keyword<\/label>\r\n        <\/div>\r\n   <div class=\"row\">\r\n    <!--<div style=\"    top: 0.8rem;\" class=\"col s2\"> Density :<\/div> -->\r\n     <div class=\"input-field col s2\" style=\"    top: 0.7rem;\"> Density<\/div>\r\n        <div class=\"input-field col s2\">\r\n          <input id=\"icon_telephone1' + counter + '\" type=\"number\" class=\"validate\">\r\n          <label for=\"icon_telephone1' + counter + '\" class=\"\">Min<\/label>\r\n        <\/div>\r\n        <div class=\"input-field col s2\">\r\n          <input id=\"max1' + counter + '\" type=\"number\" class=\"validate\">\r\n          <label for=\"max1' + counter + '\" class=\"\">Max<\/label>\r\n        <\/div>\r\n    <i class=\"material-icons prefix remove active\" style=\"\r\n    margin-top: 1.7rem; cursor: pointer;color: #607D8B;\r\n\">close<\/i><\/div>\r\n       <\/div>' );
  counter++;
};

$(".promo-example").hover(
  function () {
    $(this).addClass("hovered");
  },
  function () {
    $(this).removeClass("hovered");
  }
);
     


$(".promo-example").click(
  function () {
    $(".promo-example").removeClass("selected")
    $(this).addClass("selected");
  }
);  

$(".promo-example2").hover(
  function () {
    $(this).addClass("hovered");
  },
  function () {
    $(this).removeClass("hovered");
  }
);
     


$(".promo-example2").click(
  function () {
    $(".promo-example").removeClass("selected")
    $(this).addClass("selected");
  }
);  

$(".keywords").delegate(".remove", "click", function () {  
    $(this).closest('.rowKey').remove();
  }
);  


function newOrder() {
  var orderNumber = $( ".creation .card" ).length;
  //var orderNumber = $(".card").index(this);
  $( ".creation" ).append('<div class=\"card animated zoomIn\" style=\"background-color:#E3DA39\">\r\n\t\t<h2 class=\"fs-title\" style=\"   text-align: center;\r\n    width: 100%;\">Education ('+ orderNumber +')'+'<\/h2>\r\n<div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n          <input  id=\"school'+ orderNumber +'\" type=\"text\" class=\"validate\">\r\n          <label for=\"school'+ orderNumber +'\" style="color:#FFFFFF">School<\/label> \r\n        <\/div> \r\n  \r\n      <\/div>\r\n    <div class=\"row\" style=\"\">\r\n      <div class=\"col s6\" style=\"display:inline-block;\">\r\n          <input  id=\"start_date'+ orderNumber +'\" type=\"date\" class=\"datepicker\" placeholder=\"Start Date\" style=\"color:#000000\">\r\n      <\/div> <div class=\"col s6\">\r\n          <input  id=\"end_date'+ orderNumber +'\" type=\"date\" class=\"datepicker\" placeholder=\"End Date\"> \r\n        <\/div>\r\n     \r\n      <\/div> \r\n      \r\n   \r\n     \r\n        \r\n     \r\n\r\n    \r\n\r\n 	<div class=\"row input-field col s12\"> \r\n <textarea class=\"materialize-textarea\" id=\"description'+ orderNumber +'\"><\/textarea> <label for=\"description'+ orderNumber +'\" style=\"color:#FFFFFF;\">Description<\/label> <\/div> <div class=\"row col s12\" style=\"color:grey;font-size: 10px;text-align: left;margin-top: -10px;margin-left: 0px\">This can include stuff like: <ul> \r\n <li>Courses done<\/li> <li>Leadership Postions<\/li> <li>Projects<\/li> <li>GPA e.g. Top 15% percentile etc.<\/li> \r\n <\/ul><\/div>\r\n         <div><a class=\"waves-effect waves-light btn\" onClick=\"newOrder()\" style=\"background-color:#E5F22C\"><i class=\"material-icons left\">add<\/i>Add Education<\/a><\/div> \r\n      <\/div>\r\n    <\/div> \r\n <script> \r \n $( document ).ready(function() { $(\'.datepicker\').pickadate({format: \'mm/dd/yyyy\', selectMonths: true, \n  selectYears: 100, \n   today: \'Today\', min:new Date(1970, 0,1),max:new Date(new Date().getFullYear()+5,11,31), \n clear: \'Clear\', \n close: \'Ok\', \n closeOnSelect: true, \n onSet: function( arg ){ if ( \'select\' in arg ){ this.close();} }});}); \n <\/script>');
  orderCounter++;
  counter++;
};

function newCertification() {
  var certNumber = $( ".creation1 .card" ).length;
  //var orderNumber = $(".card").index(this);
  $( ".creation1" ).append('<div class=\"card\" style=\"background-color:#E3DA39\"> <h2 class=\"fs-title\">Certificate ('+ certNumber +')'+'<\/h2>\r\n<div class=\"row\"> \r\n<div class=\"input-field col s12\"> <input id=\"certification'+ certNumber +'\" type=\"text\" class=\"validate\"> \r\n <label for=\"certification'+ certNumber +'\" style=\"font-family:\'Open Sans\'; color:#ffffff;\">Certification<\/label><\/div>	<\/div>\r\n<div class=\"row\">\r\n	<div class=\"input-field col s12\">\r\n	<input id=\"authority'+ certNumber +'\" type=\"text\" class=\"validate\">\r\n     <label for=\"authority'+ certNumber +'\" style=\"font-family:\'Open Sans\'; color:#ffffff;\">Certification Authority<\/label>\r\n	<\/div>\r\n	<\/div>\r\n	<div class=\"row\">\r\n	<div class=\"input-field col s12\">\r\n	<input id=\"license'+ certNumber +'\" type=\"text\" class=\"validate\">\r\n     <label for=\"license'+ certNumber +'\" style="font-family:\'Open Sans\'; color:#ffffff;">License Number</label>\r\n	<\/div>\r\n	<\/div>\r\n	 <div><a class=\"waves-effect waves-light btn\" style=\"background-color:#E5F22C\" onclick=\"newCertification()\"><i class=\"material-icons left\">add<\/i>Add Certification<\/a><\/div>\r\n	<\/div>');
  certNumber++;
  counter++;
};

$("fieldset").delegate(".removeOrder", "click", function () {  
    $(this).closest('.card').remove();
  }
);