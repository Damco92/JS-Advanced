class Sship {
  constructor({
    name,
    pilot,
    fuleTankCapacity,
    currentLocation,
    typeOfStarship
  }) {
    this.name = name;
    this.pilot = pilot;
    this.fuleTankCapacity = fuleTankCapacity;
    this.currentLocation = currentLocation;
    this.typeOfStarship = typeOfStarship;
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

class Fighter extends Sship {
  constructor({
    name,
    pilot,
    fuleTankCapacity,
    currentLocation,
    typeOfStarship,
    weapons,
    shield,
    NumberOfKills
  }) {
    super({ name, pilot, fuleTankCapacity, currentLocation, typeOfStarship });
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

class CargoShip extends Sship {
  constructor({
    name,
    pilot,
    fuleTankCapacity,
    currentLocation,
    typeOfStarship,
    cargoCapacity,
    tradingRoutManifest,
    loadingCranes
  }) {
    super({ name, pilot, fuleTankCapacity, currentLocation, typeOfStarship });
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

class MiningShip extends Sship {
  constructor({
    name,
    pilot,
    fuleTankCapacity,
    currentLocation,
    typeOfStarship,
    miningTools,
    miningTypes,
    miningStorageCapacity
  }) {
    super({ name, pilot, fuleTankCapacity, currentLocation, typeOfStarship });
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
