$(document).ready(function () {
	$("#option").click(function () {
		if (parseInt($("#mySidenav").css("width")) != 0){
			$("#mySidenav").css("width", "0")
		}else{
			$("#dropdown").focus();
			$("#mySidenav").css("width", "15%")
		}
	});

	$('*').mousedown(function(el) {
		if(!["mySidenav","dropdown"].includes(el.target.id) ){
			$("#mySidenav").css("width", "0")
		}
	})

	let type = $("#obj3").attr("type");
	let quantity = $("#quantity")[0].value;
	$('#quantity').bind("keyup mouseup", function (e) {
		if(e.target.value && e.target.value !== quantity && e.originalEvent.key === "Enter"){
			location.search = `?type=${type}&quantity=${e.target.value}`
		}
	});

	$("#dropdown").val(type)
	$("span#type").text(type)

	$("#dropdown").change(function (e) { 
		location.search = `?type=${e.target.selectedOptions[0].value}&quantity=${quantity}`
		$("#obj3").attr("type", e.target.selectedOptions[0].value)
		$("span#type").text(e.target.selectedOptions[0].value)
	});
});
