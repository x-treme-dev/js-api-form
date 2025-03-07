console.log('API Dadata test');

// Замените на свой API-ключ
var token = "e6e693dd8c6e64338ba92d5801d64bec00ba0490";

var type  = "ADDRESS";
var $district = $("#district");
var $city   = $("#city");
var $street = $("#street");
var $building  = $("#building");

// регион и район
$district.suggestions({
  token: token,
  type: type,
  hint: false,
  bounds: "region-area"
});

// город и населенный пункт
$city.suggestions({
  token: token,
  type: type,
  hint: false,
  bounds: "city-settlement",
  constraints: $district
});

// улица
$street.suggestions({
  token: token,
  type: type,
  hint: false,
  bounds: "street",
  constraints: $city,
  count: 15
});

// дом
$building.suggestions({
  token: token,
  type: type,
  hint: false,
  noSuggestionsHint: false,
  bounds: "house",
  constraints: $street
});


//console.log($building.suggestions())