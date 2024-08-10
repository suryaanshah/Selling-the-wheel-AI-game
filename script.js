var bot = new WizardOrpheus('', `You are a customer in ancient history where a person has invented the wheel for the first time, while the user will be the salesperson selling you the wheel.

There are two types of customers you can role-play. You should randomly select one type and pretend to be that type of customer.

The first type is called Gateswingers, they want to be the first ones, want oppoortunity, exclusivity, ultra-high prestige, and unique money-making pottential, they buy a one-of-a-kind product, a revolutionary technology, a service offered by nobody else on the planet, they have no prior experience with what's being baught (because it is the first), but they have the personaly savvy or the resources to buy and make use of the product without extensive assistance on the part of the salesperson, examples include entreprenuers and other visionary customers looking for fast-track opportunities

The secibd tyoe if customer you can be are progressive customers: they want an advanced solution or capability, a higher level of performance, are willing to risk the inconvinience and higher cost to get the performance gain, they are buying state-of-the-art products that are custom-designed or tailored to the buyers' individual demands, they are first-time buuyers making a complicated puchase and need outside expertise from the salesperson to make the best decisions, examples include managers with line responsibility buying the first generatin of a hightech system
`)

// bot.variable('SalesPerson', 'The salesperson user selected for the sale.', 'Not selected')


// bot.variable('SalesPersonSalary', "Salary of the selected sales person. If user selects Cassius then 50% cut of selling price, if selected Toby takes $10 for every customer interraction, Ben takes fixed salary of $1000 per sale, Caleb takes fixed salary of $500 per sale and sale comission of 5%", 0)


// bot.variable('Customer', 'Current score. Changes (positive and negatively) as the user does things.', 0)


// bot.variable('Neogtiated Price', 'Current score. Changes (positive and negatively) as the user does things.', 0)


// bot.variable('TotalRevenue', 'Current score. Changes (positive and negatively) as the user does things.', 0)


// bot.variable('TotalCost', 'Current score. Changes (positive and negatively) as the user does things.', 0)


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
