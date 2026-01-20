const menuBtn = document.getElementById("hamburger");
const navMenu = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menuBtn.classList.toggle("active");
});

//Booking 
const bookingForm = document.getElementById('bookingForm');
const bookingMessage = document.getElementById('bookingMessage');

if (bookingForm && bookingMessage) {
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("Form submitted!");

    bookingMessage.textContent = "🎉 Your booking has been received! We will contact you soon.";
    bookingMessage.style.display = "block";
    console.log("Message displayed");

    bookingForm.reset();

    setTimeout(() => {
      bookingMessage.style.display = "none";
    }, 5000);
  });
} else {
  console.log("Form or message element not found");
  console.log("bookingForm:", bookingForm);
  console.log("bookingMessage:", bookingMessage);
}
