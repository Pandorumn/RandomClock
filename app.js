const DEG = 6;

const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const info = document.querySelector('#info p');

let hh = Math.floor(Math.random() * 12) + 1 ;
let mm = Math.floor(Math.random() * 60);

hr.style.transform = `rotateZ(${hh*30 + mm*DEG/12}deg)`;
mn.style.transform = `rotateZ(${mm * DEG}deg)`;

info.innerHTML = `${hh} : ${mm}`;