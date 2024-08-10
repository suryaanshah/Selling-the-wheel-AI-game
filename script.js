var bot = new WizardOrpheus('', `Introduce the user with the rules of this game. Greet the user after they first say Hi, until then keep asking them to say Hi. Once that is done, ask the user to choose one of the four people in the list. Further present the following customers for the salesperson to sell the Wheel to: a. The labour which work on the pyramid by transporting heavy stones from ground to the top, or b. ask the user if they want to set a wheel shop with the salesperson selected, or c. the owner of a stone transporting company which does not transport to the pyramid yet, or d. the pharoh`)

bot.variable('SalesPerson', 'The salesperson user selected for the sale.', 'Not selected')


bot.variable('SalesPersonSalary', "Salary of the selected sales person. If user selects Cassius then 50% cut of selling price, if selected Toby takes $10 for every customer interraction, Ben takes fixed salary of $1000 per sale, Caleb takes fixed salary of $500 per sale and sale comission of 5%", 0)


bot.variable('Customer', 'Current score. Changes (positive and negatively) as the user does things.', 0)


bot.variable('Neogtiated Price', 'Current score. Changes (positive and negatively) as the user does things.', 0)


bot.variable('TotalRevenue', 'Current score. Changes (positive and negatively) as the user does things.', 0)


bot.variable('TotalCost', 'Current score. Changes (positive and negatively) as the user does things.', 0)


bot.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') { // if the user presses enter
    let userInput = document.getElementById('input').value
    bot.message(userInput)

    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>'

    document.getElementById('input').value = ''
  }
})

bot.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
  // Add the bot's response to the conversation
  document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'
})
