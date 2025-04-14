// Update the openModal function to handle different file formats
function openModal(imageName, format) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  modalImg.src = `${imageName}.${format}`;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  // Get all timeline items
  const timelineItems = document.querySelectorAll(".timeline-item");

  // Function to check if an element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }

  // Function to handle scroll animation
  function handleScrollAnimation() {
    timelineItems.forEach((item) => {
      if (isInViewport(item)) {
        item.classList.add("visible");
      } else {
        // Remove the 'visible' class when element is out of viewport
        item.classList.remove("visible");
      }
    });
  }

  // Check items on page load
  handleScrollAnimation();

  // Listen for scroll events
  window.addEventListener("scroll", handleScrollAnimation);
});
