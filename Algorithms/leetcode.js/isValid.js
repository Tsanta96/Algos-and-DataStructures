//Want to use a stack because you want to match the front paren with the back paren
//before a different type paren occurs

var balancedParens = function (str) {
    //Want to use a stack because you want to match the front paren with the back paren
    //before a different type paren occurs
    const parenStack = [];

    //Create an object with pairs of parens
    const pairs = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }


    //iterate through string
    for (let i = 0; i < str.length; i++) {
        //set character equal to the current element in the iteration
        var char = str[i];

        //if the character exists as a key (front paren) in the pairs object then push onto the stack
        if (pairs[char]) {
            parenStack.push(char);
        //if the character is a closing paren of any type 
        } else if ((char === ')'|| char === ']' || char === '}')) {
            //pop the last element of the parenStack and if the value of the paren in the 
            // pairs object (the closing paren) is not equal to the current char (parens don't match up)
            // return false
            if (pairs[parenStack.pop()] !== char) {
                return false;
            }
        }
    }

    //If the length of the parenStack is equal to zero, then return true because this means all the 
    //parens match up in the correct order. 
    return parenStack.length === 0;
};

// ')(' = false
// Front paren has to come before back paren
// respective paren needs to close itself before a different paren closes itself