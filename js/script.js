// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Navigation menu functionality
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
  
    menuIcon.addEventListener("click", () => {
      navbar.classList.toggle("show");
    });
  
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".navbar a");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetSection.offsetTop - navbar.offsetHeight,
          behavior: "smooth",
        });
      });
    });
  
    // Header background change on scroll
    const header = document.querySelector(".header");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scroll");
      } else {
        header.classList.remove("scroll");
      }
    });
  
    // Skill boxes animation on hover
    const skillBoxes = document.querySelectorAll(".skills-box");
  
    skillBoxes.forEach((box) => {
      box.addEventListener("mouseenter", () => {
        box.classList.add("box-hover");
      });
  
      box.addEventListener("mouseleave", () => {
        box.classList.remove("box-hover");
      });
    });
  
    // Project boxes animation on hover
    const projectBoxes = document.querySelectorAll(".Project-box");
  
    projectBoxes.forEach((box) => {
      box.addEventListener("mouseenter", () => {
        box.querySelector("img").style.transform = "scale(1.1)";
      });
  
      box.addEventListener("mouseleave", () => {
        box.querySelector("img").style.transform = "scale(1)";
      });
    });
  
    // Contact form submission
    const contactForm = document.querySelector(".Contact form");
    const submitButton = document.querySelector(".Contact form input[type='submit']");
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // You can add form validation here
  
      // Simulate form submission (replace this with your actual form submission logic)
      setTimeout(() => {
        alert("Message sent successfully!");
        contactForm.reset();
      }, 1000);
    });
  });