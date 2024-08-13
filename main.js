function hiddenPreloader() {
    let preloader = document.getElementById('preloader');
  
    setTimeout(() => {
      preloader.classList.add('preloader--invisible');
      document.querySelector('html').style.overflowY = 'auto';
  
      setTimeout(() => {
        preloader.classList.add('preloader--hidden');
      }, 500)
    }, 2000)
  }
  
  document.querySelector('html').style.overflowY = 'hidden'
  
  window.onload = () => {
    hiddenPreloader();
  }

  document.addEventListener("DOMContentLoaded", function() {
    const toggleThemeButton = document.createElement("button");
    toggleThemeButton.textContent = "light & dark mode";
    document.body.appendChild(toggleThemeButton);

    // Check for saved user preference, if any, on load
    const currentTheme = localStorage.getItem("theme") || "light";
    document.body.setAttribute("data-theme", currentTheme);

    toggleThemeButton.addEventListener("click", function() {
        const currentTheme = document.body.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        document.body.setAttribute("data-theme", newTheme);

        // Save the user's preference in localStorage
        localStorage.setItem("theme", newTheme);
    });
});
