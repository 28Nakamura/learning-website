const quizData = [
    {
        question: "ข้อใดไม่ใช่หน้าที่ของระบบปฏิบัติการที่มีต่อเครื่องคอมพิวเตอร์",
        a: "จัดการทรัพยากร",
        b: "ตัวกลางระหว่างผู้ใช้งานกับเครื่องคอมพิวเตอร์",
        c: "ควบคุมดูแลอุปกรณ์ต่างๆ",
        d: "จัดระเบียบในการติดต่อสื่อสาร",
        e: "ซ่อมบำรุงดูแลรักษาระบบ",
        correct: "e",
    },
    {
        question: "ข้อใดต่อไปนี้บอกความหมายของระบบปฏิบัติการได้ถูกต้องที่สุด",
        a: "ระบบที่ช่วยในการจัดการระเบียบในการติดต่อสื่อสารระหว่างเครือข่าย",
        b: "ระบบที่ช่วยในการจัดการระเบียบในการติดต่อสื่อสารระหว่างผู้ใช้กับเครื่องคอมพิวเตอร์",
        c: "ระบบที่ช่วยในการจัดการระเบียบในการทำงานของคอมพิวเตอร์",
        d: "ระบบที่ช่วยในการจัดการคอมพิวเตอร์",
        e: "จัดระเบียบและดูแลอุปกรณ์ต่างๆ ของคอมพิวเตอร์",
        correct: "b",
    },
    {
        question: "ระบบปฏิบัติการมีกี่ประเภท",
        a: "2 ประเภท",
        b: "3 ประเภท",
        c: "4 ประเภท",
        d: "5 ประเภท",
        e: "6 ประเภท",
        correct: "b",
    },
    {
        question: "ข้อใดต่อไปนี้ไม่ใช่ประเภทของ ระบบปฏิบัติการ",
        a: "ระบบปฏิบัติการแบบเดี่ยว",
        b: "ระบบปฏิบัติการแบบเครือข่าย",
        c: "ระบบปฏิบัติการแบบฝังตัว",
        d: "ระบบปฏิบัติการมือถือ",
        e: "ระบบปฏิบัติการแบบหลายผู้ใช้",
        correct: "e",
    },
    {
        question: "ระบบปฏิบัติการ Android จัดอยู่ในประเภทได้",
        a: "ระบบปฏิบัติการแบบเดียว",
        b: "ระบบปฏิบัติการแบบเครือข่าย",
        c: "ระบบปฏิบัติการแบบฝังตัว",
        d: "ระบบปฏิบัติการมือถือ",
        e: "ระบบปฏิบัติการแบบหลายผู้ใช้",
        correct: "d",
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