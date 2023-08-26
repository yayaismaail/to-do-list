// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';

const toDoArr = [{
  description: 'wash the dishes',
  completed: false,
  index: 0,
},
{
  description: 'take out the trash',
  completed: false,
  index: 1,
},
{
  description: 'take shower',
  completed: false,
  index: 2,
},
{
  description: 'complete To Do list project',
  completed: false,
  index: 3,
},
];

const container = document.querySelector('.task-container');

let html = '';

toDoArr.forEach((task) => {
  html += `
        <div class="item-lists">
            <input type="checkbox" id="${task.index}" class="check">
            <p class="task txt-color">${task.description}</p>
            <i class="fa-solid fa-ellipsis-vertical silver-icons fa-2x icon-position"></i>
        </div>`;
});

container.innerHTML = html;
