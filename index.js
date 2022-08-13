// CUENTA ATRAS

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const retorno = new Date(2022, 8, 4, 19, 20, 0);

const updateCounter = () => {
  let currentDate = new Date();
  let contra = new Date(retorno - currentDate);

  let counter = {
    months: contra.getMonth(),
    days: contra.getDate(),
    hours: contra.getHours(),
    minutes: contra.getMinutes(),
    seconds: contra.getSeconds(),
  };

  dias.innerHTML = counter.days - 1;
  horas.innerHTML = counter.hours;
  minutos.innerHTML = counter.minutes;
  segundos.innerHTML = counter.seconds;

  if (counter.days == 0 && counter.hours <= 2) {
    dias.parentElement.classList.add("red");
  }
};

setInterval(updateCounter, 1000);

// handleAn2ans

const an2ans = document.getElementById("an2ans");

const handleAn2ans = (e) => {
  let n = Math.round(Math.random() * 7);
  var audio = new Audio(`public/an2ans` + n + `.ogg`);

  audio.play();
};
