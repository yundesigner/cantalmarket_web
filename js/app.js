AOS.init();

//URL 복사
function copyClip(url) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(url).select();
  document.execCommand("copy");
  $temp.remove();
  alert("해당페이지 URL이 복사되었습니다.");
}
$(".copy-btn").on("click", function (e) {
  e.preventDefault();
  var link = location.href;
  copyClip(link);
});
