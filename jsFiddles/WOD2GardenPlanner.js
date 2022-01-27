class Bed {
  constructor(name, number) {
    this.name = name;
    this.plants = number;
  }

  addPlants(numPlants) {
    this.plants = this.plants + numPlants;
  }
}


class Garden {
  constructor(name, beds) {
    this.name = name;
    this.beds = beds;
  }

  summary() {
    //loop though beds array, print name+ plant count
    // Prints: "MyGarden has 3 beds and 19 plants"
    let bedSize = 0;
    let plantSize = 0;
    bedSize = this.beds.length;
    for (let itr of this.beds) {
      plantSize += itr.plants;
    }
    if (bedSize > 1 && plantSize > 1) {
      return(`${this.name} has ${bedSize} beds and ${plantSize} plants`);
    }
  }

  favorites() {
    let returnList = [];

    for (let itr of this.beds) {
      if (itr.plants > 12) {
        returnList.push(itr.name);
      }
    }
    if (returnList.length > 1) {
      return(`Your favorite plants are: ${returnList}`);
    } else {
      return(`You have no favorites in this garden`);
    }

  }
}



const tomatoBed = new Bed('Tomato', 10);
const potatoBed = new Bed('Potato', 3);
const eggplantBed = new Bed('Eggplant', 6);
const myGarden = new Garden('MyGarden', [tomatoBed, potatoBed, eggplantBed]);
console.log(myGarden.summary()); // Prints: "MyGarden has 3 beds and 19 plants"
console.log(myGarden.favorites()); // Prints: "You have no favorites in this garden"
tomatoBed.addPlants(10);
potatoBed.addPlants(15);
console.log(myGarden.summary()); // Prints: "MyGarden has 3 beds and 44 plants"
console.log(myGarden.favorites()); // Prints: "Your favorite plants are: Tomato,Potato"
