var magic = {};
var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


magic.divide_in_obj = function(arr){
	NumberSets = {};
	NumberSets["set_1"] = arr.slice(0,7);
	NumberSets["set_2"] = arr.slice(7,14);
	NumberSets["set_3"] = arr.slice(14,21);
	return NumberSets;
};

magic.userInputHandler = function(input,setOfNumbers){
	console.log(input)
	if(input == 1){
		return divider([divider(arr).set_2,divider(arr).set_1,divider(arr).set_3]);
	}
	else if(input == 2){
		return divider([divider(arr).set_1,divider(arr).set_2,divider(arr).set_3]);
	}
	else if(input == 3){
		return divider([divider(arr).set_2,divider(arr).set_1,divider(arr).set_3]);
	}
};

magic.main = function (){
	var numbers = magic.arrayOfNumbersGenerator();
	var setOfNumbers = magic.divide_in_obj(numbers);
	magic.displayer(setOfNumbers)

};

magic.displayer = function(setOfNumbers){
	var numbersToDisplay = "SET 1==>  "+setOfNumbers.set_1.join(' ')+"\nSET 2==>  "+setOfNumbers.set_2.join(' ')+'\nSET 3==>  '+setOfNumbers.set_3.join(' ')+'\n';
	rl.question(numbersToDisplay,magic.userInputHandler);
}

magic.arrayOfNumbersGenerator = function(){
	var numbers = [];
	while(numbers.length<=21){
		var number = Math.round(Math.random()*21);
		if(numbers.indexOf(number)==-1) numbers.push(number);
	};
	return numbers;
};

magic.main()
