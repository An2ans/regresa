let dias = document.getElementById("dias");
let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");

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
};

setInterval(updateCounter, 1000);
