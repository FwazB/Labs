let fullName = "Fawaz Butt";
let age = 28;
let birthday = "July 18";
let pineapplePizza = true;
let counter = 0;
let lifeEvents = [
  "I was born in London, England",
  "I went to Indiana University",
  "I participated in First Robotics league when I was 16 years old",
  "I love to be in nature",
];

if ((pineapplePizza = true)) {
  console.log(
    "My Name is " +
      fullName +
      " and i like pineapples on pizza. I am currently " +
      age +
      " years old and my birthday is on " +
      birthday
  );
} else {
  console.log(
    "My Name is " +
      fullName +
      "im not into pineapples on pizza, i am currently " +
      age +
      " years old and my birthday is on " +
      birthday
  );
}
for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}
while (true) {
  let randomNumber = Math.floor(Math.random() * 11);
  if (randomNumber !== 5) {
    counter++;
    console.log("randomNumber !== 5");
  } else {
    counter++;
    console.log(
      "5 === 5. It took " +
        counter +
        " iterations to randomly generate the number 5."
    );
    break;
  }
}
