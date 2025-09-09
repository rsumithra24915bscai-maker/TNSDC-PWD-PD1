// script.js
document.getElementById("carBookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const carType = document.getElementById("carType").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const duration = document.getElementById("duration").value;

  if (!name || !contact || !carType || !date || !time || !duration) {
    alert("Please fill in all fields.");
    return;
  }

  alert(`Thank you, ${name}! Your ${carType} is booked on ${date} at ${time} for ${duration} hour(s).`);

  // Reset form after submission
  document.getElementById("carBookingForm").reset();
});