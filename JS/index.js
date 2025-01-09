// page-1 arrow down btn scroll down to page-2

document.querySelector('.btn-antiman').addEventListener('click', function (event) {
  document.querySelector('.center').scrollIntoView({
    behavior: 'smooth', // 부드럽게 이동
    block: 'center',  // 수직으로 중앙 정렬
  });
});

// page-3 swiper-slide
// window.addEventListener("scroll", () => {
//   const header = document.querySelector(".img-container img");

//   // 스크롤 상태 확인
//   if (window.scrollY > 50) {
//     header.classList.add("sticky"); // 특정 스크롤 높이에서 sticky 클래스 추가
//   } else {
//     header.classList.remove("sticky"); // 스크롤 복귀 시 sticky 클래스 제거
//   }
// });