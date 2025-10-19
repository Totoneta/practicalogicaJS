const pociones = [10, 20, 30, 40];
const target = 50;

function Crearpocion(pociones, target) {
    let indices = [];

    for (j = 0; j < pociones.length; j++) {

        for (i = j + 1; i < pociones.length; i++) {

            if (j === i) continue;
            if (pociones[j] + pociones[i] === target) {
                indices.push([j, i]);
            }

        };
    };
    if (indices.length === 0) return undefined;
    console.log(indices);
    indices.sort((a, b) => a[1] - b[1])
    return indices[0]

}

console.log(Crearpocion(pociones, target));