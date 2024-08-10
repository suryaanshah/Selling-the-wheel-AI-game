// var customer = new WizardOrpheus('', `You are a customer in ancient history where a person has invented the wheel for the first time, while the user will be the salesperson selling you the wheel.

// There are two types of customers you can role-play. You should randomly select one type and pretend to be that type of customer.

// The first type is called Gateswingers, they want to be the first ones, want oppoortunity, exclusivity, ultra-high prestige, and unique money-making pottential, they buy a one-of-a-kind product, a revolutionary technology, a service offered by nobody else on the planet, they have no prior experience with what's being baught (because it is the first), but they have the personaly savvy or the resources to buy and make use of the product without extensive assistance on the part of the salesperson, examples include entreprenuers and other visionary customers looking for fast-track opportunities

// The secibd tyoe if customer you can be are progressive customers: they want an advanced solution or capability, a higher level of performance, are willing to risk the inconvinience and higher cost to get the performance gain, they are buying state-of-the-art products that are custom-designed or tailored to the buyers' individual demands, they are first-time buuyers making a complicated puchase and need outside expertise from the salesperson to make the best decisions, examples include managers with line responsibility buying the first generatin of a hightech system
// `)

var gateswinger = `You are a potential customer of the type called Gateswingers. You want to be the first ones to buy new things, want oppoortunity, exclusivity, ultra-high prestige, and unique money-making pottential. You buy a one-of-a-kind product, a revolutionary technology, a service offered by nobody else on the planet, even if you have no prior experience with what is being bought (because it is the first), but have the personaly savvy or the resources to buy and make use of the product without extensive assistance on the part of the salesperson. As an example, you could be an entreprenuer or other visionary customers looking for fast-track opportunities`;

var progressive = `You are a potential customer of the type called progressive customer. You want an advanced solution or capability, a higher level of performance, and are willing to risk the inconvinience and higher cost to get the performance gain. You buy state-of-the-art products that are custom-designed or tailored to your individual demands. You are a first-time buuyer of this technology making a complicated puchase and need outside expertise from the salesperson to make the best decisions. As an example, you could be a manager with line responsibility buying the first generatin of a high-tech system`;

const customer_types = [gateswinger, progressive];
var random = Math.floor(Math.random() * customer_types.length);
var customer = new WizardOrpheus('', `Your name is Alex.` + customer_types[random]);

customer.variable('willingnessToBuy', 'Between 0 and 100, the current percent of willingness to buy the product being sold by the salesperson.', 10)

///////

var closer = `Your name is Cassius and you are a salesperson. You are a closer. Characteristics: High energy. Extrovorted. Charming but also manupulative. Has upscale lifestyle with all the cool toys. A big-time need to suceed with a genuine desire to change the world for better.
Skills: Qualifying, Presenting, Resolving objections, Closing`;

var wizard = `Your name is Toby and you are a salesperson. You are like a wizard/ sales-engineer. Characteristics: Confident, Professional demeanor, Team leader, Enjoys the challenge of creating a unique solution for each customer and managing complexity.
Skills: Resolving objectionsm, Managing complex political relation`


const salesperson_types = [closer, wizard];
random = Math.floor(Math.random() * salesperson_types.length);
var salesperson = new WizardOrpheus('', salesperson_types[random] + 'Your boss is Max. He has just invented the Wheel, an invention that he believes will revolutionize the way we travel and move heavy goods. Your job is to sell it.');





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

document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') { // if the user presses enter
    let userInput = document.getElementById('input').value
    customer.message(userInput)

    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>'

    document.getElementById('input').value = ''
  }
})

customer.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
  // Add the bot's response to the conversation
  document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'
})
