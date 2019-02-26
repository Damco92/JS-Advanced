$('#fighterLink').on('click', function() {
  showFighterForm();
});
$('#cargoLink').on('click', function() {
  showCargoForm();
});
$('#miningLink').on('click', function() {
  showMinerForm();
});
$('#fighterBtn').on('click', function() {
  function createFighterShip() {
    let fighters = [];
    let fighterName = $('#fighterShipName').val();
    let fighterPilot = $('#fighterPilot').val();
    let fighterFuelCapacity = $('#fighter_fuel_tank_cappacity').val();
    let fighterLocation = $('#currentLocation').val();
    let fighterWeapons = $('#weapons').val();
    let fighterShields = $('#shield').val();
    let fighterKills = $('#num_of_kills').val();

    fighters.push(
      new Fighter({
        name: fighterName,
        pilot: fighterPilot,
        fuleTankCapacity: fighterFuelCapacity,
        currentLocation: fighterLocation,
        weapons: fighterWeapons,
        shield: fighterShields,
        NumberOfKills: fighterKills
      })
    );
    console.log(fighters);
    return fighters;
  }
});

$('#cargoBtn').on('click', function() {
  function createCargoShip() {
    let cargos = [];
    let cargoName = $('#cargoShipName').val();
    let cargoPilot = $('#cargoPilot').val();
    let cargoFuelCapacity = $('#cargo_fuel_tank_cappacity').val();
    let cargoLocation = $('#cargoCurrentLocation').val();
    let cargoCapacity = $('#cargoCapacity').val();
    let traidingRoute = $('#traidingRoute').val();
    let loadingCranes = $('#loadingCranes').val();

    fighters.push(
      new Fighter({
        name: cargoName,
        pilot: cargoPilot,
        fuleTankCapacity: cargoFuelCapacity,
        currentLocation: cargoLocation,
        cargoCapacity: cargoCapacity,
        traidingRoute: traidingRoute,
        loadingCrantes: loadingCranes
      })
    );
    console.log(cargos);
    return cargos;
  }
});

const showFighterForm = () => {
  $('#body').html('');
  $('#generalForm').addClass('display-none');
  $('#fighterForm').removeClass('display-none');
  $('#cargoForm').addClass('display-none');
  $('#minerForm').addClass('display-none');
};

const showCargoForm = () => {
  $('#body').html('');
  $('#generalForm').addClass('display-none');
  $('#fighterForm').addClass('display-none');
  $('#cargoForm').removeClass('display-none');
  $('#minerForm').addClass('display-none');
};

const showMinerForm = () => {
  $('#body').html('');
  $('#generalForm').addClass('display-none');
  $('#fighterForm').addClass('display-none');
  $('#cargoForm').addClass('display-none');
  $('#minerForm').removeClass('display-none');
};
