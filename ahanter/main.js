console.log('Hello!');

// Замените на свой API-ключ
var token = "";
var $city   = $("#city");
var $street = $("#street");
var $house  = $("#house");

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
$house.suggestions({
  token: token,
  type: "ADDRESS",
  hint: false,
  noSuggestionsHint: false,
  bounds: "house",
  constraints: $street
});

