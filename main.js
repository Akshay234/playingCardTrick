var magic = {};

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

magic.divide_in_obj = function(arr){
	NumberSets = {};
	NumberSets["set_1"] = arr.slice(0,7);
	NumberSets["set_2"] = arr.slice(7,14);
	NumberSets["set_3"] = arr.slice(14,21);
	// return Object.keys(NumberSets).map(function(key){
	// 	return NumberSets[key];
	// });
	return NumberSets;
};

console.log(magic.divide_in_obj(arr));



magic.userInputHandler = function(input){
	var divider = magic.divide_in_obj;
	if(input == 1){
		return divider([divider(arr).set_2,divider(arr).set_1,divider(arr).set_3]);
		arr = [divider(arr).set_2,divider(arr).set_1,divider(arr).set_3];
	}
	else if(input == 2){
		arr = [divider(arr).set_1,divider(arr).set_2,divider(arr).set_3];
		return divider([divider(arr).set_1,divider(arr).set_2,divider(arr).set_3]);
	}
	else if(input == 3){
		arr = [divider(arr).set_1,divider(arr).set_3,divider(arr).set_2];
		return divider([divider(arr).set_2,divider(arr).set_1,divider(arr).set_3]);
	}
};
