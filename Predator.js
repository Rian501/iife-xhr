var Predator = (function () {
  var carnivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var carnivoreLoader = new XMLHttpRequest();
      carnivoreLoader.open("GET", "carnivores.json");
      carnivoreLoader.send();

      carnivoreLoader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);
        console.log("carnivores?", carnivores);
        callbackToInvoke(carnivores);

        // Invoke the callback function so that the caller knows that the process is complete. Make sure to pass the carnivore array as an argument.

      });
    }
  }
})();