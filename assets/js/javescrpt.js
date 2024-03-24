document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const darkModeBtn = document.getElementById("darkModeBtn");
  const lightModeBtn = document.getElementById("lightModeBtn");

  darkModeBtn.addEventListener("click", function () {
    body.classList.add("dark-mode"); // Add dark mode class to body
  });

  lightModeBtn.addEventListener("click", function () {
    body.classList.remove("dark-mode"); // Remove dark mode class from body
  });
});


// JavaScript code to toggle user menu
document.addEventListener("DOMContentLoaded", function () {
  const accountToggle = document.getElementById("accountToggle");
  const userMenu = document.getElementById("userMenu");

  accountToggle.addEventListener("click", function () {
    userMenu.classList.toggle("show");
  });

  // Close user menu when clicking outside of it
  window.addEventListener("click", function (event) {
    if (!event.target.matches("#accountToggle")) {
      if (userMenu.classList.contains("show")) {
        userMenu.classList.remove("show");
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const accountToggle = document.getElementById("logo");
  const sidebar = document.getElementById("sidebar");

  accountToggle.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    sidebar.classList.toggle("open"); // Toggle the open class to show/hide the sidebar
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const accountToggle = document.getElementById("logo-2");
  const sidebar = document.getElementById("sidebar");

  accountToggle.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    sidebar.classList.toggle("open"); // Toggle the open class to show/hide the sidebar
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const arrowIconLeft = document.getElementById("arrowIconLeft");
  const arrowIconRight = document.getElementById("arrowIconRight");
  const additionalItemsContainer = document.getElementById("additionalItemsContainer");

  // Scroll to the left when left arrow is clicked
  arrowIconLeft.addEventListener("click", function () {
    additionalItemsContainer.scrollTo({
      left: additionalItemsContainer.scrollLeft - 100, // Adjust scroll distance as needed
      behavior: "smooth" // Smooth scrolling effect
    });
  });

  // Scroll to the right when right arrow is clicked
  arrowIconRight.addEventListener("click", function () {
    additionalItemsContainer.scrollTo({
      left: additionalItemsContainer.scrollLeft + 100, // Adjust scroll distance as needed
      behavior: "smooth" // Smooth scrolling effect
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');

  searchButton.addEventListener('click', function () {
    searchInput.style.display = 'inline-block';
    searchInput.focus();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const arrowIconLeftstory = document.getElementById("arrowIconLeftstory");
  const arrowIconRightstory = document.getElementById("arrowIconRightstory");
  const storyvideos = document.getElementById("storyvideos");

  // Scroll to the left when left arrow is clicked
  arrowIconLeftstory.addEventListener("click", function () {
    storyvideos.scrollTo({
      left: storyvideos.scrollLeft - 100, // Adjust scroll distance as needed
      behavior: "smooth" // Smooth scrolling effect
    });
  });

  // Scroll to the right when right arrow is clicked
  arrowIconRightstory.addEventListener("click", function () {
    storyvideos.scrollTo({
      left: storyvideos.scrollLeft + 100, // Adjust scroll distance as needed
      behavior: "smooth" // Smooth scrolling effect
    });
  });
});



