import { strategy_closer, strategy_wizard, strategy_relationshipbuilder, strategy_crew } from './sellingstrategy.js';

import { marketing_closer, marketing_wizard, marketing_relationshipbuilder, marketing_crew } from './marketing.js';

var closer = `One of the salespersons' name is Cassius. He is a closer. Characteristics: High energy. Extrovorted. Charming but also manupulative. Has upscale lifestyle with all the cool toys. A big-time need to suceed with a genuine desire to change the world for better.
Skills: Qualifying, Presenting, Resolving objections, Closing. He is able to build a dream picture of the results of the purchase.
Strategy: ` + strategy_closer + `
Marketing: ` + marketing_closer;

var wizard = `One of the salespersons' name is Tobi. She is like a wizard/ sales-engineer. Characteristics: Confident, Professional demeanor, Team leader, Enjoys the challenge of creating a unique solution for each customer and managing complexity.
Skills: Resolving objections, Managing complex political relations. Good organisation and communication skills. Deal with details. 
Strategy: ` + strategy_wizard + `
Marketing: ` + marketing_wizard;

var relationshipbuilder = `One of the salespersons' name is Ben. He is a relationship builder. Characteristics: Likable, hard working, civic minded, optimistic but also pragmatic, likes a routine and hates complexity. Prefers sales rather than management. Skills: Resolving objections, Closing and Developing customer relationships. Building repeat customers. Sells with the belief that the customer always comes first. 
Strategy: ` + strategy_relationshipbuilder + `
Marketing: ` + marketing_relationshipbuilder;

var crew = `One of the salespersons' name is Caleb. He is the captain of a sales crew. Characteristics: Upbeat. Outgoing. Happy-go-lucky. Down to earth, average everyday person like the customer. Not an overachiever, works to make money to have fun on days off. Skills: All aspects of customer service. Handing social fatigue so as to withstand constant contact with the public. 
Strategy: ` + strategy_crew + `
Marketing: ` + marketing_crew;

export var salesperson_types = [closer, wizard, relationshipbuilder, crew];
export var salesperson_names = ['Casius', 'Tobi', 'Ben', 'Caleb'];
