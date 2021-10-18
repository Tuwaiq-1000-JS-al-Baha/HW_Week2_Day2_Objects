const favoriteMovie = {
    title: 'The born a king',
    duration: 30,
    stars: ['edd' , 'lorans' , 'roben' , 'james']
    
}
console.log(favoriteMovie.title + ' lasts for ' + favoriteMovie.duration + ' minutes ' + 'stars: ' + favoriteMovie.stars);
function PrintFavMovie(infMov){
    console.log(infMov.title + ' lasts for ' + infMov.duration + ' minutes.' + 'Stars' + infMov.stars.join(','));
    
}
PrintFavMovie(favoriteMovie)


