const inputValue = document.querySelector('#task')
const buttonAddTask = document.querySelector('#addTask')


buttonAddTask.addEventListener('click', (event) => {
    event.preventDefault()
    const listOfTasks = document.querySelector('#listOfTasks')
    const content = document.createElement('div')
    content.classList.add('content')

    const newContent = document.createElement('div')
    const botao = document.createElement('button')
    newContent.classList.add('tarefa')
    botao.classList.add('Nbutton')
    
    newContent.innerText = inputValue.value
    botao.innerText = 'X'
    
    content.classList.add('styleContent')
    content.appendChild(newContent)
    content.appendChild(botao)

    listOfTasks.appendChild(content)

    newContent.addEventListener('click', (event) => {
        newContent.classList.add('done')
    })

    botao.addEventListener('click', (event) => {
        content.removeChild(newContent)
        content.removeChild(botao)
        content.style.margin = 0
    })

    inputValue.value = ''
})


