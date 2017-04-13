import $ from 'jquery';
import './style.scss';

let time = 0;

function increment() {
  time += 1;
  console.log(`${time}`);
  $('#main').html(`You've been on this page for ${time} seconds.`);
}

setInterval(increment, 1000);
