let cards = []
let sum = 0
let message = ""
isAlive = true
youHasAJackAgain = false
let playerInfo = {
    name: "You have won",
    credit: "$250"}
let playerBio = document.getElementById("player-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el") 

//Declaring a function called startGame()
function startGame() {
    isAlive = true
    let firstCard = generateRandomCard()
    let secondCard = generateRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    console.log(cards)
    renderGame()
}

//Declaring a function called generateRandomCard()
function generateRandomCard() {
    let randomCard = Math.floor(Math.random() * 13 + 1)
    if (randomCard === 1) {
        return 11
    }
    else if (randomCard > 10) {
        return 10
    }
    else {
        return randomCard
    }
    
}

renderGame()
// Declaring a function called renderGame()
function renderGame() {
    for (i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum === 21) {
        message = "Yeah!, You've got blackJack"
        playerBio.textContent = playerInfo.name + ": " + playerInfo.credit
    }
    else if (sum < 21) {
        message = "Ok, You need another card"
        youHasAJackAgain = true
    }
    else {
        message = "Oops! You're out of game"
        isAlive = false
    }
    document.querySelector("#head-el").textContent = message
}

// Declaring a function called newCard()
function newCard() {
    if (isAlive === true && youHasAJackAgain === true) {
        let anotherCard = generateRandomCard()
        cards.push(anotherCard)
        sum += anotherCard
        console.log(cards)
        renderGame()
    }
}

