

// function UI() {

// }


class UI {




static addFilmToUI(newFilm) {    //ES6 olmadan önce UI.prototype kullanırdık

    // !-- <tr>
    //  <td><img src="" class="img-fluid img-thumbnail"></td>
    {/* <td></td> */ }
    {/* <td></td> */ }
    {/* <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td> */ }
    {/* </tr> --> */ }



    const filmList = document.getElementById("films");
    // içindeki bilgileri silmek değilde eklemek istediğimiz için += kullanıyoruz
    filmList.innerHTML += `

 
    <tr>
         <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
         <td>${newFilm.title}</td>
         <td>${newFilm.director}</td>
         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>

`
}

static clearInputs(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";

} 

static displayMessages(message,type){
    const cardBody = document.querySelectorAll(".card-body")[0];   // hata mesajı için 0. indexdeki card-body clasını seçtik

    const div = document.createElement("div");

    div.className = ` alert alert-${type}`;  // danger ise alert danger , succes ise alert succes olacak

    div.textContent = message;
    cardBody.appendChild(div);  // cardBody'e ekleme 


    setTimeout(function(){
        div.remove();  // kısaca 1 sn sonra, eklenmiş olan div kaldırılacak
    },1000);    // 1000 milisaniye = 1 saniye sonra çalışacak


}


static loadAllFilms(films){
    const filmList = document.getElementById("films");

    films.forEach(function(film){
        filmList.innerHTML += `
        <tr>
         <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
         <td>${film.title}</td>
         <td>${film.director}</td>
         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
    `
    });


}

static deleteFilmFromUI(element){
    element.parentElement.parentElement.remove();
}

static clearAllFilmsFromUI(){
    const filmList = document.getElementById("films");

    // FilmList.innerHTML = "";

    while(filmList.firstElementChild !== null){  // Child olduğu sürece
        filmList.firstElementChild.remove();  // böylece UI en kaldırmış olduk
    }
}




}


