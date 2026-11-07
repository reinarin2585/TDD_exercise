const table_string = 
    `Date; exercises
    01.11.; pushups, pullups, crunches
    03.11.; deadlifts, pushups
    06.11.; pushups, crunches, running
    08.11.; crawling, pullups
    `

    function divideString(longstring) {
        return longstring
            .split(/\r?\n/)
            .map(line => line.trim())
            .filter(line => line.length > 0);
    }

    function test_divideString() {
        const test_string = 
        `Bla
        Blub`;
        const result = divideString(test_string);
        if (!Array.isArray(result)) {
            console.log("ERROR: Return type ist kein Array");
        }

        else if (result.length !==2) {
            console.log("ERROR: Länge passt nicht")
        }
        else if (result[0] !== "Bla") {
            console.log("ERROR, erstes entry nicht bla") 
            }

        else if (result[1] !== "Blub") {
            console.log("ERROR: zweites entry nicht blub")
       }
       else {
        console.log("kein Fehler")
       }
    
    }

    test_divideString();
