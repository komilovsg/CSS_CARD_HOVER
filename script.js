// Обработчик события наведения на область SVG
const leader = document.getElementById('leader');
leader.addEventListener('mouseenter', showArrow);
leader.addEventListener('mouseleave', hideArrow);

function showArrow() {
  const overlay = this.querySelector('.overlay');
  overlay.style.opacity = '1';
}

function hideArrow() {
  const overlay = this.querySelector('.overlay');
  overlay.style.opacity = '0';
}
// ---------------------------------------------------------------------------

window.addEventListener('load', function() {
    // Скрываем прелоадер и отображаем содержимое страницы
    var preloader = document.getElementById('preloader');
    var content = document.getElementById('content');
    
    preloader.style.display = 'none';
    content.style.display = 'block';
  });