$(document).ready(function () {
	$("#forword").click(function () {
		let type = $("#obj3").attr("type");
		let limit = (parseInt($("#paginator").attr("limit")) + 3);
		location.href = `${location.origin}/${limit}/?type=${type}`
	});

	$("#back").click(function () {
		let limit = (parseInt($("#paginator").attr("limit")) - 3);
		let type = $("#obj3").attr("type");
		if(limit > 3){
			location.href = `${location.origin}/${limit}?type=${type}`
		}else{
			location.href = `${location.origin}?type=${type}`
		}
	});

});
