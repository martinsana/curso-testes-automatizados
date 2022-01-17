const AdressMatcher = require('./atividade1ClassConsumer');
const StringManipulations = require('./atividade1');

const mockAdressMatcherMethods = jest.fn();
jest.mock('./atividade1', () => {
    return jest.fn().mockImplementation(() => {
        return { 
        findFirstMatch : () => {
            return "Hollywood Boulevard";
        },
        fix_start : () => {
            return "Regent St*eet, Lond*es, Inglate**a";
        }}
    })
});

describe("Class consumer - constructor and findStreetName tests", () => {
    beforeEach(() => {
        StringManipulations.mockClear();
        mockAdressMatcherMethods.mockClear();             
    });

    it('should call the StringManipulations instance in the constructor of Atividade1ClassConsumer class', () => {
        const adressMatcher = new AdressMatcher();
        expect(StringManipulations).toHaveBeenCalledTimes(1);
    });

    it('should instantiate the StringManipulations and return the mock value of findStreetName method', () => {
        const adress = "Hollywood Boulevard, Los Angeles, United States";
        const adressMatcher = new AdressMatcher(adress);
        const actual = adressMatcher.findStreetName("Hollywood Boulevard")
        expect(actual).toEqual("Hollywood Boulevard");
    });

    it('should instantiate the StringManipulations and return the mock value of hideStreetName method', () => {
        const adress = "Regent Street, Londres, Inglaterra";
        const adressMatcher = new AdressMatcher(adress);
        const actual = adressMatcher.hideStreetName("Regent Street, Londres, Inglaterra")
        expect(actual).toEqual("Regent St*eet, Lond*es, Inglate**a");
    });

});
