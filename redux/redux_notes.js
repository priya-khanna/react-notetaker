React Redux notes

// In Redux, you represent entire state of your application as single javascript object.
// State tree is read only. Anytime you need to change the state, u need to dispatch an action. Action is Js object describing the change. State represents data in your app, action represents change in the data.
// components only knows how to dipatch a action with type, id or whatever
// [object Object] {
  // type: "INCREMENT"
// }

// Pure fucntions whose return value depends solely on the valur of args, do not call the database and do not override the values you pass to them
// In redux applications, next state is calculated on the basis of initial state and dispacting action passed to it, it doesnt modify the intial state
// To descibe state mutations , u have to write a fucntion that takes previous state of the app, the action being dispatched and retuns the next state and this is a pure fucntion, it is called reducer

const { createStore } = Redux;
var createStore = Redux.createStore;
import { createStore } from 'redux';

// Store holds applications's state object, it lets u dispatch actios, when u create it u need to specify the reducer thats tells how state is updated with actions


React flux
// View can send action to dispatcher received by store. View can register to listen to particular events/actions within the application. Dispatcher receive as actions and distributes it to the correct store which manages the state in the application

Steps to setup flux project
// npm init
// npm install flux react react-dom react-router@latest --save
// npm install babel webpack-dev-server --save
// npm install babel-laoder babel-preset-react babel-preset-es2015 --save-dev