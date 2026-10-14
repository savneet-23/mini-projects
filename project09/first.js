
const form = document.querySelector('#taskform');
const alltask = document.querySelector('#alltask');
const input = document.querySelector('#task');
const heading = document.querySelector('.tasks-section h2');

function updateCount() {
    const total = alltask.children.length;
    const completed = alltask.querySelectorAll(
        '.task-text.completed'
    ).length;

    heading.innerHTML =
        `Your tasks (${completed}/${total} done) <span>🌼</span>`;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = input.value.trim();

    if (text === '') return;

    const parent = document.createElement('div');
    parent.classList.add('task-item');

    const task = document.createElement('span');
    task.classList.add('task-text');
    task.textContent = text;

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.classList.add('task-btn', 'done-btn');
    doneButton.type = 'button';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('task-btn', 'delete-btn');
    deleteButton.type = 'button';

    parent.append(task, doneButton, deleteButton);
    alltask.append(parent);

    doneButton.addEventListener('click', () => {
        const completed = task.classList.toggle('completed');

        doneButton.textContent = completed ? 'Undo' : 'Done';

        updateCount();
    });

    deleteButton.addEventListener('click', () => {
        parent.remove();
        updateCount();
    });

    form.reset();
    input.focus();

    updateCount();
});
