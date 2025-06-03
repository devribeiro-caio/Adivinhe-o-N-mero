let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10

function newgame() {
  window.location.reload()
}

function init() {
    computerNumber = Math.floor(Math.random() * 100) + 1;
    //console.log(computerNumber);
    
}

function compareNumbers() {
  const userNumber =  Number(document.getElementById("inputBox").value)
  userNumbers.push(' '+ userNumber)
  document.getElementById('guesses').innerHTML = userNumbers

  if (attempts < maxGuesses){
    if (userNumber >  computerNumber) {
    document.getElementById('textOutput').innerHTML = 'Seu numero é maior que o número do computador. Tente novamente!'
    document.getElementById('inputBox').value = '' // Limpa o campo de entrada
    attempts ++
    document.getElementById('attempts') .innerHTML = attempts
    
  }
  else if (userNumber < computerNumber) {
    document.getElementById('textOutput').innerHTML = ' Seu numero é menor que o número do computador. Tente novamente!'
    document.getElementById('inputBox').value = '' // Limpa o campo de entrada
    attempts ++
    document.getElementById('attempts') .innerHTML = attempts
  }
  else {
    document.getElementById('textOutput').innerHTML = 'Parabéns! Você acertou o número do computador!'
    attempts ++
    document.getElementById('attempts') .innerHTML = attempts
     document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')

  }

  }
  else {
     document.getElementById('textOutput').innerHTML = ' Você Perdeu! o número do computador era ' + computerNumber 
     document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
  }
  
 
}

