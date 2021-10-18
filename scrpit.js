//- Create an object to store the following information about your favorite movie: title (a string), 
//duration (a number), and stars (an array of strings).

const movie = [
    {title: "Good girls" ,
    duration: 89,
    stars: ["Elizabeth"," Ruby"]},
    {title: "Benjamin" ,
    duration: 166,
    stars: ["Mike"," Tizzy"]}
    ]


  for (let i = 0; i < movie.length; i++){
      console.log(movie[i].title+" lasts for "+movie[i].duration+" minutes. Stars: " + movie[i].stars);

  }

  



