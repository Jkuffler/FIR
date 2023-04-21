const buttons = document.querySelectorAll("[data-carousel-button]")
const aboutBtn = document.getElementById("about-btn")
const about = document.getElementById("about")
const closeBtn = document.getElementById("close-btn")

aboutBtn.addEventListener('click', () => {
  about.showModal();
})

closeBtn.addEventListener('click', () => {
  about.close();
} )
// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1
//     const slides = button
//       .closest("[data-carousel]")
//       .querySelector("[data-slides]")

//     const activeSlide = slides.querySelector("[data-active]")
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset
//     if (newIndex < 0) newIndex = slides.children.length - 1
//     if (newIndex >= slides.children.length) newIndex = 0

//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active
//   })
// })

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    const carousel = button.closest('[data-carousel]');
    const slides = carousel.querySelector('[data-slides]');

    if (slides) {
      const activeSlide = slides.querySelector('[data-active]')
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;

      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
    }
  });
});

