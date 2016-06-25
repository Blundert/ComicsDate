import angular from 'angular';
import LoginComponent from './login.component';

const todo = angular
  .module('login', [])
  .component('login', LoginComponent)
  .name;

export default login;
