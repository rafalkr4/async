// const boxRef = document.querySelector('.box');
//
//
// let isFinished = false;
//
// // callback hell
// setTimeout(() => {
//     boxRef.style.left = '500px';
//     setTimeout(() => {
//         boxRef.style.top = '500px';
//         setTimeout(() => {
//             boxRef.style.left = '0px';
//             setTimeout(() => {
//                 boxRef.style.top = '0px';
//                 isFinished = true;
//             }, 3000);
//         }, 3000);
//     }, 3000);
// }, 3000)
//
//
// setTimeout(() => {
//     if (isFinished) {
//         console.log('Run again');
//     }
// }, 15000)


// const receipt = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Kebab maj friend!");
//     }, 3001);
//
//     setTimeout(() => {
//         reject("No kebab, łonna fajt")
//     }, 3000);
// });
//
// console.log(receipt)
// receipt
//     .then((msg) => {
//         console.log(msg)
//     })
//     .catch((msg) => {
//         console.log(msg)
//     });
//
//
// function move(top, left) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             boxRef.style.left = left;
//             boxRef.style.top = top;
//             resolve();
//         }, 3000);
//     });
// }
//
// move(0, "500px")
//     .then(() => move("500px", "300px"))
//     .then(() => move("500px", 0))
//     .then(() => move(0, 0));
//
// const url = 'https://api.nbp.pl/api/exchangerates/rates/a/chf/?format=json';
//
// // const request = fetch(url);
// //
// // request
// //     .then((response) => response.json())
// //     .then((data) => console.log(data.rates[0].mid))
// //     .catch(console.log);
//
// function myFetch(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//
//         xhr.onload = function () {
//             if (xhr.status >= 200 && xhr.status < 400) {
//                 const response = JSON.parse(xhr.responseText)
//                 resolve(response);
//             } else {
//                 reject(xhr.status);
//             }
//         }
//
//         xhr.onerror = function () {
//             reject('Something is no yes!')
//         }
//
//         xhr.open('GET', url, true);
//         xhr.send()
//     })
// }
//
// const request = myFetch(url);
//
// request
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
//     .finally(() => {console.log('done!')})


// function* gen() {
//     console.log(1)
//     yield 1
//     console.log(2)
//     yield 2
//     console.log(3)
// }
//
// const g = gen();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

function* getData(url){
    const data = yield fetch(url);
    console.log(data);
}

const g = getData(url)
g.next()
    .value
    .then((response) => g.next(response))



async function getDataMagic(url){
    const data = await fetch(url);
    console.log(data);
}

getDataMagic(url).catch(console.error);