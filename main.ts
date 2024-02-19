// Task 45
function createCar(manufacturer: string, model: string, ...properties:[string, any][]):any {
    const car: any = {
     manufacturer,
     model,
    };

    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}

// Example usage :
const myCar: string = createCar("toyota","corolla",["color","red"],["optional feature","sunroof"],["speed","280 km/hour"]);

console.log(myCar);