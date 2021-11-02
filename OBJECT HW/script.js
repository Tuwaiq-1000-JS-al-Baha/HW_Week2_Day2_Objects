const movie = {

    titel: "YOU",
    duration: 2.5,
    stars: [
        { name: "Doty", age: 32, numberofhisMOV: 4 },
        { name: "laf", age: 30, numberofhisMOV: 3 }]

}





for (let i = 0; i < movie.stars.length; i++) {
    console.log(movie.titel + " lasts for " + movie.duration +
        "minutes" + "Stars:" + movie.stars[i].name)
}