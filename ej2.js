/*

In an epic battle between zombies 🧟 and humans 👮‍♂️, both sides have a list of fighters with specific attack powers.
The battle unfolds in rounds, and each round pits each fighter against their opponent.
The side with the greater attack power wins the round, and their power is added to the next fighter on their team.
In case of a tie, both fighters fall and do not affect the next round.
Given two strings zombies and humans, where each digit (from 1 to 9) represents a fighter's attack power, determine who is left at the end and with how much attack power.

Important: Both strings will always have the same length.
The output is a string representing the final result of the battle.

If a zombie is left, return its power followed by "z", for example "3z".
If a human is left, return its power followed by "h", for example "2h".
If there's a tie and neither is left with power at the end, return "x".
Here's an example:

const zombies = '242';
const humans = '334';

const result = battleHorde(zombies, humans);  // -> "2h"

// first round: zombie 2 vs human 3 -> human wins (+1)
// second round: zombie 4 vs human 3+1 -> tie
// third round: zombie 2 vs human 4 -> human wins (+2)
// result: "2h"
Another example with a tie:

const zombies = '444';
const humans = '282';

const result = battleHorde(zombies, humans);  // -> "x"

// first round: zombie 4 vs human 2 -> zombie wins (+2)
// second round: zombie 4+2 vs human 8 -> human wins (+2)
// third round: zombie 4 vs human 2+2 -> tie
// result: "x"

*/

const humans = '444';
const zombies = '282';

function battleHorde(zombies, humans) {
    let rondas = {
        index: 0,
        ganador: '',
        ptsparaelsiguiente: 0,
    }

    for (i = 0; i < zombies.length; i++) {

        if (rondas.ganador === 'zombies') {
            let zombiesparse = zombies[i];
            zombiesparse =+ rondas.ptsparaelsiguiente;
            console.log(`suma zombies  ${zombiesparse}`);
        }
        else if (rondas.ganador === 'humans') {
            let humansparse = humans[i].parseInt;
            humansparse =+ rondas.ptsparaelsiguiente;
            console.log(`suma humanos ${humansparse}`);
        }

        let resultadopelea = humans[i] - zombies[i];

        if (resultadopelea < 0) {
            resultadopelea = -resultadopelea;
            rondas.index = i;
            rondas.ganador = 'zombies';
            rondas.ptsparaelsiguiente = resultadopelea;
            continue

        } else if (resultadopelea > 0){
            rondas.index = i;
            rondas.ganador = 'humans';
            rondas.ptsparaelsiguiente = resultadopelea;
            continue;        
        } else if (resultadopelea === 0) {
            rondas.ganador = '';
        }

    } 
    
    if (rondas.ganador === 'zombies') return `${rondas.ptsparaelsiguiente}z`
    if (rondas.ganador === 'humans') return `${rondas.ptsparaelsiguiente}h`
    if (rondas.ganador === '') return `x`


}

console.log(battleHorde(zombies, humans));