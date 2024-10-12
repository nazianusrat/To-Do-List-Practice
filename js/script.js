// dom
let headInput = document.querySelector('.headInput');
let headbutton = document.querySelector('.headbutton');
let todo_list = document.querySelector('.todo_list');

// function part
headbutton.addEventListener('click', () => {
  if (headInput.value === '') {
    alert('Please write your list');
  } else {
    // create elements
    let single_todo = document.createElement('div');
    let single_todoInput = document.createElement('input');
    let checkbox = document.createElement('input');
    let edit = document.createElement('button');
    let remove = document.createElement('button');

    // append elements
    todo_list.appendChild(single_todo);
    single_todo.appendChild(checkbox); // Checkbox should be placed before the input
    single_todo.appendChild(single_todoInput);
    single_todo.appendChild(edit);
    single_todo.appendChild(remove);

    // class names
    single_todo.classList.add('single_todo');
    checkbox.classList.add('task-checkbox');
    edit.classList.add('edit');
    remove.classList.add('remove');

    // adding content
    edit.innerHTML = 'Edit';
    remove.innerHTML = 'Delete';

    // adding attributes
    checkbox.type = 'checkbox'; // Checkbox for completion
    single_todoInput.value = headInput.value;
    headInput.value = ''; // Clear input after adding
    single_todoInput.setAttribute('readonly', 'readonly');

    // checkbox event listener for marking task done
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        single_todoInput.style.textDecoration = 'line-through'; // Strike-through when checked
        blaskConfetti();
      } else {
        single_todoInput.style.textDecoration = 'none'; // Remove strike-through when unchecked
      }
      // You can call the progress function here once you implement it
      // updateProgress();
    });

    // deleting the task
    remove.addEventListener('click', () => {
      single_todo.remove();
      // You can call the progress function here once you implement it
      // updateProgress();
    });

    // editing the task
    edit.addEventListener('click', () => {
      if (edit.innerHTML === 'Edit') {
        single_todoInput.removeAttribute('readonly'); // Allow editing
        single_todoInput.focus(); // Focus the input for easier editing
        edit.innerHTML = 'Save'; // Change the button text to 'Save'
      } else {
        single_todoInput.setAttribute('readonly', 'readonly'); // Make input readonly again
        edit.innerHTML = 'Edit'; // Change the button text back to 'Edit'
      }
    });
  }
});






Animation

// if (tasks.length && completeTasks === totalTasks) {
//   blaskConfetti();
// }

const blaskConfetti = ()=> {
    const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}