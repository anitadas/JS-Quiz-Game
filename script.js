const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex;
let quizScore = 0;

startButton.addEventListener('click', startGanme)

nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
    setnextQuestion()
    console.log("hi2")
})

function startGanme(){
    console.log("startGanme enter")
    startButton.classList.add('hide')
    shuffledQuestions=questions.sort(() => Math.random() -0.5 )
    currentQuestionIndex=0;
    questionContainerElement.classList.remove('hide')
    setnextQuestion()
    document.getElementById('right-answers').classList.add('hide')
    quizScore=0
    console.log("quizScore="+quizScore)
}

function setnextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex])
    console.log("hi4")
}

function showQuestion(question){
    console.log("Question="+question)
    console.log("Questionnnn="+question.question)
    console.log("Questionnnn element ="+questionElement)


    questionElement.innerText= question.question;

    console.log("questionElement.innerText="+questionElement.innerText)
    question.answers.forEach((answer)=>{
        const button = document.createElement('button')
        button.innerText=answer.text;
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct= answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    console.log("inside")
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach((button)=>{
        setStatusClass(button, button.dataset.correct)
    })

    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide")
    }
    else{
        startButton.innerText= "RESTART"
        startButton.classList.remove("hide") 
    }
    if(selectedButton.dataset = correct){
        quizScore++

    }
    if(quizScore > 0){
        document.getElementById('right-answers').classList.remove('hide')
    }
    document.getElementById('right-answers').innerText=quizScore
    console.log("quizScore="+quizScore)

}


function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }
    else{
        element.classList.add("wrong")
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Which one of these is a Javasscript framework?',
        answers:[
            {text: 'Python', correct: false},
            {text: 'Django', correct: false},
            {text: 'React', correct: true},
            {text: 'JAVA', correct: false},
        ],
    },

    {
        question: 'Who is the Prime Minister of Canada?',
        answers:[
            {text: 'Narendra Modi', correct: false},
            {text: 'Justin Trudea', correct: true},
            {text: 'Obama', correct: false},
            {text: 'Donald Trump', correct: false},
        ],
    },

    {
        question: 'What is 5*10?',
        answers:[
            {text: '51', correct: false},
            {text: '45', correct: false},
            {text: '50', correct: true},
            {text: '05', correct: false},
        ],
    },
]