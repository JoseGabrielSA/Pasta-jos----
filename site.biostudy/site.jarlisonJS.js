const botaoContraste = document.getElementById('toggle-contrast');

botaoContraste.addEventListener('click', () => {
  document.body.classList.toggle('alto-contraste');

  // Atualiza o texto do botão
  if (document.body.classList.contains('alto-contraste')) {
    botaoContraste.textContent = 'Escuro';
  } else {
    botaoContraste.textContent = 'Claro';
  }
});

//carrosel
    const slides = document.querySelectorAll('.img-slider');
    const btnPrev = document.getElementById('prev-button');
    const btnNext = document.getElementById('next-button');

    let currentSlide = 0;

    function hideSlides() {
      slides.forEach(slide => slide.classList.remove('on'));
    }

    function showSlide() {
      slides[currentSlide].classList.add('on');
    }

    function nextSlide() {
      hideSlides();
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide();
    }

    function prevSlide() {
      hideSlides();
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide();
    }

    btnNext.addEventListener('click', nextSlide);
    btnPrev.addEventListener('click', prevSlide);

    showSlide();