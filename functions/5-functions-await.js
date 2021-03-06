'use strict';
const { startTimer, stopTimer } = require('./timer');

const campbellsTomatoSoup = {
  contents: 'tomato soup',
  weightInOz: 12
};

function openCan(foodCan) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(foodCan.contents);
    }, 2000);
  });
}

function warmUp(food) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('hot ' + food);
    }, 4000);
  });
}

function eat(food) {
  return new Promise(resolve => {
    console.log('Eating: ' + food);
    setTimeout(() => {
      console.log('Finished eating: ' + food);
      resolve();
    }, 4000);
  });
}

async function eatLunch(cannedFood) {
  const contents = await openCan(cannedFood);
  console.log('Opened can: ' + contents);
  const hotFood = await warmUp(contents);
  console.log('Warmed up: ' + hotFood);
  await eat(hotFood);
  return;
}

async function main() {
  console.log('It\'s lunch time!');
  startTimer();
  await eatLunch(campbellsTomatoSoup);
  stopTimer();
  console.log('Finished lunch');
}

main();
