'use strict';
const { startTimer, stopTimer } = require('./timer');

const campbellsTomatoSoup = {
  contents: 'tomato soup',
  weightInOz: 12
};

const heinzBeansSoup = {
  contents: 'beans soup',
  weightInOz: 10
};

function openCan(foodCan, onOpened) {
  setTimeout(function () {
    onOpened(foodCan.contents);
  }, 2000);
}

function warmUp(food, onReady) {
  setTimeout(function () {
    onReady('hot ' + food);
  }, 4000);
}

function eat(food, onReady) {
  console.log('Eating: ' + food);
  setTimeout(function () {
    console.log('Finished eating: ' + food);
    onReady();
  }, 4000);
}

function eatLunch(cannedFood, onReady) {
  console.log('Opening can');
  openCan(cannedFood, function (contents) {
    console.log('Opened can: ' + contents);
    console.log('Warming up: ' + contents);
    warmUp(contents, function (hotFood) {
      console.log('Warmed up: ' + hotFood);
      eat(hotFood, onReady);
    });
  });
}

function main() {
  const dayName = 'Thursday';
  const soupOfDay = (dayName === 'Wednesday')
    ? heinzBeansSoup
    : campbellsTomatoSoup;
  console.log('It\'s lunch time!');
  startTimer();

  eatLunch(soupOfDay, function () {
    stopTimer();
    console.log('Finished lunch');
  });
}

main();
