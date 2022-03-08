const quizData = [
    {
        question: "ยูทิลิตี้แบ่งเป็น 2 ประเภทอะไรบ้าง",
        a: "ยูทิลิตี้สำหรับระบบปฏิบัติการกับยูทิลิตี้อื่นๆ",
        b: "ยูทิลิตี้สำหรับระบบปฏิบัติการกับยูทิลิตี้ความปลอดภัยของระบบ",
        c: "ยูทิลิตี้ด้านความปลอดภัยของระบบ กับยูทิลิตี้ด้านความบันเทิง",
        d: "ยูทิลิตี้ด้านความบันเทิงกับยูทิลิตี้สำหรับระบบปฏิบัติการ",
        e: "ยูทิลิตี้ด้านความปลอดภัยของระบบกับยูทิลิตี้อื่นๆ",
        correct: "a",
    },
    {
        question: "ข้อใดคือหน้าที่ของโปรแกรม Defragment and Optimize Drives",
        a: "ลบไฟล์ขยะที่ไม่จำเป็น",
        b: "ตรวจสอบข้อมูลของระบบ",
        c: "จัดพื้นที่ของข้อมูลภายในฮาร์ดดิสก์ให้เป็นระเบียบ",
        d: "ตรวจสอบและซ่อมบำรุงรักษาฮาร์ดดิสก์",
        e: "ถูกทุกข้อ",
        correct: "c",
    },
    {
        question: "ข้อใดต่อไปนี้คือหน้าที่ของโปรแกรม Error Checking",
        a: "ตรวจสอบขนาดความจุของฮาร์ดดิสก์",
        b: "ลบไฟล์ขยะที่ไม่จำเป้น",
        c: "ตรวจสอบข้อมูลของระบบ",
        d: "จัดพื้นที่ของข้อมูลภายในฮาร์ดดิสก์ให้เป็นระเบียบ",
        e: "ตรวจสอบและซ่อมบำรุงรักษาฮาร์ดดิสก์",
        correct: "c",
    },
    {
        question: "ข้อใดต่อไปนี้ไม่ใช่โปรแกรมในประเภทยูทิลิตี้อื่นๆ",
        a: "Fire Wall",
        b: "Antivirus",
        c: "Zip",
        d: "Winamp",
        e: "Microsoft Security Essentials",
        correct: "a",
    },
    {
        question: "ข้อใดไม่ใช่ความสามารถของโปรแกรม PhotoScape",
        a: "รวมจัดเรียงรูปภาพ",
        b: "แก้ใขปรับแต่งสีรูปภาพ",
        c: "ย่อขยายขนาดรูปภาพ",
        d: "ทำภาพเคลื่อนไหว",
        e: "สร้างไฟล์วิดีโอ",
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