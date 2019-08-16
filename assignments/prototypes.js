/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  

function GameObject (attr){
  this.createdAt = attr.createdAt;
  this.name = attr.name;
  this.dimensions = attr.dimensions; //(These represent the characters size in the video game)
}
 GameObject.prototype.destroy = function(){
     return `${this.name} was removed from the game.`;
   };

 function CharacterStats (stats){
   GameObject.call(this, stats);
   this.healthPoints = stats.healthPoints;
 }

 CharacterStats.prototype = Object.create(GameObject.prototype);

  CharacterStats.prototype.takeDamage = function (){
     return `${this.name} took damage.`;
   }; 


 function Humanoid(char){ //(Having an appearance or character resembling that of a human.) ===
   GameObject.call(this, char);
   CharacterStats.call(this, char);
   this.team = char.team;
   this.weapons = char.weapons;
   this.language = char.language;
 }

 Humanoid.prototype = Object.create(CharacterStats.prototype);

   Humanoid.prototype.greet = function (){
     return `${this.name} offers a greeting in ${this.language}.`;
   }; 


/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


 const mage = new Humanoid({
   createdAt: new Date(),
   dimensions: {
     length: 2,
     width: 1,
     height: 1,
   },
   healthPoints: 5,
   name: 'Bruce',
   team: 'Mage Guild',
   weapons: [
     'Staff of Shamalama',
   ],
   language: 'Common Tongue',
 });

 const swordsman = new Humanoid({
   createdAt: new Date(),
   dimensions: {
     length: 2,
     width: 2,
     height: 2,
   },
   healthPoints: 15,
   name: 'Sir Mustachio',
   team: 'The Round Table',
   weapons: [
     'Giant Sword',
     'Shield',
   ],
   language: 'Common Tongue',
 });

 const archer = new Humanoid({
   createdAt: new Date(),
   dimensions: {
     length: 1,
     width: 2,
     height: 4,
   },
   healthPoints: 10,
   name: 'Lilith',
   team: 'Forest Kingdom',
   weapons: [
     'Bow',
     'Dagger',
   ],
   language: 'Elvish',
 });


 console.log(mage.createdAt); // Today's date
 console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
 console.log(swordsman.healthPoints); // 15
 console.log(mage.name); // Bruce
 console.log(swordsman.team); // The Round Table
 console.log(mage.weapons); // Staff of Shamalama
 console.log(archer.language); // Elvish
 console.log(archer.greet()); // Lilith offers a greeting in Elvish.
 console.log(mage.takeDamage()); // Bruce took damage.
 console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


 // Stretch task: 
 // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
 // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
 // * Create two new objects, one a villain and one a hero and fight it out with methods!


  function Hero (param){
    Humanoid.call(this, param);
    this.name = param.name;
    this.team = param.team;
    this.weapons = param.weapons;
    this.healthPoints = param.healthPoints;
    this.attackPoints = param.attackPoints
  }

  Hero.prototype = Object.create(Humanoid.prototype);

  Hero.prototype.intro = function(){
    return `The hero of the ${this.team}, ${this.name} has entered the battlefield`;
  }

  Hero.prototype.items = function(){
    return `Available weapons: ${this.weapons} Health Points: ${this.healthPoints}`;
    
  }

  Hero.prototype.heroAttack = function(){
    const damage = this.healthPoints - iceKing.attackPoints;
    return `${this.name} was ambushed by ${iceKing.name} and recieved damage that reduced Health Points to ${damage}`;
  }

   Hero.prototype.win = function(){
    return `${this.name} wins`;
  }

  function Villian (param){
    Humanoid.call(this, param);
    Hero.call(this, param);
    this.name = param.name;
    this.team = param.team;
    this.healthPoints = param.healthPoints;
    this.attackPoints = param.attackPoints
    this.damage = param.damage;
  }

   Villian.prototype = Object.create(Humanoid.prototype);

    Villian.prototype.intro = function(){
    return `The ${this.name} of the ${this.team}, has entered the battlefield`;
  }

  Villian.prototype.items = function(){
    return `Available weapons: ${this.weapons} Health Points: ${this.healthPoints}`;
    
  }

  Villian.prototype.attack = function(){
     this.damage = this.healthPoints - finn.attackPoints;
        return `The ${this.name} was attacked by ${finn.name} and recieved damage that reduced Health Points to ${this.damage}`;
  }

  Villian.prototype.secondAttack = function(){
     this.damage = this.damage - finn.attackPoints;
        return `${finn.name} attacks again and reduces ${this.name} Health to ${this.damage} points. ${this.name} loses crown during fight, turns into ${simon.name}`;
  }


  const iceKing = new Villian({
    createdAt: new Date(),
        dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 20,
    attackPoints: 5,
    damage: 0,
    name: 'Ice King',
    team: 'Ice Kingdom',
    weapons: [
      'Ice Crown',
      'Penguins'
    ],
    language: 'English'

  });

  const finn = new Hero({
    createdAt: new Date(),
        dimensions: {
      length: 2,
      width: 2,
      height: 3,
    },
    healthPoints: 20,
    attackPoints: 8,
    name: 'Finn the Human',
    team: 'Land of Ooo',
    weapons: [
      'Finn Sword',
      'Grass Sword',
    ],
    language: 'English',
  });

  const simon = new Hero({
    createdAt: new Date(),
        dimensions: {
      length: 2,
      width: 2,
      height: 3,
    },
    healthPoints: 12,
    attackPoints: 8,
    name: 'Simon Petrikov',
    team: 'Land of Ooo',
    weapons: "Smart",
    language: 'English',
  });

  
  console.log(finn.intro());
  console.log(finn.items());
  console.log(iceKing.intro());
  console.log(iceKing.items());
  console.log(finn.heroAttack());
  console.log(iceKing.attack());
  console.log(iceKing.secondAttack());
  console.log(finn.win());
