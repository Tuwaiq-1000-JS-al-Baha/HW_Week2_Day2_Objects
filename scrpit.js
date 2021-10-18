const store ={
    title :"LOST",
    seasons:6,
    episodes:"25,22,14",
    duration1:37,
    duration2:42,
    
   
}

const stars=[' Jorge Garcia ', ' Harold Perinau  ', ' Maggie Grace', '  Dominic Monaghan ', ' Evangeline Lilly '];

console.log("Puff the "+store.title+" Number of seasons "+store.seasons+" Seasons "+ " Each season has the number of episodes between "+store.episodes+ " Episode "+" Each episode lasts about "+store.duration1+" to "+store.duration2+ " Minutes "+" Stars "+stars.join('-'));
