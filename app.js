const square = document.querySelectorAll('.square')
const mouse = document.querySelectorAll('.mouse')
const timeLeft = document.querySelector('#time-Left')

let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare () {
    square.forEach(className => {
        className.classList.remove('mouse')
    })

let randomPosition = square[Math.floor(Math.random() * 9)]
randomPosition.classList.add('mouse')

// assign id of randomposition to hit position
hitPostion = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPostion) {
            result = result + 1
            score.textContent = result
        }
    })
})

function moveMouse () {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

moveMouse()


function countDown () {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0 ) {
        clearInterval(timerId)
        alert('Game Over! Your Final Score is' + result)
    }
}

let timerId = setInterval(countDown , 1000)