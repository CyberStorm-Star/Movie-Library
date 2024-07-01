// function Storage(){
           // ES6 öncesi
// }

class Storage {

    
static addFilmToStorage(newFilm){
     let films = this.getFilmFromStorage();

     films.push(newFilm); // bu sefer içine string değil obje yazmış oluyoruz

    // arrayı tekrar local storageye yazırmamız gerekiyor bunun içinde
    localStorage.setItem("films",JSON.stringify(films));
}

static getFilmFromStorage(){
    let films;

    if(localStorage.getItem("films") === null){
        films = [];  // yok ise boş bir array oluşturduk
    } else {   // var isede JSON.parse diyerek almış olduk
        films = JSON.parse(localStorage.getItem("films")); // string değerleri arraya çevirme ???
    }

    return films;
}


static deleteFilmFromStorage(filmTitle){
    let films = this.getFilmFromStorage();

    films.forEach(function(film,index){
        if(film.title === filmTitle){
            films.splice(index,1);
        }
    });
    localStorage.setItem("films",JSON.stringify(films))
}

static clearAllFilmsFromStorage(){
    localStorage.removeItem("films");
}
}

