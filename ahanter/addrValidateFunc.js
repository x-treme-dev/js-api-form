function addr_replace (yan_addr) {
	let yandex_replace = {
		"Чукъурча"					 : "Чукурча",
		"им.+Косухина+А.Н." 		 : "Косухина",
		"им.+Матэ+Залки"			 : "имени+Мате+Залки",
		"Генерал-майора+П.П.Яременко": "улица+Генерала+Яременко",
		"Менгли-Гирей"				 : "Менгли-Гирея",
		"Булгъанакъ"                 : "Булганак"
	};
	for(it in yandex_replace) {	
		if (yan_addr.indexOf(it) != -1) 
			yan_addr = yan_addr.replace(it, yandex_replace[it]);
	}
	return yan_addr;
}

function streetNotEntersCity (city, street) {
	let sc = {
		"пгт. Грэсовский"   : ["энергетиков", "кржижановского", "яблочкова"],
		"пгт. Аэрофлотский" : ["мальченко"],
		"пгт. Комсомольское": ["монтажная", "советский"]
	};
	city   = city.replace(/\s+/g, '').toLowerCase();
	street = street.replace(/\s+/g, '').toLowerCase();
  
	for (var it in sc) {
  		if (sc[it].includes(street)) 
  			return `В населенном пункте "${city}" отсутствует улица "${street}".\nПожалуйста, выберите в качестве населенного пункта "${sc[it]}"`
	}
	return '';
}