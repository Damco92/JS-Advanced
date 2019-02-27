class Ship {
  constructor(name, pilot, fuleTankCapacity, currentLocation) {
    this.name = name;
    this.pilot = pilot;
    this.fuleTankCapacity = fuleTankCapacity;
    this.currentLocation = currentLocation;
  }
  startEngins() {
    return `Enginins started!`;
  }
  takeOff() {
    return `We are taking off!`;
  }
  land() {
    return `Preparing to land!`;
  }
}

class Fighter extends Ship {
  constructor(
    name,
    pilot,
    fuleTankCapacity,
    currentLocation,
    weapons,
    shield,
    NumberOfKills
  ) {
    super(name, pilot, fuleTankCapacity, currentLocation);
    this.weapons = weapons;
    this.shield = shield;
    this.NumberOfKills = NumberOfKills;
  }
  shootWeapon01() {
    return `Weapon No. 1 have been shooted`;
  }
  shootWeapon02() {
    return `Weapon No. 2 have been shooted`;
  }
  shootWeapon03() {
    return `Weapon No. 3 have been shooted`;
  }
}

class CargoShip extends Ship {
  constructor(
    name,
    pilot,
    fuleTankCapacity,
    currentLocation,
    cargoCapacity,
    tradingRoutManifest,
    loadingCranes
  ) {
    super(name, pilot, fuleTankCapacity, currentLocation);
    this.cargoCapacity = cargoCapacity;
    this.tradingRoutManifest = tradingRoutManifest;
    this.loadingCranes = loadingCranes;
  }
  load() {
    return `Shipment being loaded.`;
  }
  unload() {
    return `Shipment being unloaded.`;
  }
}

class MiningShip extends Ship {
  constructor(
    name,
    pilot,
    fuleTankCapacity,
    currentLocation,
    miningTools,
    miningTypes,
    miningStorageCapacity
  ) {
    super(name, pilot, fuleTankCapacity, currentLocation);
    this.miningTools = miningTools;
    this.miningTypes = miningTypes;
    this.miningStorageCapacity = miningStorageCapacity;
  }
  mineHarvest() {
    return `We are mining, sir!`;
  }
  setStorageTemperature(degree) {
    return `Storage temperature set to ${degree}`;
  }
}

let fighters = [];
function createFighter() {
  let fighterName = $('#fighterShipName').val();
  let fighterPilot = $('#fighterPilot').val();
  let fighterFuelTank = $('#fighter_fuel_tank_cappacity').val();
  let fighterLocation = $('#currentLocation').val();
  let weapons = $('#weapons').val();
  let shields = $('#shield').val();
  let numOfKills = $('#numOfKills').val();
  fighters.push(
    new Fighter(
      fighterName,
      fighterPilot,
      fighterFuelTank,
      fighterLocation,
      weapons,
      shields,
      numOfKills
    )
  );
  console.log(fighters);
  // return fighters;
}
$('#fighterBtn').on('click', function() {
  createFighter();
});

const displayFighters = fighters => {
  let i = 1;
  for (let fighter of fighters) {
    $('#displayArea').append(`
      <div class="row">
        <div class="col-md-6">
          <img src="./images/fighter${i}.jpg" alt="fighter${i} image"/>
        </div>
        <div class="col-md-6">
          <p>Name: ${fighter.fighterName} Pilot: ${
      fighter.fighterPilot
    } Fuel: ${fighter.fighterFuelTank} Location: ${
      fighter.fighterLocation
    } Weapons: ${fighter.weapons}
          Shields: ${fighter.shields} Num of Kills: ${fighter.numOfKills} 
          </p>
        </div>
      </div>
  `);
  }
};
