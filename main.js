// let key = prompt('hafta kunlarini kiritin')

// switch(key){
//     case 'Dushanba': console.log('1');
//     break;
//     case 'Seshanba': console.log('2');
//     break;
//     case 'Chorshanba': console.log('3');
//     break;
//     case 'Payshanba': console.log('4');
//     break;
//     case 'Juma': console.log('5');
//     break;
//     case 'Shamba': console.log('6');
//     break;
//     case 'Yakshanba': console.log('7');
//     break;

//     default:
//         console.log('error');
        
// }


// let time = new Date();



// console.log(time.getDate);
// console.log(time.getDay);
// console.log(time.getHours);
// console.log(time.getMinutes);
// console.log(time.getMonth);

// let ism = 'Ism';

// setTimeout((ism) => {
//     alert('Setime ishladi' + ism)
// }, 2000 , ism);


// setInterval(() => {
//     console.log('set interval ishladi');
    
// }, 2000);

// const hours = document.getElementById('hours')
// const minuts = document.getElementById('minuts')
// const secunds = document.getElementById('secunds')


// setInterval(() => {
//     let time = new Date();


//     hours.innerHTML = time.getHours;
//     minuts.innerHTML = time.getMinutes;
//     secunds.innerHTML = time.getSeconds;
    
    
//  }, 1000);


const time1 = document.getElementById('time1');
const time2 = document.getElementById('time2');
const time3 = document.getElementById('time3');



setInterval(() => {
let time = new Date();
function format(n) {
  return ('0' + n).slice(-2);
}
time1.innerHTML = format(time.getHours());
time2.innerHTML = format(time.getMinutes());
time3.innerHTML = format(time.getSeconds());
} )