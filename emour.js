document.addEventListener("DOMContentLoaded", () => {
  // Your JS code here

    // script.js
    console.log("JavaScript is loading...");

    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");
  
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active"); // Toggle the "active" class
    });
  
    // faq
    // Add event listeners to FAQ questions
    const faqQuestions = document.querySelectorAll(".faq-question");
  
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const isActive = question.classList.contains("active");
  
      // Close all other FAQ answers
      faqQuestions.forEach((q) => {
        q.classList.remove("active");
        q.nextElementSibling.style.maxHeight = null;
      });
  
      // Toggle the clicked FAQ item
      if (!isActive) {
        question.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        question.classList.remove("active");
        answer.style.maxHeight = null;
      }
    });
  });
});