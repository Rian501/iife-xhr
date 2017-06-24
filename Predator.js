var Predator = (function (oldPred) {
  let carnivores = Object.create(null);

      carnivores.loadCarnivores = function (callbackToInvoke) {
      var carnivoreLoader = new XMLHttpRequest();      
      carnivoreLoader.open("GET", "carnivores.json");
      carnivoreLoader.send();

      carnivoreLoader.addEventListener("load", function () {
        carnivores = JSON.parse(event.target.responseText);
        console.log("carnivores?", carnivores);
        callbackToInvoke(carnivores);
      })
    }
    oldPred.Carnivores = carnivores;
    return oldPred
  }(Predator || {}));



  Predator = (function (oldPred) {
   let herbivores = Object.create(null);

    herbivores.loadHerbivores = function (callbackToShow) {
      var herbivoreLoader = new XMLHttpRequest();      
      herbivoreLoader.open("GET", "herbivores.json");
      herbivoreLoader.send();
    
      herbivoreLoader.addEventListener("load", function () {
        herbivores = JSON.parse(event.target.responseText);
        console.log("herbivores?", herbivores);
        callbackToShow(herbivores);
      });
    }
    oldPred.Herbivores= herbivores;
    return oldPred;
  }(Predator || {}));


  //I changed the pattern to match the way we did IIFE patterns in class together, and did not use the pattern displayed in the startup code for this ex. I'd like to see how it would work with the boilerplate code we were given.
