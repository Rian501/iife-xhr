  let outputCarnDiv = document.getElementById('outputCarn')
  let outputHerbDiv = document.getElementById('outputHerb')

function showCarnivores (carnivores) {
  carnivores.forEach(function (carnAnimal) {
  	console.log("element", carnAnimal);
  	outputCarnDiv.innerHTML += `<p>${carnAnimal}</p>`
  });
}

function showHerbivores (herbivores) {
	herbivores.forEach(function (herbAnimal) {
		console.log("herbivores?", herbivores);
		outputHerbDiv.innerHTML += `<p>${herbAnimal}</p>`
	});
}

Predator.Carnivores.loadCarnivores(showCarnivores);
Predator.Herbivores.loadHerbivores(showHerbivores);





// function showHerbivores (herbivores) {
// 	console.log("herbivores?", herbivores);
// 	herbivores.forEach(function (herbAnimal) {
// 		var p = document.createElement('p');
// 		p.innerHTML += `${herbAnimal}`;
// 		outputDiv.appendChild('p');
// 	});
// }


// Why doesn't this work? The parameter is not of type Node?