// Banner image click event to toggle size
document.querySelectorAll('.features-banner img').forEach(image => {
    image.addEventListener('click', function() {
        if (this.classList.contains('full-size')) {
            this.classList.remove('full-size');
        } else {
            document.querySelectorAll('.features-banner img').forEach(img => img.classList.remove('full-size'));
            this.classList.add('full-size');
        }
    });
});

// CSS class for full-size images
const style = document.createElement('style');
style.innerHTML = `
  .features-banner img.full-size {
      max-width: 120%;
      transition: max-width 0.5s ease-in-out;
  }
`;
document.head.appendChild(style);
