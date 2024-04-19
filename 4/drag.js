var location_info = {
  test: "test"
};

function ff(element, dura) {
  if (dura = null) dura = 50;

  element.fadeOut(dura, function () {
    element.css("left", sl(element));
    element.css("top", st(element));
    element.show(dura);
  });
};

function sv(element) {
  if (element.length == 1) {
    var id = element.attr("id");
    var left = element.css("left");
    var top = element.css("top");
    location_info[id + "-left"] = left;
    location_info[id + "-top"] = top;
  } else {
    for (var i = 0; i < element.length; i++) {
      var el = element.eq(i);
      var id = el.attr("id");
      var left = el.css("left");
      var top = el.css("top");
      location_info[id + "-left"] = left;
      location_info[id + "-top"] = top;
    }
  }
};

function sl(element) {
  var id = element.attr("id");
  return location_info[id + "-left"];
};

function st(element) {
  var id = element.attr("id");
  return location_info[id + "-top"];
};

function dropGame() {
  $("#dropArea").droppable({
    drop: function (event, ui) {
      if (ui.draggable.attr("id") === "drag2") { //모든 drag0을 정답 id값으로 변경
        const imgSrc = $("#drag2").attr("id");
        const drText = $('#drag2').text();
        const addhtml = "<div id='" + imgSrc + "'> " + drText + "</div>";
        $('div[name="dropArea"]').html(addhtml);

        goNextExam(); // 문제 정답시 캐릭터 활성
        // finalPassExam(); // 마지막 페이지 캐릭터 활성

        ff(ui.draggable);
        $('.draBgBlock').css({
          'display': 'block',
          'position': 'absolute',
          'top': '0',
          'left': '0'
        }); //드래그 계속 방지
      } else {
        playAudio('a_incorrect');
        ff(ui.draggable);
      }
    }
  });
};

// popUp Area
$('.popBtn').click(function () {
  $('#popupArea').show();
});
$('.popCloseBtn').click(function () {
  $('#popupArea').hide();
});

window.addEventListener('DOMContentLoaded', function () {
  sv($("#drag0, #drag1, #drag2"));
  $("#drag0, #drag1, #drag2").draggable({
    revert: "invalid"
  });
  dropGame();
});