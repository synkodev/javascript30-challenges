// Declaring variables for the elements we'll be interacting with
const secondsHand = document.querySelector('div.second-hand');
const minutesHand = document.querySelector('div.min-hand');
const hoursHand = document.querySelector('div.hour-hand');

// Function that will be executed each second
const setDate = () => {
  // Gets current time when the function is called
  const now = new Date()

  // Splits the value for the second, minute and hour
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  // Mathematically defining the rotating angle degree of each hand of the clock
  // + 90 is to compensate for the original rotation in the CSS
  const secondHandDegrees = (second * 6) + 90;
  const minuteHandDegrees = (minute * 6) + 90;
  const hourHandDegrees = (hour * 30) + 90;

  // Applying transform properties to each hand
  secondsHand.style.transform = `rotate(${secondHandDegrees}deg)`;
  minutesHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
  hoursHand.style.transform = `rotate(${hourHandDegrees}deg)`;
}

// Calling setDate function each second;
setInterval(setDate, 1000);
