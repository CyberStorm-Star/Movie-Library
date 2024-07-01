
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films")


// // UI Objesini Başlatma

// const ui = new UI();
                                        // OBjeleri üretmemize gerek kalmadı çünkü statik fonksiyon şekilde yazdık
// // Storage Objesi Üret

// const storage = new Storage();

// Tüm eventleri yükleme

addEventListener();

function addEventListener(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmFromStorage();
        UI.loadAllFilms(films);   // ES6 öncesi UI yi ui olarak tanımlayıp kullanmıştık şimdi direk olarak UI yı kullanabiliyoruz
    });

    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms)
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;


    if (title === "" || director === "" || url === ""){
        // Hata mesajı - bilgilendirme mesajları
        UI.displayMessages("Tüm alanları doldurunuz....","danger");


    } else {
        // Yeni film
        const newFilm = new Film(title,director,url);

        UI.addFilmToUI(newFilm); // Arayüze film ekleme
        Storage.addFilmToStorage(newFilm); // Storage'a film ekleme
        UI.displayMessages("Film başarı ile eklendi...","success")
    }





    UI.clearInputs(titleElement,urlElement,directorElement); // Ara yüzdeki Film İsmi ve diğerlerini film ekledikten sonra silinmesini sağlıyor


    e.preventDefault();
}


function deleteFilm(e){
    
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        UI.displayMessages("Silme işlemi başarılı...","success")
    }
}

function clearAllFilms(){

    if(confirm("Emin misiniz?")){    // soru onaylanırsa silme işlemi gerçekleşecek 
    UI.clearAllFilmsFromUI()
    Storage.clearAllFilmsFromStorage()
}
    
}

