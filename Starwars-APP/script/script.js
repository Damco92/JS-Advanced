$('#fighterLink').on('click', function() {
  showFighterForm();
});
$('#cargoLink').on('click', function() {
  showCargoForm();
});
$('#miningLink').on('click', function() {
  showMinerForm();
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
