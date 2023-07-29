let todoItems = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'Finish Chapter 1',
  date: '2023/07/25'
}];
renderTodo();
function addTodo()
{
  const nameElm = document.querySelector('.js-name-input');
  const name = nameElm.value;
  const dateElm = document.querySelector('.js-date-input');
  const date = dateElm.value;
  todoItems.push(
    {
      // name: name,
      // date: date
      name, date //this line is the shortcut above
    }
  )
  renderTodo();
  nameElm.value = ''; 
  dateElm.value = ''; //it will clean the input after you add text and date into todo
  localStorage.setItem('todoList', JSON.stringify(todoItems));
}



function renderTodo()
{ 
  const todoArea = document.querySelector('.js-todo-list');
  todoArea.innerHTML = '';
  let todoHTML = '';
 todoItems.forEach((todo, i) =>
  {
    // const todo = todoItems[i];
    const html = `
      <div class="items">
        <div class="section name">
          ${todo.name}
        </div>
        <div class="section date"> 
          ${todo.date}
        </div>
        <button class="section del-btn" onclick="
          todoItems.splice(${i}, 1);
          renderTodo();
        ">Delete</button>
      </div>
    `
    todoHTML += html;
  })
    /*const todoItemArea = document.createElement('div');
    todoItemArea.setAttribute('class', 'items');
    const nameDiv = document.createElement('div');
    nameDiv.setAttribute('class', 'section name');
    nameDiv.innerText = todoItems[i].name;
    todoItemArea.appendChild(nameDiv);

    const dateDiv = document.createElement('div');
    dateDiv.setAttribute('class', 'section date');
    dateDiv.innerText = todoItems[i].date;
    todoItemArea.appendChild(dateDiv);

    const delBtn = document.createElement('button');
    delBtn.setAttribute('class', 'section del-btn');
    delBtn.innerText = 'Delete';
    // delBtn.onclick = delTodo(i);
    todoItemArea.appendChild(delBtn);

    todoArea.appendChild(todoItemArea);*/
  
  todoArea.innerHTML = todoHTML;
  console.log(todoItems);
}

// function delTodo(index)
// {
//   todoItems.splice(index, 1);
//   renderTodo();
// }
