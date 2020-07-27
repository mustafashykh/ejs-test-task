$(document).ready(function () {
	let quantity = parseInt($("#quantity")[0].value);
	let limit = (parseInt($("#paginator").attr("limit")));
	let type = $("#obj3").attr("type");

	if(limit && quantity && limit > quantity+3){
		location.href = `${location.origin}/?type=${type}&quantity=${quantity}`
	}


	$("#forword").click(function () {
		if(limit < quantity){
			limit = limit + 3;
			location.href = `${location.origin}/${limit}/?type=${type}&quantity=${quantity}`
		}
	});

	$("#back").click(function () {
		let _limit = (parseInt($("#paginator").attr("limit")) - 3);
		if(_limit > 3){
			location.href = `${location.origin}/${_limit}?type=${type}&quantity=${quantity}`
		}else{
			location.href = `${location.origin}?type=${type}&quantity=${quantity}`
		}
	});

});
