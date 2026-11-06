// Function for welcome message
function showMessage() {
    alert("Welcome to CampusFit Sports Booking!");
}

// Handle booking form
document.getElementById("bookingForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    let name = document.getElementById("studentName").value;
    let facility = document.getElementById("facility").value;
    // Check whether selected date is in the past
let selectedDate = new Date(date);
let today = new Date();
today.setHours(0, 0, 0, 0);

if (selectedDate < today) {
    alert("Past date booking is not allowed. Please select a future date.");
    return;
}

    // Display confirmation
    let result = document.getElementById("result");

    result.innerHTML =
        "<h3>Booking Successful!</h3>" +
        "<p>Student: " + name + "</p>" +
        "<p>Facility: " + facility + "</p>" +
        "<p>Date: " + date + "</p>" +
        "<p>Time: " + time + "</p>";

    alert("Your sports slot has been booked!");
});
// Available equipment
let equipmentStock = {
    "Badminton Racket": 8,
    "Basketball": 5,
    "TT Bat": 10
};

// Borrow equipment function
function borrowEquipment(item) {

    let message = document.getElementById("equipmentMessage");

    if (equipmentStock[item] > 0) {

        equipmentStock[item]--;

        message.innerHTML =
            "✓ Successfully borrowed " + item +
            "! Please return it within 2 days.";

        message.className = "message success-message";

        updateEquipment();

    } else {

        message.innerHTML =
            "Sorry! " + item + " is currently unavailable.";

        message.className = "message error-message";
    }
}
// Update stock values

function updateEquipment() {

    document.getElementById("racketStock").innerHTML =

        equipmentStock["Badminton Racket"];

    document.getElementById("basketStock").innerHTML =

        equipmentStock["Basketball"];

    document.getElementById("ttStock").innerHTML =

        equipmentStock["TT Bat"];
}