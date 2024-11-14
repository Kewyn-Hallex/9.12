function initializeSlider(sliderSelector) {
  const slider = document.querySelector(sliderSelector);

  let isDragging = false;
  let startX, scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    console.log('mousedown event triggered');
    isDragging = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.classList.add('dragging');
  });

  slider.addEventListener('touchstart', (e) => {
    console.log('touchstart event triggered');
    isDragging = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.classList.add('dragging');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    console.log('mousemove event triggered');
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste de sensibilidade do arraste
    slider.scrollLeft = scrollLeft - walk;
  });

  slider.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    console.log('touchmove event triggered');
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });

  ['mouseup', 'mouseleave', 'touchend'].forEach((event) => {
    slider.addEventListener(event, () => {
      console.log(`${event} event triggered`);
      isDragging = false;
      slider.classList.remove('dragging');
    });
  });
}

// Inicializar os sliders separadamente
initializeSlider('.tabs-box');
initializeSlider('.tabs-box2');
initializeSlider('.tabs-box3');
initializeSlider('.tabs-box4');