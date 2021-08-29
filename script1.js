  
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Que.. High level language is a .?',
    answers: [
      { text: 'A) Human readable like language.', correct: true },
      { text: 'B) language with small program size.', correct: false },
      { text: 'C) language with big program size.', correct: false },
      { text: 'D) language which is difficult to understand and not human readable', correct: false }
    ]
  },
  {
      question: 'Que.. Who invented C Language.?',
      answers: [
        { text: 'A) Charles Babbage', correct: false },
        { text: 'B) Grahambel', correct: false },
        { text: 'C) Dennis Ritchie', correct: true },
        { text: 'D) Steve Jobs', correct: false }
      ]
  },
  {
    question: 'Que.. C Language is a successor to which language.?',
    answers: [
      { text: 'A) FORTRAN', correct: false },
      { text: 'B) D Language', correct: false },
      { text: 'C) BASIC', correct: false },
      { text: 'D) B Language', correct: true }
    ]
  },
  {
    question: 'Que.. C is a which level language.?',
    answers: [
      { text: 'A) Low Level', correct: false },
      { text: 'B) High Level', correct: true },
      { text: 'C) Low + High', correct: false },
      { text: 'D) None', correct: false }
    ]
  },
  {
    question: 'Que.. C is _______ type of programming language.?',
    answers: [
      { text: 'A) Object Oriented', correct: false },
      { text: 'B) Procedural', correct: true },
      { text: 'C) Bit level language', correct: false },
      { text: 'D) Functional', correct: false }
    ]
  },
  {
    question: 'Que.. What is the present C Language Standard.?',
    answers: [
      { text: 'A) C99 ISO/IEC 9899:1999', correct: false },
      { text: 'B) C11 ISO/IEC 9899:2011', correct: true },
      { text: 'C) C05 ISO/IEC 9899:2005', correct: false },
      { text: 'D) C10 ISO/IEC 9899:2010', correct: false }
    ]
  },
  {
    question: ' Que.. language was invented in which laboratories.?',
    answers: [
      { text: 'A) Uniliver Labs', correct: false },
      { text: 'B) IBM Labs', correct: false },
      { text: 'C) AT&T Bell Labs', correct: true },
      { text: 'D) Verizon Labs', correct: false }
    ]
  },
  {
    question: 'Que.. C language was invented to develop which Operating System.?',
    answers: [
      { text: 'A) Android', correct: false },
      { text: 'B) Linux', correct: false },
      { text: 'C) Ubuntu', correct: false },
      { text: 'D) Unix', correct: true }
    ]
  },
  {
    question: 'Que.. C language was invented in the year.?',
    answers: [
      { text: 'A) 1999', correct: false },
      { text: 'B) 1978', correct: false },
      { text: 'C) 1972', correct: true },
      { text: 'D) 1990', correct: false }
    ]
  },
  {
    question: '4) Low level language is .?',
    answers: [
      { text: 'A) Human readable like language.', correct: false },
      { text: 'B) language with big program size.', correct: false },
      {text: 'C) language with small program size.',correct:false},
      {text: 'D) Difficult to understand and readability is questionable.',correct:true}
    ]
  }
]