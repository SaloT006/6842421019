function createQR(){

let amount = document.getElementById("amount").value

let phone = "0812345678"

let qr = `https://promptpay.io/${phone}/${amount}.png`

document.getElementById("qr").src = qr

}