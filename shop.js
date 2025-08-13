let moneyhave = document.getElementById("urmoney");
let coo = document.getElementById("coo");
let doo = document.getElementById("doo");
let bii = document.getElementById("bii");
let bunn = document.getElementById("bunn");

let money = 100;
let co = 0;
let docount = 0;
let bi = 0;
let bun = 0;

function showNotEnoughMoney() {
  let oldText = `so tien cua ban: ${money}$`;
  let oldColor = "rgb(0, 255, 0)";

  moneyhave.textContent = "Không đủ tiền!";
  moneyhave.style.color = "red";

  setTimeout(() => {
    moneyhave.textContent = oldText;
    moneyhave.style.color = oldColor;
  }, 2000);
}

function kiemtien(){
  money += 2;
  moneyhave.textContent = `so tien cua ban: ${money}$`;
}

function hangthu1(){
  if (money >= 1) {
    money -= 1;
    moneyhave.textContent = `so tien cua ban: ${money}$`;
    moneyhave.style.color = "rgb(0, 255, 0)";

    co++;
    coo.textContent = `Co: ${co}`;
  } else {
    showNotEnoughMoney();
  }
}

function hangthu2(){
  if (money >= 5) {
    money -= 5;
    moneyhave.textContent = `so tien cua ban: ${money}$`;
    moneyhave.style.color = "rgb(0, 255, 0)";

    docount++;
    doo.textContent = `Do: ${docount}`;
  } else {
    showNotEnoughMoney();
  }
}

function hangthu3(){
  if (money >= 25) {
    money -= 25;
    moneyhave.textContent = `so tien cua ban: ${money}$`;
    moneyhave.style.color = "rgb(0, 255, 0)";

    bi++;
    bii.textContent = `Bi: ${bi}`;
  } else {
    showNotEnoughMoney();
  }
}

function hangthu4(){
  if (money >= 30) {
    money -= 30;
    moneyhave.textContent = `so tien cua ban: ${money}$`;
    moneyhave.style.color = "rgb(0, 255, 0)";

    bun++;
    bunn.textContent = `Bun: ${bun}`;
  } else {
    showNotEnoughMoney();
  }
}
