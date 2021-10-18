const movie= {
    title:"Black Death",
    duration: 140,
    stars: [ 'PUff','Jackie','Living Sneezese']
}
for(let i=0 ; i < movie.stars.length;i++){
console.log(movie.title + " lasts for " + movie.duration + " minutes " + "Stars: " + movie.stars.join(',,'));
}
