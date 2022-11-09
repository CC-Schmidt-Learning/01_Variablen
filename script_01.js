"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/
/***02-Deklaration & Wertzuweisung ***/

//let firstName="Max" //Wert Zuweisung
//let lastName="Mütze";

//console.log(firstName + " "+ lastName);//Ausgabe variable


//let firstName, lastName;
//firstName= prompt("please insert firstname here");
//lastName= prompt("please insert lastname here");

//console.log(firstName+ " " + lastName);

/*JS ist eine untypisierte Sprache! | untyped */

//let test;
//test= "Hi";
//test=2;
//test=true;


//console.log("Datentyp: " + typeof test)
//console.log("Inhalt: " + test); //Ausgabe


/******* Konstanten ********/

//const test1 = "Hey there";
//console.log("Inhalt: " + test1); //Ausgabe 

/******* Beispiel *******/


let ageJohn, ageMarc;
let birthYearJohn, birthYearMarc;
let year = 2022

ageJohn = 25;
ageMarc = 30

// Berechnung 

birthYearJohn = year - ageJohn;
birthYearMarc = year - ageMarc;

console.log ("birthYearJohn: "+ birthYearJohn);
console.log ("birthYearMarc: " + birthYearMarc);