//? Selectors

const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")


//?Sonuç tablasu

const gelirinizTd = document.getElementById("geliriniz")


//? Variables
let gelirler = 0


//? Events

//* formun submit butonuna basildiğinda
ekleFormu.addEventListener("submit", (e) => {
    e.preventDefault() //?reload ı engeller
gelirler = gelirler +  Number(gelirInput.value) //? string eklemeyi engelledik


ekleFormu.reset() //?input değerini sıfırladık

hesaplaVeGuncelle() //?değişiklikleri DOM a yazan fonk
})

//? Functions

const hesaplaVeGuncelle = () => {
gelirinizTd.innerText = gelirler
}