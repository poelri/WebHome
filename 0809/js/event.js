window.addEventListener('load', init, false);
// addEentlistener 특정 이벤트가 발생했을 때 실행될 함수를 설정하는 메서드
// html의 모든 Element가 메모리에 로딩 한 후
function init() {
  const button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', myClick, false);

}

function myClick(evt) {
  console.log(evt);
}