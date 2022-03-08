const quizData = [
    {
        question: "ในระบบปฏิบัติการ Windows ส่วนประกอบใดเป็นแถบที่ใช้แสดงถึงโปรแกรมที่เรียกใช้งานอยู่ในปัจจุบัน",
        a: "Desktop",
        b: "icon",
        c: "Tool Bar",
        d: "Title Bar",
        e: "Taskbar",
        correct: "e",
    },
    {
        question: "ข้อใดเป็นการปิดหน้าต่างโปรแกรมการใช้งานแบบปุ่มลัด",
        a: "Alt + F1",
        b: "Alt + F4",
        c: "Alt + Shift",
        d: "Alt + Tab",
        e: "Alt + Del",
        correct: "b",
    },
    {
        question: "โปรแกรมการใช้งานจะอยู่ที่ใดเมื่อคลิกปุ่มย่อหน้าต่างของโปรแกรม",
        a: "Desktop",
        b: "Taskbar",
        c: "Tool Bar",
        d: "Title Bar",
        e: "Charm Bar",
        correct: "b",
    },
    {
        question: "ข้อใดเป็นการสลับหน้าต่างโปรแกรมการใช้งานแบบปุ่มลัด",
        a: "Alt + Tab",
        b: "Shift + Tab",
        c: "Ctrl + Tab",
        d: "Alt + Shift + Tab",
        e: "Alt + Ctrl + Tab",
        correct: "a",
    },
    {
        question: "โปรแกรมที่ใช้สําหรับจัดการแฟ้มข้อมูลของระบบปฏิบัติการ วินโดวส์คือข้อใด",
        a: "Windows Explorer",
        b: "File Manager",
        c: "System Tools",
        d: "My Computer",
        e: "ไม่มีข้อใดถูก",
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