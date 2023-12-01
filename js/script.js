// Apuntes review 1
// Lo he entendido mal, no es que después de poner el número empiece la cuenta atrás sino que el juego empieza y el usuario tiene 5 segundos para responder.

// Este sería el ejercicio entendido bien:

const userInput = document.getElementById('userInput')
const countdown = document.getElementById('countdown')
const result = document.getElementById('result')
const restart = document.getElementById('restart')

let selectedNumber = 0;

userInput.addEventListener('click', () => {
    selectedNumber = userInput.value
})

const printCountdown = () => {
    let count = 5
    setInterval(() => {
        if (count >= 0) {
            countdown.innerHTML = `<p class="red-simple">Cuenta atrás: ${count} segundos</p>`;
            count--
        }
    }, 1000)
}

const startGame = () => {
    printCountdown()
    const correctNumber = new Promise((resolve) => {
        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * (3 - 1) + 1);
            resolve(randomNumber)
        }, 6000)
    })
    return correctNumber
}

const printResult = (correctNumber) => {
    const isMatch = number == selectedNumber
    if (isMatch) {
        result.innerHTML = `<p class="green">Hemos salvado el mundo</p>
        <p>El número para salvar al mundo es ${number} y el número que has seleccionado es ${selectedNumber}</p>`
    } else {
        result.innerHTML = `<p class="red">Todos muertos</p>
        <p>El número para salvar al mundo es ${number} y el número que has seleccionado es ${selectedNumber}</p>`
    }
}

startGame().then((correctNumber) => {
    printResult(correctNumber)
})

restart.addEventListener('click', () => {
    location.reload();
});



// ESTE ES EL EJERCICIO MAL ENTENDIDO, IGNORAR

// const userInput = document.getElementById('userInput');
// const result = document.getElementById('result');
// result.classList.add('hide');

// const btnRestart = document.getElementById('restart');
// btnRestart.addEventListener('click', () => {
//     location.reload();
// });

// const clickar = (clk) => {
//     const targetElement = clk.target;
//     if (targetElement !== userInput && userInput.value) {
//         proceed();
//     }
// };
// const keystroke = (press) => {
//     if (press.key === 'Enter' && userInput.value) {
//         proceed();
//     }
// };
// const proceed = () => {
//     if (+userInput.value > 0 && +userInput.value < 4) {
//         removeEventListener('click', clickar);
//         removeEventListener('keydown', keystroke);
//         boom();
//         timer();
//     } else {
//         userInput.value = '';
//         alert('El número introducido no es válido, introduce un número del 1 al 3');
//     }
// };
// window.addEventListener('click', clickar);
// window.addEventListener('keydown', keystroke);

// const boom = () => {
//     const outcome = new Promise((resolve) => {
//         setTimeout(() => {
//             let pc = Math.floor(Math.random() * (3 - 1) + 1);
//             let user = +userInput.value;
//             const array = [user, pc];
//             resolve(array);
//         }, 5000);
//     });
//     outcome.then((arr) => {
//         const [user, pc] = arr;
//         result.classList.remove('hide');
//         pc === user
//             ? result.innerHTML = `
//                 <img src="./img/win.png" alt="win" class="win"/>
//                 <p class="green">¡Enhorabuena, has salvado el mundo!</p>
//                 <p> Tu número <span>${user}</span> es igual al elegido por el PC <span>${pc}</span></p>
//                 `
//             : result.innerHTML = `
//                 <img src="./img/bang.png" alt="bang" class="bang"/>
//                 <p class="red">La bomba ha estallado</p>
//                 <p> Tu número <span>${user}</span> no es igual al elegido por el PC <span>${pc}</span></p>
//                 `
//     });
// };

// let sec = 5;
// const timer = () => {
//     const countdown = document.getElementById('countdown');
//     countdown.innerHTML = `<p>Cuenta atrás: ${sec} segundos</p>`;
//     if (sec == 0) {
//         countdown.classList.add('red-simple');
//         return;
//     } else {
//         sec--;
//         setTimeout('timer()', 1000);
//     }
// }