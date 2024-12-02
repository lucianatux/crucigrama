// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "1. Movimiento de los pies al andar. Secuencia de acciones para lograr un objetivo.",
					answer: "pasos",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "3. Género literario o artístico que explora las emociones humanas. Suceso o situación que causa gran conmoción.",
					answer: "drama",
					position: 3,
					orientation: "across",
					startx: 7,
					starty: 1
				},
				{
					clue: "5. Explicación clara y precisa de las características de algo.",
					answer: "descripcion",
					position: 5,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				{
					clue: "8. Cambio radical y profundo. Vuelta completa alrededor de un eje.",
					answer: "revolucion",
					position: 8,
					orientation: "across",
					startx: 1,
					starty: 5
				},
				{
					clue: "10.  Captación, reconocimiento del sentido y la relevancia de cualquier aspecto de la realidad o de uno (a) mismo (a).",
					answer: "conciencia",
					position: 10,
					orientation: "across",	
					startx: 2,
					starty: 7
				},
				{
					clue: "13. Conjunto organizado de datos procesados que constituyen un mensaje que cambia el estado de conocimiento del sujeto o sistema que recibe dicho mensaje.",
					answer: "informacion",
					position: 13,
					orientation: "across",
					startx: 1,
					starty: 9
				},
				{
					clue: "16. Adquirir con destreza algo difícil o que no se esperaba.",
					answer: "cazar",
					position: 16,
					orientation: "across",
					startx: 1,
					starty: 11
				},
				{
					clue: "17. Estructura o lugar de conexión entre lo divino y lo humano.",
					answer: "altar",
					position: 17,
					orientation: "across",
					startx: 7,
					starty: 11
				},
				{
					clue: "1. Dominio, facultad que alguien tiene para mandar o ejecutar algo.",
					answer: "poder",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "2. En una de sus acepciones: existir.",
					answer: "ser",
					position: 2,
					orientation: "down",
					startx: 5,
					starty: 1
				},
				{
					clue: "4. En ese lugar. Adverbio demostrativo de lugar.",
					answer: "ahi",
					position: 4,
					orientation: "down",
					startx: 9,
					starty: 1
				},
				{
					clue: "6. Lo que espero que él haga para que haya un trato.",
					answer: "pacte",
					position: 6,
					orientation: "down",
					startx: 7,
					starty: 3
				},
				{
					clue: "7. Negación",
					answer: "no",
					position: 7,
					orientation: "down",
					startx: 11,
					starty: 3
				},
				{
					clue: "9. Brillar, resplandecer. Llevar a la vista.",
					answer: "lucir",
					position: 9,
					orientation: "down",
					startx: 5,
					starty: 5
				},
				{
					clue: "11. Unir. Poner juntas o armonizar varias cosas.",
					answer: "aunar",
					position: 11,
					orientation: "down",
					startx: 11,
					starty: 7
				},
				{
					clue: "12. Afirmación.",
					answer: "si",
					position: 12,
					orientation: "down",
					startx: 1,
					starty: 8
				},
				{
					clue: "14. Superficie, vista o lado de una cosa.",
					answer: "faz",
					position: 14,
					orientation: "down",
					startx: 3,
					starty: 9
				},
				{
					clue: "15. Cada uno de los órganos o apéndices pares que utilizan algunos animales para volar.",
					answer: "ala",
					position: 15,
					orientation: "down",
					startx: 7,
					starty: 9
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
