//ADD FLOORS
let noOfFloors = 4
let noOFLifts = 1

let add =  document.querySelector('#add-floor-btn');
add.addEventListener('click',addFloor);

function addFloor(){
    let topFloor = document.querySelector('.top');
    let newfloor = document.createElement('div');

    newfloor.classList.add("floor");
    newfloor.innerHTML = `
        <div class="floor-btn-container" data-floor="${noOfFloors}">
            <div class="floor-btn" id="up-btn">UP</div>
            <div class="floor-btn" id="down-btn">DOWN</div>
        </div>
    `;
    topFloor.before(newfloor);
    ++noOfFloors;
    topFloor.classList.remove("top");
    newfloor.classList.add("top");
}

//REMOVE FLOORS
let remove =  document.querySelector('#remove-floor-btn');
remove.addEventListener('click',removeFloor);

function removeFloor(){
    let floors = document.querySelectorAll('.floor');
    let topFloor = floors[0];

    if(floors.length === 1) {
        alert("Are you going to remove all the floors ?!!!");
        return;
    }

    topFloor.remove();
    floors[1].classList.add("top");
}


//ADD ELEVATORS
let addElevator =  document.querySelector('#add-lift-btn');
addElevator.addEventListener('click',addLift);

function addLift(){

    let lifts = document.querySelectorAll(".lift")
    let leftPosition = (lifts.length+2)*5;

    if(leftPosition >= 100){
        alert("Lift Overflow !!!");
        return;
    }
    let groundFloor = document.querySelector('.ground');

    let newLift = document.createElement('div');
    newLift.classList.add("lift");
    newLift.style.left = `${leftPosition}%`;
    noOFLifts++;
    newLift.setAttribute("data-lift" , noOFLifts);

    groundFloor.appendChild(newLift);
}

//REMOVE ELEVATORS
let removeElevator =  document.querySelector('#remove-lift-btn');
removeElevator.addEventListener('click',removeLift);

function removeLift(){
    let lifts = document.querySelectorAll('.lift');
    let lastLift = lifts[lifts.length-1];

    if(lifts.length === 1) {
        alert("Are you going to remove all the lifts ?!!!");
        return;
    }
    lastLift.remove();
}

//MOVE ELEVATORS
let elevators = [];



