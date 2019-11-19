'use strict';
/*
Задание 5
Напиши класс Car с указанными свойствами и методами.
*/

class Car {
  constructor({maxSpeed = 0, speed, lastSpeed, isOn, distance, price = 0}) {
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.lastSpeed = 0; //Добавила, чтобы посчитать расстояние после вызова mustang.turnOff();
    this.isOn = false;
    this.distance = 0;
    this._price = price;
  }

  static getSpecs(car){
    car.speed === 0 && !this.isOn ? // После mustang.turnOff(), выводит послднюю скорость и дистанцию
    console.log(
      `maxSpeed: ${car.maxSpeed}, Last speed: ${car.lastSpeed}, current speed: ${car.speed}, isOn: ${car.isOn}, Last distance: ${car.distance}, price: ${car.price}`
    )
     : console.log(
       `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
       )
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
    this.lastSpeed = this.speed;
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
    console.log('test2', this.speed);
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