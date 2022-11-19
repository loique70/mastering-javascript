let todos = [
    {title:'Get loique pack course',
      dueDate:"2022-01-10",
      id:'id1'
    },
    {title:'Talk me about you',
      dueDate:"2002-04-10",
      id:'id2'
    },
        {title:'Are you maried or not?',
        dueDate:"2022-02-09",
        id:'id3'
    },
    {title:'Are you maried or not?',
    dueDate:"2022-03-10",
    id:'id4'
    },
    ]

render()

function addTodo(){
    const getInput = document.getElementById('todo-title');
    const datePicker = document.getElementById('date-picker')

    const title = getInput.value;
    const dueDate = datePicker.value
    const id  = '' + new Date().getTime()

    todos.push({
        title:title,
        dueDate: dueDate,
        id:id
    })

    render()
}

function deleTodo(event){
    const deleteButton = event.target
    const idToDelete = deleteButton.id

    todos = todos.filter(function(todo){
        if(todo.id === idToDelete){
            return false
        } else{
            return true
        }
    })

    render()
}

function render(){
    document.getElementById('todo-list').innerText = ''
    todos.map((todo) => {
        const element = document.createElement('div')
        element.innerText = `${todo.title}  ${todo.dueDate}`

        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'Delete'
        element.appendChild(deleteButton)
        deleteButton.style = 'margin-left: 12px'
        deleteButton.onclick = deleTodo
        deleteButton.id = todo.id

        const todoList = document.getElementById('todo-list')
        todoList.appendChild(element)
    })
}