// Personen-Objekt erstellen
var person = {
    vorname: "Kai",
    nachname: "Effenberger",
    geburtsjahr: 1987,
  
    // Funktion zum Berechnen des Alters
    berechneAlter: function() {
    console.log(this.geburtsjahr);
      var aktuellesJahr = new Date().getFullYear();
      return aktuellesJahr - this.geburtsjahr;
    }
  };

  // Beispielaufruf der Funktion und Ausgabe des Alters
  console.log(person.vorname + " ist " + person.berechneAlter() + " Jahre alt.");
  
let array = [1, 2, 3]
array.s