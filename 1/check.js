"use strict";

var cur_index = 1;
var max_index = 2;
var page = 1;

// 다중체크 방지
function chk_line1(a) {
	const obj = document.getElementsByName('chkBox1');

	for (var i = 0; i < obj.length; i++) {
		obj[i].checked = false;

		if (obj[i] != a) obj[i].checked = false;
		else {
			obj[i].checked = true;
			setFalse(i);
		};
	};
};

function setFalse(val) {
	const obj = document.getElementsByName('chkBox1');

	for (var i = 0; i < obj.length; i++) {
		if (i != val) obj[i].checked = false;
	};
};

// 정답 체크시 
function _chk_click(aidx, idx) {

	playStop();
	console.log(cur_index);
	var a_correct = document.getElementById("a_correct");
	var a_incorrect = document.getElementById("a_incorrect");

	if (idx == 1) {
		a_correct.play();
		cur_index++;

		$('#chk1 ,#chk2, #chk3').attr("disabled", "true");
		
		goNextExam(); // 문제 정답시 캐릭터 활성
		// finalPassExam(); // 마지막 페이지 캐릭터 활성

	} else {
		a_incorrect.play();
	}
}

// popUp Area
$('.popBtn').click(function () {
	$('#popupArea').show();
});
$('.popCloseBtn').click(function () {
	$('#popupArea').hide();
});