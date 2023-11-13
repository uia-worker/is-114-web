/**
 * Example of an ancestory tree representation in JSON format
name	birthyear	eye	mother	father
Robert	1893	brown	noInfo	noInfo
Laura	1920	blue	noInfo	noInfo
John	1920	green	noInfo	Robert
Ellen	1945	brown	Laura	John
Bill	1946	blue	noInfo	noInfo
Susan	1971	blue	Ellen	Bill
Charlie	1972	green	noInfo	noInfo
Anna	1997	blue	Susan	Charlie
*/

var robert = {name: "Robert", birthyear : "1893", eye: "brown", mother: null, father: null}
var john = {name: "John", birthyear : "1920", eye: "blue", mother: null, father: "Robert"}