export default function greet(name){
    return "Hello, " + name + " -from ES modules";
};
import greet from './greet.mjs'

// call the function & print the results on the screen
console.log(greet('Xola'))