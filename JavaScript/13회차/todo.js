// 요소 선택 및 배열 선언
const todoList = document.getElementById('todo-list')
const todoForm = document.getElementById('todo-form')
let todoArr = []

// 로컬 저장소에 저장하기
function saveTodos(){
    const todoString = JSON.stringify(todoArr)
    localStorage.setItem("myTodos", todoString)
}

// 로컬 저장소에서 가져오기
function loadTodos(){
    const myTodos = localStorage.getItem("myTodos")
    if(myTodos !== null){ // mytodo가 null 아닐때만 해주면 됨
        todoArr = JSON.parse(myTodos)
        displayTodos()
    }
    
}
loadTodos() // 서버 열렸을때 한번만 해주면 됨

// 할일 삭제하기
function handleTodoDelBtnClick(clickId){
    todoArr = todoArr.filter(function(aTodo){
        return aTodo.todoId !== clickId
    })
    displayTodos()
    saveTodos()
}

// 할일 수정하기
function handleTodoItemClick(clickId){
    todoArr = todoArr.map(function(aTodo){
        if(aTodo.todoId === clickId){
            return {...aTodo, todoDone: !aTodo.todoDone}
        }
        else return aTodo
    })
    displayTodos() // 할일 완료 여부 체크 후 다시 출력
    saveTodos()
}

// 할일 보여주기
function displayTodos(){
    todoList.innerHTML = ""
    todoArr.forEach(function(aTodo){
        const todoItem = document.createElement('li')
        const todoDelBtn = document.createElement('span')

        todoItem.textContent = aTodo.todoText
        todoDelBtn.textContent = ' 💩'
        
        // 할일 완료 여부에 따른 클래스 이름 설정
        if(aTodo.todoDone) todoItem.classList.add('done') 
        else todoItem.classList.add('yet')
        
        todoItem.title = "클릭하면 완료"
        todoItem.addEventListener("click",function(){
            handleTodoItemClick(aTodo.todoId)
        })

        todoDelBtn.title = "클릭하면 삭제"
        todoDelBtn.addEventListener('click',function(){
            handleTodoDelBtnClick(aTodo.todoId)
        })

        todoList.appendChild(todoItem)
        todoItem.appendChild(todoDelBtn)
    })
}


// 할일 추가하기
todoForm.addEventListener("submit", function(e){
    e.preventDefault() // 새로고침 금지
    const toBeAdded = {
        todoText : todoForm.todo.value,
        todoId : new Date().getTime(),
        todoDone : false
    }
    todoForm.todo.value = "" // 할일 input 초기화
    todoArr.push(toBeAdded) // 배열에 할일 추가
    displayTodos() // 화면에 출력
    saveTodos() // 로컬스토리지 저장
})

