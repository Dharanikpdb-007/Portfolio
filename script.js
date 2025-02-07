function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
  });
  
  // Close modal if user clicks outside the modal content
  window.onclick = function(event) {
    const modals = document.getElementsByClassName("modal");
    for (let modal of modals) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  };
// Detect scroll position and animate skill bars
window.addEventListener('scroll', function () {
    let skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
      let skillPos = skill.getBoundingClientRect().top;
      let screenPos = window.innerHeight;
  
      if (skillPos < screenPos) {
        skill.style.width = skill.getAttribute('data-skill');
      }
    });
  });
// Update the progress bar as the user scrolls
window.addEventListener('scroll', function () {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollProgress = (scrollPosition / scrollHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrollProgress + '%';
  });
  // Create particles randomly
function createParticles() {
    const container = document.querySelector('.particles-container');
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.top = `${Math.random() * window.innerHeight}px`;
      particle.style.left = `${Math.random() * window.innerWidth}px`;
      container.appendChild(particle);
    }
  }
  createParticles();
  