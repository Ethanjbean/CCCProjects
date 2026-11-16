var planets = [ 
        ['Pluto', 0.06], 
        ['Neptune', 1.148], 
        ['Uranus', 0.917], 
        ['Saturn', 1.139], 
        ['Jupiter', 2.640], 
        ['Mars', 0.3895], 
        ['Moon', 0.1655], 
        ['Earth', 1], 
        ['Venus', 0.9032], 
        ['Mercury', 0.377], 
        ['Sun', 27.9] 
    ];

function calculateWeight(weight, planetname) {
    const planet = planets.find(([name]) => name === planetname) ;
    const gravity = planet[1];
    return weight * gravity;
}

const select = document.getElementById("planets");

planets.forEach(([name]) => {
    const plan = document.createElement("option");
    plan.value = name;
    plan.textContent = name;
    select.appendChild(plan);
});

function handleClickEvent(e){
    var userweight = document.getElementById("user-weight").value;
    var planetname = document.getElementById("planets").value;
    var result = calculateWeight(parseFloat(userweight), planetname);
    
    document.getElementById("output").textContent = "If you were on " + planetname + ", you would weigh " + result.toFixed(2) + "lbs!";
}

const button = document.getElementById("calculate-button");

button.addEventListener("click", handleClickEvent);





// Write your JavaScript code here!