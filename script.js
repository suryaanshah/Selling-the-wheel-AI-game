import { customer_id, customer_types } from './customers.js';
import { salesperson_types, salesperson_names } from './salespersons.js';
import { technologies, technology_stage_names } from './technology.js';
import { objections } from './objections.js';


document.getElementById('stagetech').innerHTML += '<p>' + '<b> Stage of wheel technology:</b><i> ' + technology_stage_names[customer_id] + "</i>. " + technologies
[customer_id] + "</p>"

const initial_interest = Math.floor(Math.random() * 10)
const initial_desired_price = [100000, 10000, 1000, 100][customer_id];
const initial_knowledge_about_wheel = [0, 25, 50, 75][customer_id];

var customer = new WizardOrpheus('', `Your name is Alex, a potential customer for purchasing wheels.` + customer_types[customer_id] + `You live in ancient Egypt where the invention of the wheel is at the following stage: ` + technologies[customer_id] + ` When greeting, you introduce yourself in one line only. Your current level of knowledge about the wheels is at ` + initial_knowledge_about_wheel + ` out of a hundered. Your current interest in buying the wheels offered by the salesperson is at ` + initial_interest + ` percent. It increases or decreases with every interaction. ` + objections[customer_id] + `. You are initially willing to pay upto ` + initial_desired_price + ` units of currency per wheel. Negotiate the costs a little with the salesperson if needed as you become more interested.`);

customer.variable('interestToBuy', 'Between 0 and 100, it is your current level of interest and enthusiasm to buy the product being sold by the salesperson. Changes by atleast 5 percent with every interaction. Once above 80 percent, it will rarely go down. Once reached 100, it stays there.', initial_interest);

customer.variable('pricePerWheel', 'Higher than 0, the price per item that you are willing to pay.', initial_desired_price);

var salesperson = new WizardOrpheus('', `You will generate tips for selling for the user, based on the type of the customer.` + salesperson_types[customer_id] + " Share tips on how to drive the conversation forward. The aim is to maximize the selling price and the number of wheels sold. There can be a trade-off between the two, so give tips to negotiate with the customer appropriately.`");


customer.createUserAction({
  name: 'message',
  parameters: ['Message from the customer to user'],
  howBotShouldHandle: 'Respond to the user'
})

let customerResponse = '';
customer.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
  // Add the bot's response to the conversation
  customerResponse = data.message;
  document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'
  document.getElementById('willingnessToBuy').innerText = data.currentVariables.interestToBuy.value;

  document.body.style.backgroundColor = `rgba(0, 255, 0, ${data.currentVariables.interestToBuy.value * 1 / 100})`

  if (data.currentVariables.interestToBuy.value >= 100) {
    document.getElementById('input').classList.add('hidden');
    document.getElementById('wintext').classList.remove('hidden');
  }
  
})

salesperson.createUserAction({
  name: 'context',
  parameters: ['The current state of the conversation'],
  howBotShouldHandle: 'Give only one tip at a time to the salesperson by analyzing the conversation between salesperson and the customer. Understand who asked what and who said what and respond based on that.'
})

salesperson.botAction('tips', 'Give only one tip at a time to the salesperson by analyzing the conversation between salesperson and the customer. Understand who asked what and who said what and respond based on that.', { tip: 'What tips you want to give to the salesperson on making the sale.' }, data => {
  document.getElementById('conversation').innerHTML += '<p>' + '=== <br> <i>' + salesperson_names[customer_id] + "'s tip: " + data.tip + "</i></p>";
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
