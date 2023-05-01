// Get the form and result elements
const form = document.getElementById('converter-form');
const resultDiv = document.getElementById('result');

// Add event listener to the form submit button
form.addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault();

  // Get the Fahrenheit value from the form
  const Age = parseInt(document.getElementById('Age').value);
  const Day = parseInt(document.getElementById('Day').value);

  // Calculate the Celsius value
  function Check() {
    var Message = "";
    if (Age <= 5 || Age >= 95) {
      var Message = Message + "<br> If they are younger than 5 or older than 95, they get in for FREE ✅";
    }
    if (Age >= 12 & Age <= 21 || Day == "Tuesday" || Day == "Thursday") {
      var Message = Message + "<br> If they are between 12 and 21 years old, OR if it is Tuesday or Thursday, they get a DISCOUNT (student price) ✅";
    }
    else {
      var Message = Message + "<br> Pay REGULAR price ✅";
    }
    return Message;
  }
  // Display the result
  resultDiv.innerHTML = `You are able to ${Check()}`;
});
