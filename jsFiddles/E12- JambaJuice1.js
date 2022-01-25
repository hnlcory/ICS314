// 2 Attempts, #1: DNF, #2: 26:12


class MenuItem{
	constructor(name,ingr,price,cal){
  	this.name=name;
    this.ingr=ingr;
    this.price=price;
    this.cal=cal;
  }
}

let PapayaSunrise= new MenuItem("PapayaSunrise",["papaya","strawberry","peach"],{small:5.15,medium:5.75,large:6.55},{small:190,medium:280,large:330});

let PeachPerfection= new MenuItem("PeachPerfection",["mango","strawberry","peach"],{small:5.15,medium:5.75,large:6.55},{small:210,medium:320,large:360});

let StrawberryDragon= new MenuItem("StrawberryDragon",["pitaya","strawberry","orange","passionfruit","mago","banana"],{small:5.85,medium:6.25,large:6.85},{small:360,medium:480,large:610});

let StrawberryWhirl= new MenuItem("StrawberryWhirl",["banana","strawberry","apple"],{small:5.15,medium:5.75,large:6.55},{small:210,medium:310,large:380});

class Menu{
	constructor(){
  	this.menuItems=[];
  }
  	addMenuItem(menuItem){
    	this.menuItems.push(menuItem);
    }
    findMenuItems(ingredient){
    	let returnList = [];
    	for (let Item of this.menuItems){
      	if (Item.ingr.indexOf(ingredient) >=0){
        	returnList.push(Item);
        }
      }
      return returnList;
    }
}

let myMenu = new Menu();

myMenu.addMenuItem(PapayaSunrise);
myMenu.addMenuItem(PeachPerfection);
myMenu.addMenuItem(StrawberryDragon);
myMenu.addMenuItem(StrawberryWhirl);

console.log(myMenu);
console.log(myMenu.findMenuItems("strawberry"));
console.log(myMenu.findMenuItems("pitaya"));
console.log(myMenu.findMenuItems("banana"));
