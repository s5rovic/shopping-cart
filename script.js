let allTotal = 0; //pocetna vrednost za placanje

function addToCart(element) {
    let mainEl = element.closest('.single-item'); //selektovanje elementa na osnovu klase
    let price = mainEl.querySelector('.price').innerText; //selektovanje cene iz htmla na osnovu klase
    let name = mainEl.querySelector('h3').innerText;// selektovanje naziva artikla iz HTMLa na osnovu taga
    let quantity = mainEl.querySelector('input').value; //selektovanje kolicine iz HTMLa na osnovu klase
    let cartItems = document.querySelector('.cart-items'); //selektovanje artikla iz HTMLa na osnovu klase
    /*
    Da bi odradili racunske operacije mnozenja kolicine artikala sa cenom artikala
    potrebno je pretvoriti stringove u integere kao üto je ura#eno ispod.
    */


    if (parseInt(quantity) > 0) { //pretvaranje kolicine u integer
        price = parseInt(price); //pretvaranje cene u integer
        //  quantity = parseInt(quantity); //
        let ukupno = price * quantity;

        allTotal += ukupno;
        // Ubacivanje HTML koda kroz JS
        cartItems.innerHTML += `<div class="cart-single-item">
                                <h3>${name}</h3>
                                <p>${price} x ${quantity} = <span>${ukupno}</span> din.</p>
                                <button onclick="removeFromCart(this)" class="remove-item">Izbaci</button>
        
                               </div>`;

        document.querySelector('.total').innerText = `Za placanje: ${allTotal} din.`;

        element.innerText = 'Ubaceno';
    } else {
        alert('Ako zelite da dodate ovaj proizvod, kolicina ne moze biti 0'); //Upozorenje ako korisnik ne izabere kolicinu
    }

}
//Funkcija za dugme "Izbaci" kako bi korisnik mogao da izbaci artikal iz korpe i da resetuje kolicinu na 0
function removeFromCart(element) {
    let mainEl = element.closest('.cart-single-item');
    let price = mainEl.querySelector('p span').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let namirnice = document.querySelectorAll('.single-item');
    price = parseInt(price);
    allTotal -= price;
    document.querySelector('.total').innerText = `Za placanje: ${allTotal} din.`;
    mainEl.remove();
    namirnice.forEach(function (nam) {
        let itemName = nam.querySelector('.si-content h3').innerText;
        if (itemName === name) {
            nam.querySelector('.actions input').value = 0;
            nam.querySelector('.actions button').removeAttribute('disabled');
            nam.querySelector('.actions button').innerText = 'Ubaci'

        }

        // console.log(nam);
    })

}