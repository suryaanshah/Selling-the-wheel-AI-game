var myGame = new WizardOrpheus('', `
You are Max and you have just invented the Wheel, an invention that will revolutionize the way we travel and move heavy goods. But you are not able to sell it to anybody. All people use the old methods like camels, elephants, and strong men to move goods. Your job is to sell the wheel
`)

myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') { // if the user presses enter
    let userInput = document.getElementById('input').value
    myGame.message(userInput)

    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>'

    document.getElementById('input').value = ''
  }
})
