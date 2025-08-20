const questions = [
  {
    category: 'Anime',
    id: 'q1',
    correctAnswer: 'Monkey D. Luffy',
    options: ['Monkey D. Luffy', 'Roronoa Zoro', 'Sanji', 'Shanks'],
    question: "Who is the main protagonist of One Piece?",
  },
  {
    category: 'Anime',
    id: 'q2',
    correctAnswer: 'Death Note',
    options: ['Naruto', 'Bleach', 'Death Note', 'Code Geass'],
    question: "In which anime does Light Yagami find the Death Note?",
  },
  {
    category: 'Anime',
    id: 'q3',
    correctAnswer: 'Nine',
    options: ['Seven', 'Nine', 'Eleven', 'Ten'],
    question: "How many Titans were there originally in Attack on Titan?",
  },
  {
    category: 'Anime',
    id: 'q4',
    correctAnswer: 'Soul Reapers',
    options: ['Ninjas', 'Saiyans', 'Soul Reapers', 'Ghouls'],
    question: "In Bleach, what are the Shinigami called in English?",
  },
  {
    category: 'Anime',
    id: 'q5',
    correctAnswer: 'Gon Freecss',
    options: ['Killua Zoldyck', 'Kurapika', 'Gon Freecss', 'Leorio'],
    question: "Who is the main character of Hunter x Hunter?",
  },
  {
    category: 'Anime',
    id: 'q6',
    correctAnswer: 'Konoha',
    options: ['Suna', 'Konoha', 'Iwa', 'Kiri'],
    question: "What is the name of Naruto’s village?",
  },
  {
    category: 'Anime',
    id: 'q7',
    correctAnswer: 'Edward Elric',
    options: ['Edward Elric', 'Alphonse Elric', 'Roy Mustang', 'Scar'],
    question: "Who is known as the Fullmetal Alchemist?",
  },
  {
    category: 'Anime',
    id: 'q8',
    correctAnswer: 'Nezuko Kamado',
    options: ['Mikasa Ackerman', 'Nezuko Kamado', 'Hinata Hyuga', 'Asuna Yuuki'],
    question: "Who is Tanjiro’s sister in Demon Slayer?",
  },
  {
    category: 'Anime',
    id: 'q9',
    correctAnswer: 'Saitama',
    options: ['Saitama', 'Genos', 'Garou', 'Blast'],
    question: "Who is the Caped Baldy in One Punch Man?",
  },
  {
    category: 'Anime',
    id: 'q10',
    correctAnswer: 'Pokeballs',
    options: ['Pokeballs', 'Digivices', 'Scrolls', 'Cards'],
    question: "What do Pokémon trainers use to catch Pokémon?",
  },
];

const ques = document.querySelector("#question");
const opt = document.querySelector("#options");
const sco = document.querySelector("#score");
const nextb = document.querySelector("#next");
let score = 0;//global
let currentIndex = 0;//global
const totalscore = questions.length; //global

function Shuffle(array) {
  let shuff = [...array];
  for (let index = 0; index < shuff.length; index++) {
    let j = Math.floor(Math.random() * shuff.length);
    [shuff[index], shuff[j]] = [shuff[j], shuff[index]]; // Shuffle using Destructuring
  }
  return shuff;
}
function loadQuestion() {
  if (currentIndex >= questions.length) {
    ques.textContent = "Quiz is Completed!";
    opt.textContent = "";
    nextb.remove();
  }
  const { question, correctAnswer, options } = questions[currentIndex];
  ques.textContent = question;
  opt.textContent = ""; // clear previous options

  let newoptions = Shuffle(options);
  newoptions.forEach((value) => {
    let button = document.createElement("button");
    button.textContent = value;
    button.classList.add("but");
    opt.appendChild(button);

    button.addEventListener("click", (event) => {
      if (event.currentTarget.textContent === correctAnswer) {
        score++;
      } else {
        score -= 0.25;
      }
      sco.textContent = `Score ${score}/ ${totalscore}`;
      nextQuestion(); // load next question
    });
  });
}
function nextQuestion() {
  currentIndex++;
  loadQuestion();
}

nextb.addEventListener("click", () => {
sco.textContent = `Score ${score}/${totalscore}`;
  nextQuestion();
});

// start quiz
loadQuestion();
