//다중선택 방지
function chk_line(a) {

  const obj = document.getElementsByName("chkBox");

  for (var i = 0; i < obj.length; i++) {

    obj[i].checked = false;

    if (obj[i] != a) {

      obj[i].checked = false;

    } else {

      obj[i].checked = true;

    }
  };
};

function inputChk(idx, ans) {
  playStop();
  if (ans === 1) {
    // goNextExam(); // 문제 정답시 캐릭터 활성
    finalPassExam(); // 마지막 페이지 캐릭터 활성

    $('.noTouch').css('display', 'block');
  } else {
    playAudio('a_incorrect');
  }
};

window.addEventListener("DOMContentLoaded", function () {

  //이미지 클릭 시 해당 체크박스도 체크 되게
  $(".imgWrap").find("div").each(function (idx) {
    $(".imgWrap").find("div").eq(idx).on("click", function () {
      $(".inputArea").find("input[type=checkbox]").eq(idx).trigger("click");
    });
  });

});

// popUp Area
$('.popBtn').click(function () {
  $('#popupArea').show();
});
$('.popCloseBtn').click(function () {
  $('#popupArea').hide();
});