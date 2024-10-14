let addBtn = document.querySelector("#add-btn");

// addBtn.addEventListener('click', function () {
//     // generate a random number between 1 to 100000
//     let randomNumber = Math.floor(Math.random() * 10000 + 1);

//     // 1. select the container that we want add into
//     let nBox = document.querySelector('#number-box');

//     let newElement = document.createElement('li')
//     newElement.innerHTML = randomNumber;


//     // 2. Append in the new random number
//     nBox.appendChild(newElement);

// })

addBtn.addEventListener('click', function () {
    // generate a random number between 1 to 100000
    let randomNumber = Math.floor(Math.random() * 10000 + 1);

    
    let nBox = document.querySelector('#number-box');

    nBox.innerHTML += `<li>${randomNumber}</li>`

})
