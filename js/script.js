
let product = {
    name:"olma",
    price: 5000,
    brutto: 20,
};


let buyer = {
    netto: 0,
    pay:0,
};
// let elemen = document.getElementsByClassName("elem");
// let k=0

// console.log(elemen);

function buy() {
    
    if (product.brutto ===0){
        alert("uzr maxsulot qolmadi")
    } else{
        buyer.netto += 1;
        product.brutto -= 1;
        buyer.pay = buyer.netto * product.price;
        document.getElementById("myProduct").innerText = "Продукты___кг----" + buyer.netto;
        document.getElementById("myProductPrice").innerText = "Цена__сум_----" + buyer.pay
        document.getElementById("ring1").innerText = buyer.netto;
        document.getElementById("ring").innerText=product.brutto;
        // k+=1

        // let img = document.getElementsByClassName("elem").classList.remove("elem")
        // console.log(img)
        // img = img.classList.add(k)
    }    
};

function Return() {
    if (buyer.netto ===0){
        alert("Sizda qaytariladigan maxsulot qolmadi")
    } else{
        buyer.netto -=1;
        // product.brutto -=5000;
        product.brutto+=1;
        buyer.pay = buyer.pay - product.price
        document.getElementById("myProduct").innerText = "Продукты___кг----" + buyer.netto;
        document.getElementById("myProductPrice").innerText = "Цена__сум_----" + buyer.pay
        document.getElementById("ring1").innerText = buyer.netto
        document.getElementById("ring").innerText = product.brutto;
        // document.getElementById("ring").innerText = ;
    }
    
}