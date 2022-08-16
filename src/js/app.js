const lists = document.querySelectorAll('.list');

function addTask() {
  const btn = document.querySelector('.add__btn'); // Кнопка add another card
  const addBtn = document.querySelector('.add__item-btn'); // Кнопка add card под формой для заполнения
  const canselBtn = document.querySelector('.cansel__item-btn'); // Кнопка крестик
  const textarea = document.querySelector('.textarea'); // поле для заполнения
  const form = document.querySelector('.form');

  let value;

  btn.addEventListener('click', () => {
    form.style.display = 'block';
    btn.style.display = 'none';
    textarea.addEventListener('input', (e) => {
      value = e.target.value;
    });
  });

  canselBtn.addEventListener('click', () => {
    textarea.value = '';
    value = '';
    form.style.display = 'none';
    btn.style.display = 'block';
  });

  addBtn.addEventListener('click', () => {
    const newItem = document.createElement('div');
    newItem.classList.add('list__item');
    newItem.draggable = true;
    newItem.textContent = value;
    lists[0].append(newItem);

    textarea.value = '';
    value = '';
    form.style.display = 'none';
    btn.style.display = 'block';
  });
}
addTask();

// let draggedItem = null;

// function dragNdrop() {
//   const listItems = document.querySelectorAll('.list__item');
//   const lists = document.querySelectorAll('.list');

//   // eslint-disable-next-line no-plusplus
//   for (let i = 0; i < listItems.length; i++) {
//     const item = listItems[i];

//     item.addEventListener('dragstart', () => {
//       draggedItem = item;
//       setTimeout(() => {
//         item.style.display = 'none';
//       }, 0);
//     });

//     item.addEventListener('dragend', () => {
//       setTimeout(() => {
//         item.style.display = 'block';
//         draggedItem = null;
//       }, 0);
//     });
//   }

//   for (let j = 0; j < lists.length; j++) {
//     const list = lists[j];

//     list.addEventListener('dragover', (e) => e.preventDefault());

//     list.addEventListener('dragenter', function (e) {
//       e.preventDefault();
//       this.style.backgroundColor = '#a19f9f';
//     });

//     list.addEventListener('dragleave', function (e) {
//       this.style.backgroundColor = '#c0c0c0';
//     });

//     list.addEventListener('drop', function (e) {
//       this.style.backgroundColor = '#c0c0c0';
//       this.append(draggedItem);
//     });
//   }
// }
// dragNdrop();
