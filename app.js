window.addEventListener('load',()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    const inputEl = document.querySelector('.inputEl');
    const formSubmit = document.querySelector('#main-form-submit');
    
    formSubmit.addEventListener('submit', e => {
        e.preventDefault();

        const todo = {
            custome: inputEl.value,
            done: false,
            catugary: new Date().getTime()
        }
        todos.push(todo)
        localStorage.setItem('todos', JSON.stringify(todos));

        e.target.reset()

        DisplayTodo();
    })
    DisplayTodo();
})

function DisplayTodo() {
    const todoList = document.querySelector('.main');
    todoList.innerHTML = '';
    
    
    todos.forEach( todo => {
        const divA = document.createElement('div');
        divA.classList.add('main-section');
        
        const inputSe = document.createElement('input');
        inputSe.classList.add('inputSe');
        
        const divB = document.createElement('div');
        divB.classList.add('buttons');
        
        const btnA = document.createElement('button');
        btnA.classList.add('edit');
        btnA.innerHTML = 'Edit';
        const btnB = document.createElement('button');
        btnB.classList.add('delete');
        btnB.innerHTML = 'Delete';
        
        const input = document.createElement('input');
        input.classList.add('inputSe');
        input.setAttribute('readonly', 'readonly');
        input.value = `${todo.custome}`
        divA.appendChild(input)
        
        
        divA.appendChild(divB);
        divB.appendChild(btnA);
        divB.appendChild(btnB);
        todoList.appendChild(divA);
        
        btnA.addEventListener('click',()=> {
                const container = todoList.querySelector('input')
                console.log(container)
                if(btnA.innerText.toLowerCase() == 'edit') {
                    input.removeAttribute('readonly');
                    input.focus();
                    btnA.innerText = 'Save';
                    input.value = `${todo.custome}`

                    
                } else {
                    input.setAttribute('readonly', 'readonly');
                    btnA.innerText = 'Edit';
                }
            })

            btnB.addEventListener('click',()=> {
                todoList.removeChild(divA);
                localStorage.removeItem('todos');

            })
    })
}