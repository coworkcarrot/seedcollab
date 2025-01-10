// page-1 arrow down btn scroll down to page-2

document.querySelector('.btn-antiman').addEventListener('click', function (event) {
  document.querySelector('.center').scrollIntoView({
    behavior: 'smooth', // 부드럽게 이동
    block: 'center',  // 수직으로 중앙 정렬
  });
});

// page-3 swiper-slide
// document.addEventListener("DOMContentLoaded", function () {
//   const imgContainer = document.querySelector(".img-container");
//   const profileList = document.querySelector(".profile-list");
//   const page3 = document.querySelector("#page-3");

//   // 페이지와 블록의 오프셋 계산
//   const pageOffsetTop = page3.offsetTop;
//   const profileListHeight = profileList.scrollHeight;
//   const imgContainerHeight = imgContainer.offsetHeight;

//   // 이벤트 리스너 추가
//   window.addEventListener("scroll", () => {
//     const scrollY = window.scrollY;

//     // 스크롤 위치가 페이지 영역에 도달했는지 확인
//     if (scrollY >= pageOffsetTop && scrollY <= pageOffsetTop + profileListHeight - imgContainerHeight) {
//       // 왼쪽 블록 고정
//       imgContainer.style.position = "relative";
//       imgContainer.style.top = "0";
//     } else if (scrollY > pageOffsetTop + profileListHeight - imgContainerHeight) {
//       // 오른쪽 블록의 스크롤 완료 후, 고정 해제
//       imgContainer.style.position = "absolute";
//       imgContainer.style.top = `${profileListHeight - imgContainerHeight}px`;
//     } else {
//       // 초기 상태로 복귀
//       imgContainer.style.position = "relative";
//       imgContainer.style.top = "0";
//     }
//   });
// });
