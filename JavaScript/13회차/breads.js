const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42"
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all"

const request1 = new XMLHttpRequest()
const request2 = new XMLHttpRequest()

const header = document.getElementById('header')
const main = document.getElementById('main')
const input = document.getElementById('filter-text')
const button = document.getElementById('filter-button')
const select = document.getElementById('filter-select')
const reset = document.getElementById('filter-reset')

const more = document.getElementById('more')
const tothetop = document.getElementById('tothetop')

const currentDogs = []

function displayDogs(item){
    const dogImgDiv = document.createElement('div')
    dogImgDiv.classList.add('flex-item')
    dogImgDiv.innerHTML = `<img src = ${item}>`
    main.appendChild(dogImgDiv)
}

// location.reload() 사용해서 more랑 reset 문제점 해결가능!!


// 처음 load
window.addEventListener('load', function(){
    // 강아지 사진 뿌리기
    request1.open('get',apiRandomDogs)
    request1.addEventListener('load',function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(item){
            currentDogs.push(item)
            displayDogs(item)
        })
    })
    request1.send()

    // 셀렉트에 견종 정보 뿌리기
    request2.open('get',apiAllBreeds)
    request2.addEventListener('load',function(){
        const response = JSON.parse(request2.response)
        Object.keys(response.message).forEach(function(item){
            const option = document.createElement('option')
            option.textContent = item
            option.value = item
            select.appendChild(option)
        })
    })
    request2.send()
})

more.addEventListener('click', function(){
    request1.open('get',apiRandomDogs)
    request1.send()
})

tothetop.addEventListener('click',function(){
    window.scrollTo({top:0}) // scrollTo : 주어진 위치로 스크롤 이동
})

// 검색
button.addEventListener('click',function(){
    main.innerHTML = ''
    let filteredDogs = currentDogs.filter(function(item){
        return item.indexOf(input.value) !== -1
    })

    input.value = ''

    filteredDogs.forEach(function(item){
        displayDogs(item)
    })
})
// 품종 셀렉
select.addEventListener('change',function(){
    main.innerHTML = ''
    let filteredDogs = currentDogs.filter(function(item){
        return item.indexOf(select.value) !== -1
    })

    filteredDogs.forEach(function(item){
        displayDogs(item)
    })
})

// 프로젝트 과제
// 견종 고르는 셀렉트 옆에 버튼 하나 추가
// 버튼에는 '리셋'이라 씀
// 해당 버튼을 누르면 강아지 42마리의 소스를 새롭게 요청해 받아옴
// 기존에 뿌려져 있던 강아지는 모두 사라지고, 새로운 강아지 42마리로 채워짐

reset.addEventListener('click', function() {
    main.innerHTML = ''
    currentDogs.length = 0

    request1.open('get', apiRandomDogs)
    request1.send()
})