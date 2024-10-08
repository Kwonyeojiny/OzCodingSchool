//const dayjs = require('dayjs')
import dayjs from "dayjs"


const now = dayjs();
console.log(now.toString())

console.log(now.format())
console.log(now.format("YYYY-MM-DD")) // 사용자 정의 형식
console.log(now.format("YYYY년 MM월 DD일")) // 한글 형식

const date1 = dayjs('2023-10-08')
const date2 = dayjs('2024-10-08')

console.log(date2.diff(date1, "day")) // 일 단위 처리
console.log(date2.diff(date1, "month")) // 월 단위 처리