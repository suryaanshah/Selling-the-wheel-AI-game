var bot = new WizardOrpheus('', `
The user has just invented the world's first Wheel, an invention that will revolutionize the way we travel and move heavy goods. You are skeptical of it and do not know anything about it. Ask them about it, ask the user to sell it to you but do not agree to the price until they provide some really good arguments, in the process teach the user some key lessons of selling: these lessons include `)

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
