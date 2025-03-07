console.log('API Dadata');

// Замените на свой API-ключ
var token = "e6e693dd8c6e64338ba92d5801d64bec00ba0490";
var $city   = $("#city");
var $street = $("#street");
var $building  = $("#building");

// город и населенный пункт
$city.suggestions({
  token: token,
  type: "ADDRESS",
  hint: false,
  bounds: "city-settlement"
});

// улица
$street.suggestions({
  token: token,
  type: "ADDRESS",
  hint: false,
  bounds: "street",
  constraints: $city
});

// дом
$building.suggestions({
  token: token,
  type: "ADDRESS",
  hint: false,
  noSuggestionsHint: false,
  bounds: "house",
  constraints: $street
});

