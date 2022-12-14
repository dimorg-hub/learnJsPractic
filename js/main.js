let numbersOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt('Один из просмотренных фильмов?', '');
let b = prompt('На сколько вы его оцените?', '');
let c = prompt('Один из просмотренных фильмов?', '');
let d = prompt('На сколько вы его оцените?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);