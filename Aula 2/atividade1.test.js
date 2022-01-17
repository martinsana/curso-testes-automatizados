const StringManipulations = require('./atividade1');

let string;
let stringManipulations;

describe("String Manipulations", () => {   
    beforeAll(() => {        
        string = "Mr. Blue has a blue house";
        stringManipulations = new StringManipulations(string); 
          
    });

    it('should returns the first substring that matches the given string', () => {        
        const output = "Blue";            
        expect(stringManipulations.findFirstMatch(output)).toEqual("Blue");
 
    });

    it('should returns the last substring that matches the given string', () => {        
        const output = "blue";            
        expect(stringManipulations.findLastMatch(output)).toEqual("blue");
 
    });

    it('should returns the substring between two given other strings', () => {        
        const output1 = "has";  
        const output2 = "house";            
        expect(stringManipulations.substringBetweenMatches(output1, output2)).toEqual("a blue");
 
    });

    it('should returns a string made of the first 2 and the last 2 chars of the original string', () => {   
        expect(stringManipulations.both_ends()).toEqual("Mrse");
 
    });

    it('a string where all occurences of its first char have been changed to "*", except do not change the first char itself', () => {   
        const output = "blue has a blue house";
        expect(stringManipulations.fix_start(output)).toEqual("blue has a *lue house");
 
    });
});