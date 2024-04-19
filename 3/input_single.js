window.addEventListener('DOMContentLoaded', function(){
  $('#chkinput').on('keyup', function(){

    const chkinput = document.getElementById('chkinput');
  
    //value를 문제의 답에 맞게 값 변경
    if(chkinput.value === '착한'){
      chkinput.disabled = true;
      
      goNextExam(); // 문제 정답시 캐릭터 활성
      // finalPassExam(); // 마지막 페이지 캐릭터 활성
    }
  });
});

// popUp Area
$('.popBtn').click(function () {
	$('#popupArea').show();
});
$('.popCloseBtn').click(function () {
	$('#popupArea').hide();
});