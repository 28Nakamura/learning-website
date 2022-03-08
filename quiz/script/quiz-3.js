const quizData = [
    {
        question: "ระบบปฏิบัติการตอส (DOS) ย่อมาจากคําใด",
        a: "Disk Office System",
        b: "Distribute Operating System",
        c: "Disk Operating System",
        d: "Disk Office Supervisor",
        e: "Disk Opening System",
        correct: "b",
    },
    {
        question: "คำสั่ง DEL ในระบบปฏิบัติการดอสหมายถึงอะไร",
        a: "ลบไฟล์ และแฟ้มข้อมูลในไดเร็กทอรี",
        b: "สร้างไฟล์ในไดเร็กทอรี",
        c: "ลบไดเร็กทอรี",
        d: "ย้ายไฟล์ไปยังไดเร็กทอรีอื่น",
        e: "ล้างหน้าจอ",
        correct: "a",
    },
    {
        question: "ชนิดคําสั่งดอสในข้อใดคือคําสั่งภายใน",
        a: "FORMAT",
        b: "DELTREE",
        c: "COPY",
        d: "DISKCOPY",
        e: "DIR",
        correct: "e",
    },
    {
        question: "คําสั่งภายในของระบบปฏิบัติการดอสจะถูก เก็บไว้ที่แฟ้มข้อมูลใด",
        a: "IO.SYS",
        b: "FORMAT.COM",
        c: "MSDOS.SYS",
        d: "Boot Record",
        e: "COMMAND.COM",
        correct: "e",
    },
    {
        question: "คําสั่งดอสในข้อใดคือคําสั่งภายนอก",
        a: "FORMAT",
        b: "DEL",
        c: "CLS",
        d: "DIR",
        e: "COPY",
        correct: "a",
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