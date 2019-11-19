'use strict';
/*
Задание 5
Напиши класс Car с указанными свойствами и методами.
*/

class Car {
  constructor({maxSpeed = 0, speed, isOn, distance, price = 0}) {
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this._price = price;
  }

  static getSpecs(car){
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
    );
  }

  get price(){
    return this._price;
  }

  set price(price){
    this._price = price;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    this.speed = (this.speed + value) <= this.maxSpeed ? 
    this.speed + value 
    : this.maxSpeed; 
  }

  decelerate(value) {
     this.speed = (this.speed - value) < 0 ? 
    0 
    : this.speed - value;
  }
  
  drive(hours) {
    this.isOn ? 
    this.distance = this.distance + hours * this.speed
    : 0;
  }
};

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000