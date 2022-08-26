/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
function addTask() {
  const btns = document.querySelectorAll('.add__btn'); // Кнопка add another card
  const addBtns = document.querySelectorAll('.add__item-btn'); // Кнопка add card под формой для заполнения
  const canselBtns = document.querySelectorAll('.cansel__item-btn'); // Кнопка крестик
  // const textareas = document.querySelectorAll('.textarea');  // поле для заполнения

  let value;

  for (let i = 0; i < btns.length; i++) {
    const changedBtn = btns[i];
    changedBtn.addEventListener('click', (e) => {
      changedBtn.style.display = 'none';
      console.log('working');
      const form = e.target.closest('.boards__item').querySelector('.form'); // Поднялся до ближ.общего предка и нашёл нужный элемент
      form.style.display = 'block';
    });

    for (let a = 0; a < canselBtns.length; a++) {
      const changedCanselBtn = canselBtns[a];
      changedCanselBtn.addEventListener('click', (e) => {
        const textarea = e.target.closest('.form');
        textarea.value = '';
        value = '';
        const form = e.target.closest('.boards__item').querySelector('.form');
        form.style.display = 'none';
        changedBtn.style.display = 'block';
      });
    }

    for (b = 0; b < addBtns.length; b++) {
      const changedAddBtn = addBtns[b];
      // Кликая по кнопке Add Card должна создаться карточка
      changedAddBtn.addEventListener('click', (e) => {
        const newItem = document.createElement('div');
        newItem.classList.add('list__item');
        newItem.draggable = true;
        const textarea = e.target.closest('.form');
        // eslint-disable-next-line no-shadow
        textarea.addEventListener('input', (e) => {
          value = e.target.value;
        });
        newItem.textContent = value;
        const lists = document.querySelectorAll('.list');
        lists[0].append(newItem);

        // перед закрытием формы она должна очиститься
        textarea.value = '';
        value = '';
        const form = e.target.closest('.boards__item').querySelector('.form');
        form.style.display = 'none';
        changedBtn.style.display = 'block';
      });
    }
  }
}
addTask();
