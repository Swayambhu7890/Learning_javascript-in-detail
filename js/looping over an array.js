// Looping over an array
let heroes = ["Ironman", "Thor", "Hulk", "Spiderman", "antman", "Panther"];
console.log(heroes[0]);
console.log(heroes[1]);

//OR 1)(By  for-loop)
for( let  i = 0;  i < heroes.length;  i++)   //heroes.length(array.length)
{
console.log(heroes[i]);   // where i is idx(index)
}

// 2)(By  for-of loop)
for (let hero of heroes)   //hero is variable declared
{
    console.log(hero);
}

 //Eg 2)
 let cities = ["Delhi", "Pune", "Mumbai", "Hyderabad", "Gurgaon"];
 for (let city of cities) 
{
   console.log(city.toUpperCase());  //toUppercase all letters in capital
 }

