//Conditional statements:-
// 1)if
// Eg 1)
let age = 25;

if(age >= 18);
{
    console.log(" You can vote");
}

if(age < 18);
{
    console.log("You cannot vote");
}

//Eg 2)
let  mode = "light";
let color;

if(mode === "light") 
{
     color = "white";
}

if(mode === "dark") 
{
     color = "black";
}

console.log(color);

// 2)if-else
     
    // Eg1)
    let mode1 = "dark"
    let color1 ;

    if(mode1 === "light")
    {
        color = "white";
    }
    else 
    {
      color = "black" ; 
    }

    console.log(color);

    // Eg2)  (voting)

    let age1 = 16;

    if(age1>=18)
    {
             console.log("You are eligible for voting")
    }
    else
        {
          console.log("You are not eligible for voting");
    }


    //Eg 3) (odd and even number)

    let a = 15;

    if( a%2 == 0)
    {
        console.log(a,"Even number");
    }
    else{
        console.log(a,"Odd number");
    }

    //syntax -->rules


    //3)else-if statement

    //Eg 1)

    let age2 = 45;

    if(age2<18)
    {
        console.log("junior")
    }
    else if (age2>60)
    {
         console.log("Senior")
    }
    else 
    {
         console.log("Middle");
    }

     



