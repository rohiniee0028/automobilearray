// using Object.create()--------

const automobile ={
    wheels:"4",
    engine:"1",
    stearing:"1",
    runOn:"roads",
    transport:"people",
}
const car1 = Object.create(automobile);
car1.runsBy="petrol";
console.log("car :",car1);

const bus1 = Object.create(automobile);
bus1.runsBy="Diesel";
console.log("bus :",bus1);

const electricVehicle1 = Object.create(automobile);
electricVehicle1.runsBy = "Battery";
electricVehicle1.engine = "Electric Motors";
console.log("electricVehicle :",electricVehicle1);

const trucks1 = Object.create(automobile);
trucks1.runBy = "Diesel";
console.log("trucks :",trucks1);


//using constructor function-----


class Automobile {
    constructor(w,e,s,r,t){
        this.wheels = w;
        this.engine = e;
        this.stearing = s;
        this.runOn = r;
        this.transport = t;
    }  
}

let a1 = new Automobile(4,1,1,"roads","people");
console.log(a1);
class Car extends Automobile{
   constructor(w,e,s,r,t,ru){
     super(w,e,s,r,t);
     this.runxBy = ru;
   }
}
let car = new Car(4,1,1,"roads","people","petrol");
console.log("car:",car);

class Bus extends Automobile{
    constructor(w,e,s,r,t,ru){
      super(w,e,s,r,t);
      this.runxBy = ru;
    }
 }

let bus = new Bus(4,1,1,"roads","people","Diesel");
console.log("bus :",bus);

class EV extends Automobile{
    constructor(w,e,s,r,t,ru){
      super(w,e,s,r,t);
      this.runxBy = ru;
    }
 }

let electricVehicle = new EV(4,"Electric Motors",1,"roads","people","Battery");
console.log("electricVehicle :",electricVehicle);

class Trucks extends Automobile{
    constructor(w,e,s,r,t,ru){
      super(w,e,s,r,t);
      this.runxBy = ru;
    }
 }


let trucks = new Trucks(4,1,1,"roads","people","Diesel");
console.log("trucks :",trucks);
