import { customer_id, customer_types } from './customers.js';
import { salesperson_types } from './salespersons.js';
import { technologies } from './technology.js';

var customer = new WizardOrpheus('', `Your name is Alex.` + customer_types[customer_id] + `You live in ancient Egypt where the invention of the wheel is at the following stage: ` + technologies[customer_id] + ` Introduce yourself to the salesperson in one line. Negotiate the costs a little with the salesperson if needed later.`);

const initial_willingness = Math.floor(Math.random() * 10)
const initial_desired_price = [100000, 1000, 100, 10][customer_id];
const initial_knowledge_about_wheel = [0, 25, 50, 75][customer_id];

customer.variable('willingnessToBuy', 'Between 0 and 100,it is your current willingness to buy the product being sold by the salesperson.', initial_willingness);

customer.variable('pricePerWheel', 'Higher than 0, the price per item that you are willing to pay.', initial_desired_price);

var salesperson = new WizardOrpheus('', `You will generate tips for selling for the user, based on the type of the customer.` + salesperson_types + " Follow ideas from the book called Selling the Wheel by Jeff Cox and Howard Stevens. Infer the type of customer based on the conversation and share particular tips on how to drive the conversation forward. Your aim is to maximize the selling price and the number of wheels sold. There can be a trade-off between the two, so negotiate with the customer appropriately.`");

customer.createUserAction({
  name: 'message',
  parameters: ['Message from the customer to user'],
  howBotShouldHandle: 'Respond to the user'
})

let customerResponse = '';
customer.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
  // Add the bot's response to the conversation
  document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'
  document.getElementById('willingnessToBuy').innerText = data.currentVariables.willingnessToBuy.value

  document.body.style.backgroundColor = `rgba(0, 255, 0, ${data.currentVariables.willingnessToBuy.value * 1 / 100})`
})

salesperson.createUserAction({
  name: 'context',
  parameters: ['The current state of the conversation'],
  howBotShouldHandle: 'Give only one tip at a time to the salesperson by analyzing the conversation between salesperson and the customer. Understand who asked what and who said what and respond based on that.'
})

salesperson.botAction('tips', 'Give only one tip at a time to the salesperson by analyzing the conversation between salesperson and the customer. Understand who asked what and who said what and respond based on that.', { tip: 'What tips you want to give to the salesperson on making the sale.' }, data => {
  document.getElementById('conversation').innerHTML += '<p>' + '=== <br> <i>Tip: </i>' + '<i>' + data.tip + '</i>' + '</p>'
})

let userInput = '';
document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') { // if the user presses enter
    userInput = document.getElementById('input').value
    customer.message(userInput)
    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>'
    document.getElementById('input').value = ''
    salesperson.context('User input:' + userInput + ' Customer response:' + customerResponse + '. Share tips on how to respond.')
  }
})
