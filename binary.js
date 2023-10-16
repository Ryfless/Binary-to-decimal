// Flowchart Binary to Decimal
// Javascript

biner = 1010101 // masukan nilai biner
desimal = 0 // bilangan desimal mulai dari 0 

for (i = 0; biner> i; i++) { // looping
    if (biner % 10**(i+1) == 0) {
    } else {
        desimal = desimal + 2**i
        biner = biner - 10**i
    }
}

console.log(desimal)