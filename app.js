//? Selectors

const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")


//?Sonuç tablasu

const gelirinizTd = document.getElementById("geliriniz")

//? harcama formu
const harcamaFormu = document.getElementById("harcama-formu")
const harcamaAlaniInput = document.getElementById("harcama-alani")
const tarihInput = document.getElementById("tarih")
const miktarInput = document.getElementById("miktar")



//? harcama Tablosu

const harcamaBody = document.getElementById("harcama-body")

//? Variables
let gelirler = 0

let harcamaListesi = []
//? Events

//* formun submit butonuna basildiğinda
ekleFormu.addEventListener("submit", (e) => {
    e.preventDefault() //?reload ı engeller
gelirler = gelirler +  Number(gelirInput.value) //? string eklemeyi engelledik


localStorage.setItem("gelirler", gelirler) //?gelirlerin kalıcı olması için local stroge yazdırdık.


ekleFormu.reset() //?input değerini sıfırladık

hesaplaVeGuncelle() //?değişiklikleri sonuç tablosuna DOM a basan a yazan fonk
})


//? sayfa her yuklendikten sonra çalışan event
window.addEventListener("load", () => {

    //?gelirler bilgisini local stroge dan okuyarak global değişkenimize yaz
    gelirler = Number(localStorage.getItem("gelirler"))

    //? local stroge dan harcama listesini okuyarak global değişkenimize yazıyoruz
harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || []


//? harcama dizisinin icindeki objleri tek tek DOM a yazıyor
harcamaListesi.forEach((harcama) => harcamayiDomaYaz(harcama))


console.log(harcamaListesi);

   tarihInput.valueAsDate = new Date()
    hesaplaVeGuncelle()
})


//! harcama formu submit edildiğinde çalışır.
harcamaFormu.addEventListener("submit", (e)=> {
e.preventDefault()


//? yeni harcama bilgileri ile obje oluştur
const yeniHarcama = { id:new Date().getTime(), //? sistem  saatini ms olarak verir.unique gibidir
     tarih: tarihInput.value,
      alan: harcamaAlaniInput.value,
       miktar: miktarInput.value }

//? yeni harcama objesini diziye ekle
harcamaListesi.push(yeniHarcama)

//? dizinin son halini localStorege gönderiyoruz
localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))


harcamayiDomaYaz(yeniHarcama)

harcamaFormu.reset()
tarihInput.valueAsDate = new Date()


})



//

//? Functions

const hesaplaVeGuncelle = () => {
gelirinizTd.innerText = gelirler
}

const harcamayiDomaYaz = ({id, miktar, tarih, alan}) => {
// const {id, miktar, tarih, alan } = yeniHarcama
harcamaBody.innerHTML+= `
<tr>
<td>${tarih}</td>
<td>${alan}</td>
<td>${miktar}</td>
<td><i id=${id} class="fa-solid fa-trash-can text-danger" type="button"></i></td>
</tr> 
`
}


harcamaBody.addEventListener("click", (e) => {
    console.log(e.target)
})