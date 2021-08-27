/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
movieDB.movies.sort();

const displayedFilmsList = document.querySelector('.promo__interactive-list');
const favouriteCheckbox = document.querySelector('input[type="checkbox"]');

const addMovie = function(moviename){
    let movieToAdd = document.createElement('li');
    movieToAdd.innerText = moviename;
    movieToAdd.classList.add('promo__interactive-item');

    let deletIcon = document.createElement('div');
    deletIcon.classList.add('delete');
    deletIcon.addEventListener('click', deletLine);
    movieToAdd.appendChild(deletIcon);

    displayedFilmsList.appendChild(movieToAdd);
}

window.onload = function(){
    movieDB.movies.forEach(movie =>{
        addMovie(movie);
    });

}

let confirmBtn = document.querySelector('#btnConfirm');
let deleteButton = document.querySelectorAll('.delete');

let deletLine = function(event){
    let lineToRemove = event.target.parentElement;
    let filmToRemove = lineToRemove.textContent.trim();
    lineToRemove.remove();
    let filmIndex = movieDB.movies.indexOf(filmToRemove);
    movieDB.movies.splice(filmIndex, 1);
    console.log(movieDB.movies);
    
}

confirmBtn.addEventListener('click', function(event){
    event.preventDefault();
    let inputField = document.querySelector('.adding__input');
    let newFilmName = inputField.value;
    if (newFilmName.length > 21) {
        newFilmName = newFilmName.substring(0,21) + '...';
    }
    movieDB.movies.push(newFilmName);

    addMovie(newFilmName);

    if (favouriteCheckbox.checked) {
        console.log('Adding Favourite Movie');
    }
});

deleteButton.forEach(element => {
    element.addEventListener('click', deletLine);
});







