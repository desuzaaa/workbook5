let threePointShooters = [
  {
    name: "Stephen Curry",
    team: "Golden State Warriors",
    position: "Guard",
    threePointPercentage: 42.1,
  },
  {
    name: "Klay Thompson",
    team: "Golden State Warriors",
    position: "Guard",
    threePointPercentage: 41.2,
  },
  {
    name: "Desmond Bane",
    team: "Memphis Grizzlies",
    position: "Guard",
    threePointPercentage: 40.8,
  },
  {
    name: "Kevin Huerter",
    team: "Sacramento Kings",
    position: "Guard",
    threePointPercentage: 40.2,
  },
  {
    name: "Buddy Hield",
    team: "Golden State Warriors",
    position: "Guard",
    threePointPercentage: 42.5,
  },
  {
    name: "Michael Porter Jr.",
    team: "Denver Nuggets",
    position: "Forward",
    threePointPercentage: 41.4,
  },
  {
    name: "Luke Kennard",
    team: "Memphis Grizzlies",
    position: "Guard",
    threePointPercentage: 44.0,
  },
  {
    name: "CJ McCollum",
    team: "New Orleans Pelicans",
    position: "Guard",
    threePointPercentage: 40.7,
  },
  {
    name: "Kyrie Irving",
    team: "Dallas Mavericks",
    position: "Guard",
    threePointPercentage: 40.2,
  },
  {
    name: "Bojan Bogdanovic",
    team: "Brooklyn Nets",
    position: "Forward",
    threePointPercentage: 41.1,
  },
];

let playersTBody = document.querySelector("#playersTBody")
console.log(playersTBody);

for (const shooter of threePointShooters) {
    
    let tr = document.createElement("tr");
    playersTBody.appendChild(tr)
    
    let td1 = document.createElement("td")
    td1.innerText = shooter.name
    playersTBody.appendChild(td1)

    let td2 = document.createElement("td")
    td2.innerText = shooter.team
    playersTBody.appendChild(td2)

    let td3 = document.createElement("td")
    td3.innerText = shooter.position
    playersTBody.appendChild(td3)

    let td4 = document.createElement("td")
    td4.innerText = shooter.threePointPercentage
    playersTBody.appendChild(td4)
}
