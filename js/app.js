//name our angular app
angular.module('firstApp',[])

.controller('mainController', function(){
	//bind this to vm ( view - model)
	var vm= this;

	//define var and objects on this
	//this lets them be available to our views
	//define a basic var
	vm.message = 'Hey there! come and see how good I look!';

	//define a list of items
	vm.computers=[
		{name: 'MacBook Pro', color: 'Silver', nerdness: 7},
		{name: 'Yoga 2 Pro', color: 'Gray', nerdness: 6},
		{name: 'Chromebook', color: 'Black', nerdness: 5}
	];



	//informartion that comes from our form
	vm.computerData={};

	vm.addComputer= function(){
		//add a computer to the list
		vm.computers.push({
			name: vm.computerData.name,
			color: vm.computerData.color,
			nerdness: vm.computerData.nerdness
		});

		//after our computer has been added, clean the form
		vm.computerData={};
	};

});