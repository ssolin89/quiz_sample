// 다음 문제 이동 화살표 (블링크) 효과
let jj = 1;

function blink(bid, ae) {
	let my_timer = ae;
	img_blink = setInterval(function () {

		if (jj++ % 2 == 0) {
			$("." + bid).css("opacity", "0");
		} else {
			$("." + bid).css("opacity", "1");
		}
	}, my_timer);
}

// 1.문제 맞췄을 때 (토끼 캐릭터, 마지막 문제 제외한 모든 문제)
function goNextExam() {
	const cha2 = $("#nextDiv");
	cha2.addClass("nextDiv2").append("<img class='cha2' src='../common/imgs/cha2.png' style='position:absolute; top:50%; left:50%; transform: translate(-50%,-50%);'>");

	$(".nextDiv2").css("display", "block");
	playAudio('a_correct');

	setTimeout(function () {
		$(".nextDiv2").css("display", "none");
		$(".btn_right").css("display", "block");
		blink("btn_right", 500);
	}, 1500);
};

// 2.마지막 문제 맞췄을 때 (악어 캐릭터)
function endExam() {
	const cha = $("#finDiv");
	cha.append("<img class='cha' src='../common/imgs/cha.png' style='display: none;position: absolute; top: 150px;left: 50%;transform: translateX(-50%);'>");

	$("#finDiv").css("display", "block");
	$('.cha').css('display', 'block');
	playAudio('a_finish');
	sendCompletedClass("1");
};
// 2-1.마지막 문제 맞췄을 때 (토끼 캐릭터, 이 함수를 실행해야 토끼 나오고 악어 나옵니다)
function finalPassExam() {
	const cha2 = $('#nextDiv');
	cha2.addClass('nextDiv2').append("<img class='cha2' src='../common/imgs/cha2.png' style='position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);'>");

	$(".nextDiv2").css("display", "block");
	playAudio('a_correct');

	setTimeout(function () {
		$(".nextDiv2").css("display", "none");
		endExam();
	}, 2000);
};

// 재생 중인 음원 정지
function playStop() {
	var audios = document.getElementsByTagName("audio");
	for (var i = 0; i < audios.length; i++) {
		var audio = audios[i];
		audio.onended = null;
		audio.pause();
		audio.currentTime = 0;
	}
};

// 음원 재생
function playAudio(fileName) {
	const audio = document.getElementById(fileName);
	audio.play();
};

// 다음 화살표 클릭 시 다음 문제로 이동
function goNext() {
	console.log('페이지이동 성공!');
	const aN = $("#a_next");
	aN[0].play();
	aN.on("ended", function () {
		window.location = right_url;
	});
};

// 우측 하단 숫자 클릭 시 다음 문제로 이동
function goPage(pageUrl) {
	const aN = $("#a_next");
	aN[0].play();
	aN.on("ended", function () {
		window.location = pageUrl;
	});
};