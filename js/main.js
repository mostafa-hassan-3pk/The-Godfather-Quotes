//Use an array to hold the value of the quotes
const arrayOfQuotes = [
  {
    src: "./sounds/The Joker - Crime Has No Punch Line[music+vocals].mp3",
    author: "- Joker ,Batman: The Animated Series -",
    quote: "Without Batman, crime has no punchline.",
  },
  {
    src: "./sounds/Vito Corleone Quotes That Will Make you a REAL MAN [vocals] - Part1.mp3",
    author: "- Mario Puzo, The Godfather -",
    quote:
      "A man who doesn’t spend time with his family can never be a real man.",
  },
  {
    src: "./sounds/Vito Corleone Quotes That Will Make you a REAL MAN [vocals] - Part2.mp3",
    author: "- Mario Puzo, The Godfather -",
    quote:
      "It was not perhaps the warmest friendship in the world, they would not send each other Christmas gift greetings, but they would not murder each other.",
  },
  {
    src: "./sounds/Vito Corleone Quotes That Will Make you a REAL MAN [vocals] - Part3.mp3",
    author: "- Mario Puzo, The Godfather -",
    quote: "I’ll make him an offer he can’t refuse.",
  },
  {
    src: "./sounds/Vito Corleone Quotes That Will Make you a REAL MAN [vocals] - Part4.mp3",
    author: "- Mario Puzo, The Godfather -",
    quote:
      "Friendship is everything. Friendship is more than talent. It is more than the government. It is almost the equal of family.",
  },
  {
    src: "./sounds/Vito Corleone Quotes That Will Make you a REAL MAN [vocals] - Part5.mp3",
    author: "- Mario Puzo, The Godfather -",
    quote: "Revenge is a dish that tastes best when served cold",
  },
  {
    src: "./sounds/Vito Corleone Quotes That Will Make you a REAL MAN [vocals] - Part6.mp3",
    author: "- Mario Puzo, The Godfather -",
    quote: "A man who is not a father to his children can never be a real man",
  },
];
var Current_number = 1;
var p = document.getElementsByClassName("quote")[0];
var cd = document.getElementsByClassName("cd")[0];
var sp = document.getElementById("spin");
let ost = document.getElementById("ost");

var fromto_work = false;
var spin_work = false;


function say() {
  
  if(p.classList.contains("fromto"))
  p.classList.replace("fromto","fromto1")
else {
  p.classList.replace("fromto1","fromto")

}

}
function spin() {
  if (spin_work == false) {
    sp.classList.remove("spin2");
    sp.classList.add("spin1");
    spin_work = true;
  } else {
    sp.classList.remove("spin1");
    sp.classList.add("spin2");
    spin_work = false;
  }
}

addEventListener("load", function () {
  console.log("sad")

  ost.src = "sounds/The+Godfather+Theme+Song+(mp3cut.net)_out.mp3";
})

function generateQuote() {
  spin();
  say();


  var random = Math.round(Math.random() * (arrayOfQuotes.length - 1));
  if (random != Current_number) {
    if(ost.src =="")
  {


  }
    ost.volume = 0.1;
    document.getElementById("qoutes-sound").src = arrayOfQuotes[random].src;
    p.innerHTML = ` "${arrayOfQuotes[random].quote}" `;
    document.getElementById(
      "author"
    ).innerHTML = `${arrayOfQuotes[random].author}`;
    Current_number = random;
    var audio = new Audio(arrayOfQuotes[random].src);
    audio.addEventListener("canplaythrough", function (e) {
      var seconds = e.currentTarget.duration;
      setTimeout(function () {
        sp.classList.remove("spin2");
        sp.classList.remove("spin1");
      }, seconds *1000);
      console.log(seconds);
      // Use 'seconds' as needed
    });
  } else {
    generateQuote();
  }
}





/*
  if (fromto_work == false) {
    p.classList.remove("fromto1");
    p.classList.add("fromto");
    fromto_work = true;
  } else {
    p.classList.remove("fromto");
    p.classList.add("fromto1");
    fromto_work = false;
  }
*/