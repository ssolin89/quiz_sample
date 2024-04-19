//각 행마다 중복 클릭 방지
function chk_line2(a) {
	const obj = document.getElementsByName('chkBox2');
	for (var i = 0; i < obj.length; i++) {
		if (obj[i] != a) obj[i].checked = false;
	}
}

function chk_line3(a) {
	const obj = document.getElementsByName('chkBox3');
	for (var i = 0; i < obj.length; i++) {
		if (obj[i] != a) obj[i].checked = false;
	}
}

function chk_line4(a) {
	const obj = document.getElementsByName('chkBox4');
	for (var i = 0; i < obj.length; i++) {
		if (obj[i] != a) obj[i].checked = false;
	}
}

//세번 째 행까지 정답을 맞췄을 경우 문제 완료 (id 값을 정답에 맞게 수정)
function allChk() {
	if ($('#ox_chk1').hasClass('ok') && $('#ox_chk4').hasClass('ok') && $('#ox_chk5').hasClass('ok')) {

		goNextExam(); // 문제 정답시 캐릭터 활성
		// finalPassExam(); // 마지막 페이지 캐릭터 활성
	}
}

// popUp Area
$('.popBtn').click(function () {
	$('#popupArea').show();
});
$('.popCloseBtn').click(function () {
	$('#popupArea').hide();
});

window.addEventListener('DOMContentLoaded', function () {
	const allCheckbox = document.querySelector('.ox_checkArea');
	allCheckbox.addEventListener('click', function (e) {

		//첫 번째 행의 id값을 정답에 맞게 수정
		if (e.target.id === 'ox_chk2') {
			playStop();
			playAudio('a_correct');
			$('#ox_chk1, #ox_chk2').attr('disabled', 'true'); //첫 번째 행 재클릭 방지
			$('#ox_chk1').addClass('ok'); //정답 여부 클래스 추가
			allChk();
		} else if (e.target.id === 'ox_chk1') { //오답인 id로 값 변경
			playStop();
			playAudio('a_incorrect');
		}

		//두 번째 행의 id값을 정답에 맞게 수정
		if (e.target.id === 'ox_chk3') {
			playStop();
			playAudio('a_correct');
			$('#ox_chk4, #ox_chk3').attr('disabled', 'true'); //두 번째 행 재클릭 방지
			$('#ox_chk4').addClass('ok'); //정답 여부 클래스 추가
			allChk();
		} else if (e.target.id === 'ox_chk4') { //오답인 id로 값 변경
			playStop();
			playAudio('a_incorrect');
		}

		//세 번째 행의 id값을 정답에 맞게 수정
		if (e.target.id === 'ox_chk6') {
			playStop();
			playAudio('a_correct');
			$('#ox_chk5, #ox_chk6').attr('disabled', 'true'); //세 번째 행 재클릭 방지
			$('#ox_chk5').addClass('ok'); //정답 여부 클래스 추가
			allChk();
		} else if (e.target.id === 'ox_chk5') { //오답인 id로 값 변경
			playStop();
			playAudio('a_incorrect');
		}
	});
});