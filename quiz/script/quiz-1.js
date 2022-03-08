const quizData = [
    {
        question: "องค์ประกอบของระบบคอมพิวเตอร์แบ่งออกเป็นกี่ส่วน",
        a: "2 ส่วน",
        b: "3 ส่วน",
        c: "4 ส่วน",
        d: "5 ส่วน",
        e: "6 ส่วน",
        correct: "c",
    },
    {
        question: "ข้อใดไม่ใช่องค์ประกอบทางด้านฮาร์ดแวร์",
        a: "Input Unit",
        b: "Output Unit",
        c: "Program",
        d: "Memory",
        e: "Central Processing Unit",
        correct: "d",
    },
    {
        question: "ข้อใดจัดอยู่ในประเภทเดียวกัน",
        a: "Keyboard, Mouse, Program",
        b: "Monitor, Printer, User",
        c: "Printer, Scanner, Monitor",
        d: "RAM, Cache, Software",
        e: "CD-ROM, DVD-ROM, Tape",
        correct: "e",
    },
    {
        question: "กล้องดิจิทัลจัดเป็นองค์ประกอบส่วนใดของฮาร์ดแวร์",
        a: "Output Unit",
        b: "Memory Unit",
        c: "Input Unit",
        d: "Central Processing Unit",
        e: "Process Unit",
        correct: "c",
    },
    {
        question: "อุปกรณ์ชนิดใดเป็นได้ทั้งอุปกรณ์รับข้อมูลและอุปกรณ์แสดงผล",
        a: "Printer",
        b: "Mouse",
        c: "Scanner",
        d: "Microphone",
        e: "Touch Screen Monitor",
        correct: "e",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if (answer === quizData[currentQuiz].correct)
            score++
    }

    currentQuiz++

    if(currentQuiz < quizData.length) {
        loadQuiz()
    }else {
        quiz.innerHTML = `
        <h2>ตอบถูกทั้งหมด ${score}/${quizData.length} ข้อ</h2>

        <button onclick="location.reload()" class="re-btn">ย้อนกลับ</button>
        `
    }
})