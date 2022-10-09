var alexMass = 60;
var alexhight = 5.6;
var ahmadmass = 50;
var ahmadhight = 4.10;
var alexBMI = alexMass/(alexhight*alexhight);
var ahmadBMI = ahmadmass/(ahmadhight*ahmadhight);
console.log( alexBMI, ahmadBMI)
var higherBMI = alexBMI>ahmadBMI;
console.log('is alexBMI higher than ahmadBMI' + higherBMI);