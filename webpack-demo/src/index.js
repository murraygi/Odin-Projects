import _ from 'lodash';
import myName from './myName';
import {functionOne, functionTwo} from './myModule'; 

 function component() {
   const element = document.createElement('div');

  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // Adding a newline for better readability
  element.innerHTML += '<br>';

  // Using your function to add more content
  element.innerHTML += myName('Cody');

   return element;
 }

 document.body.appendChild(component());