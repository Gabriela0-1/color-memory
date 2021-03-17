const btnEmpezar = document.getElementById("btnEmpezar");

const nivel = document.getElementById("nivel");
nivel.innerHTML = `Nivel: 1`;

//? items
const item1 = document.getElementById("item-1");
const item2 = document.getElementById("item-2");
const item3 = document.getElementById("item-3");
const item4 = document.getElementById("item-4");
const item5 = document.getElementById("item-5");
const item6 = document.getElementById("item-6");
const item7 = document.getElementById("item-7");
const item8 = document.getElementById("item-8");
const item9 = document.getElementById("item-9");
const item10 = document.getElementById("item-10");
const item11 = document.getElementById("item-11");
const item12 = document.getElementById("item-12");
const item13 = document.getElementById("item-13");
const item14 = document.getElementById("item-14");
const item15 = document.getElementById("item-15");
const item16 = document.getElementById("item-16");
const item17 = document.getElementById("item-17");

const UltimoNivel = 10;
class Juego {
  constructor() {
    this.inicializar();
    this.generarSecuencia();
    setTimeout(() => this.siguienteNivel(), 500);
  }
  inicializar() {
    this.nivel = 1;
    this.siguienteNivel = this.siguienteNivel.bind(this);
    this.seleccionarItem = this.seleccionarItem.bind(this);
    btnEmpezar.classList.add("hide");

    this.items = {
      item1,
      item2,
      item3,
      item4,
      item5,
      item6,
      item7,
      item8,
      item9,
      item10,
      item11,
      item12,
      item13,
      item14,
      item15,
      item16,
      item17,
    };
    nivel.innerHTML = `Nivel: ${this.nivel}`;
  }
  generarSecuencia() {
    this.secuencia = new Array(UltimoNivel)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 9));
  }
  siguienteNivel() {
    this.subNivel = 0;
    this.iluminarSecuencia();
    this.agregarEventoClick();
  }
  numAItem(num) {
    switch (num) {
      case 0:
        return "item1";
      case 1:
        return "item2";
      case 2:
        return "item3";
      case 3:
        return "item4";
      case 4:
        return "item5";
      case 5:
        return "item6";
      case 6:
        return "item7";
      case 7:
        return "item8";
      case 8:
        return "item9";
      case 9:
        return "item10";
      case 10:
        return "item11";
      case 11:
        return "item12";
      case 12:
        return "item13";
      case 13:
        return "item14";
      case 14:
        return "item15";
      case 15:
        return "item16";
      case 7:
        return "item17";
    }
  }
  itemAnum(item) {
    switch (item) {
      case "item1":
        return 0;
      case "item2":
        return 1;
      case "item3":
        return 2;
      case "item4":
        return 3;
      case "item5":
        return 4;
      case "item6":
        return 5;
      case "item7":
        return 6;
      case "item8":
        return 7;
      case "item9":
        return 8;
      case "item11":
        return 9;
      case "item11":
        return 10;
      case "item12":
        return 11;
      case "item13":
        return 12;
      case "item14":
        return 13;
      case "item15":
        return 14;
      case "item16":
        return 15;
      case "item17":
        return 7;
    }
  }
  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      const item = this.numAItem(this.secuencia[i]);
      setTimeout(() => this.iluminarItem(item), 1000 * i);
    }
  }
  iluminarItem(item) {
    this.items[item].classList.add("light");
    setTimeout(() => this.iluminarItemOFF(item), 350);
  }
  iluminarItemOFF(item) {
    this.items[item].classList.remove("light");
  }
  agregarEventoClick() {
    this.items.item1.addEventListener("click", this.seleccionarItem);
    this.items.item2.addEventListener("click", this.seleccionarItem);
    this.items.item3.addEventListener("click", this.seleccionarItem);
    this.items.item4.addEventListener("click", this.seleccionarItem);
    this.items.item5.addEventListener("click", this.seleccionarItem);
    this.items.item6.addEventListener("click", this.seleccionarItem);
    this.items.item7.addEventListener("click", this.seleccionarItem);
    this.items.item8.addEventListener("click", this.seleccionarItem);
    this.items.item9.addEventListener("click", this.seleccionarItem);
    this.items.item10.addEventListener("click", this.seleccionarItem);
    this.items.item11.addEventListener("click", this.seleccionarItem);
    this.items.item12.addEventListener("click", this.seleccionarItem);
    this.items.item13.addEventListener("click", this.seleccionarItem);
    this.items.item14.addEventListener("click", this.seleccionarItem);
    this.items.item15.addEventListener("click", this.seleccionarItem);
    this.items.item16.addEventListener("click", this.seleccionarItem);
    this.items.item17.addEventListener("click", this.seleccionarItem);
  }
  quitarEventoClick() {
    this.items.item1.removeEventListener("click", this.seleccionarItem);
    this.items.item2.removeEventListener("click", this.seleccionarItem);
    this.items.item3.removeEventListener("click", this.seleccionarItem);
    this.items.item4.removeEventListener("click", this.seleccionarItem);
    this.items.item5.removeEventListener("click", this.seleccionarItem);
    this.items.item6.removeEventListener("click", this.seleccionarItem);
    this.items.item7.removeEventListener("click", this.seleccionarItem);
    this.items.item8.removeEventListener("click", this.seleccionarItem);
    this.items.item9.removeEventListener("click", this.seleccionarItem);
    this.items.item10.removeEventListener("click", this.seleccionarItem);
    this.items.item11.removeEventListener("click", this.seleccionarItem);
    this.items.item12.removeEventListener("click", this.seleccionarItem);
    this.items.item13.removeEventListener("click", this.seleccionarItem);
    this.items.item14.removeEventListener("click", this.seleccionarItem);
    this.items.item15.removeEventListener("click", this.seleccionarItem);
    this.items.item16.removeEventListener("click", this.seleccionarItem);
    this.items.item17.removeEventListener("click", this.seleccionarItem);
  }
  seleccionarItem(ev) {
    const nameItem = ev.target.dataset.item;
    const numItem = this.itemAnum(nameItem);
    this.iluminarItem(nameItem);
    if (numItem === this.secuencia[this.subNivel]) {
      this.subNivel++;
      if (this.subNivel === this.nivel) {
        this.nivel++;
        nivel.innerHTML = `Nivel: ${this.nivel}`;
        this.quitarEventoClick();
        if (this.nivel === UltimoNivel + 1) {
          //WON
          this.gano();
        } else {
          setTimeout(() => this.siguienteNivel(), 1000);
        }
      }
    } else {
      //LOST
      this.perdio();
    }
  }
  gano() {
    swal("Perfect", "Congrats, you WON!", "success").then(() => {
      this.quitarEventoClick();
      this.inicializar.bind(this);
      btnEmpezar.classList.remove("hide");
    });
  }
  perdio() {
    swal("Oops", "Sorry, you lost!", "error").then(() => {
      this.quitarEventoClick();
      this.inicializar.bind(this);
      btnEmpezar.classList.remove("hide");
    });
  }
}

function empezarJuego() {
  let juego = new Juego();
}
