let house = {
    areas: {livingRoom: { items: ['tv','sofa'] },
            bedroomOne: { items: ['bed','washing machine'], windows: 3 },
            bedroomTwo: { items: ['bed','bed','desk'], windows: 4 },
            kitchen:{ items: ['fridge','broken chair'] },},
    garden: [true, 'Red Rose'],
    garage: { car: { color: 'red', wheels: 4, honk: ()=>{alert("Beep")}}}
        }

// Find total number of areas in the house

let NumAreas = Object.keys(house.areas)
console.log(NumAreas.length)

// Add a dining table to the living room

console.log(house.areas.livingRoom.items)
house.areas.livingRoom.items.push('dining table')
console.log(house.areas.livingRoom.items)

// Add a stove to the kitchen

console.log(house.areas.kitchen.items)
house.areas.kitchen.items.push('stove')
console.log(house.areas.kitchen.items)

// Remove the washing machine from bedroomOne

console.log(house.areas.bedroomOne.items)
house.areas.bedroomOne.items.splice(1,1)
console.log(house.areas.bedroomOne.items)

// Find the total number of beds in all rooms

var numOfBeds1 = 0;
for(var i=0;i<house.areas.bedroomOne.items.length;i++){
    if(house.areas.bedroomOne.items[i] === "bed")
    numOfBeds1++;
}

var numOfBeds2 = 0;
for(var i=0;i<house.areas.bedroomTwo.items.length;i++){
    if(house.areas.bedroomTwo.items[i] === "bed")
    numOfBeds2++;
}

console.log(numOfBeds1+numOfBeds2)

// Change the color of the car to blue

carColor = house.garage.car.color
console.log(carColor)
newCarColor = carColor.replace("red","blue")
console.log(newCarColor)

// Add a another car to the garage with a honk function

console.log(house.garage)
house.garage = { car: { color: 'red', wheels: 4, honk: ()=>{alert("Beep")}},
                 extraCar: { color: 'green', wheels: 4, honk: ()=>{alert("Poop")}}}
console.log(house.garage)

// Make the new car honk

house.garage.extraCar.honk.call()

// Change the 'broken chair' in the kitchen to 'new chair'

console.log(house.areas.kitchen.items)
house.areas.kitchen.items.splice(1,1,'new chair')
console.log(house.areas.kitchen.items)

// If the house has a garden, console.log the name of the flower

if(house.garden[0] === true)
{console.log(house.garden[1])}