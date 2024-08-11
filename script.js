var gateswinger = `
You are Mr. Marble living near ancient Egypt. You are the owner of a stone quarry. You cut limestones and offer granite sandstones and special marbles of the best quality. 

You are a potential customer of the type called Gateswingers. You want to be the first ones to buy new things, want oppoortunity, exclusivity, ultra-high prestige, and unique money-making pottential. You buy a one-of-a-kind product, a revolutionary technology, a service offered by nobody else on the planet, even if you have no prior experience with what is being bought (because it is the first), but have the personaly savvy or the resources to buy and make use of the product without extensive assistance on the part of the salesperson. As an example, you could be an entreprenuer or other visionary customers looking for fast-track opportunities`;

var progressive = `
You are the chief engineer of the Pharaoh building the first pyramid. 

Nevertheless, you are a potential customer of the type called progressive customer. You want an advanced solution or capability, a higher level of performance, and are willing to risk the inconvinience and higher cost to get the performance gain. You buy state-of-the-art products that are custom-designed or tailored to your individual demands. You are a first-time buuyer of this technology making a complicated puchase and need outside expertise from the salesperson to make the best decisions. As an example, you could be a manager with line responsibility buying the first generatin of a high-tech system`;

const customer_types = [gateswinger, progressive];
const customer_id = Math.floor(Math.random() * customer_types.length);
var customer = new WizardOrpheus('', `Your name is Alex.` + customer_types[customer_id] + `You live in ancient Egypt when the wheel has not been invented yet, so you don't know what it is.` + ` Introduce yourself to the salesperson in one line. Don't explicitly share your willingness to buy the product.`);

customer.variable('willingnessToBuy', 'Between 0 and 100, the current percent of willingness to buy the product being sold by the salesperson.', Math.floor(Math.random() * 10));

///////

var closer = `One of the salespersons' name is Cassius. He is a closer. Characteristics: High energy. Extrovorted. Charming but also manupulative. Has upscale lifestyle with all the cool toys. A big-time need to suceed with a genuine desire to change the world for better.
Skills: Qualifying, Presenting, Resolving objections, Closing`;

var wizard = `One of the salespersons' name is Tobi. She is like a wizard/ sales-engineer. Characteristics: Confident, Professional demeanor, Team leader, Enjoys the challenge of creating a unique solution for each customer and managing complexity.
Skills: Resolving objectionsm, Managing complex political relation`

salesperson_types = [closer, wizard]

var salesperson = new WizardOrpheus('', `You will generate tipes for selling for the user, based on the type of the customer.` + salesperson_types);

// bot.variable('SalesPerson', 'The salesperson user selected for the sale.', 'Not selected')


// bot.variable('SalesPersonSalary', "Salary of the selected sales person. If user selects Cassius then 50% cut of selling price, if selected Toby takes $10 for every customer interraction, Ben takes fixed salary of $1000 per sale, Caleb takes fixed salary of $500 per sale and sale comission of 5%", 0)


// bot.variable('Customer', 'Current score. Changes (positive and negatively) as the user does things.', 0)


// bot.variable('Neogtiated Price', 'Current score. Changes (positive and negatively) as the user does things.', 0)


// bot.variable('TotalRevenue', 'Current score. Changes (positive and negatively) as the user does things.', 0)


// bot.variable('TotalCost', 'Current score. Changes (positive and negatively) as the user does things.', 0)


customer.createUserAction({
  name: 'message',
  parameters: ['Message from the customer to user'],
  howBotShouldHandle: 'Respond to the user'
})

let customerResponse = '';
customer.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
  // Add the bot's response to the conversation
  document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'
})

salesperson.createUserAction({
  name: 'context',
  parameters: ['The current state of the conversation'],
  howBotShouldHandle: 'Give sales tips to the user by analyzing the conversation. '
})

salesperson.botAction('tips', 'Share tips to the user on how to sell to the customer based on current state of conversation', { tip: 'What tips you want to give to the user' }, data => {
  document.getElementById('conversation').innerHTML += '<p>' + '=== <br> <i>Tip:</i>' + data.tip + '</p>'
})

let userInput = '';
document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') { // if the user presses enter
    userInput = document.getElementById('input').value
    customer.message(userInput)
    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>'
    document.getElementById('input').value = ''
    salesperson.context('User input:' + userInput + 'Customer response:' + customerResponse + '. Share tips on how to respond.')
  }
})
