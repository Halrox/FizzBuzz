//Assuming that 'FizzBuzz' (for multiples of both 3 and 5) is simply the concatenation of 'Fizz' and 'Buzz'

    //Readable Version
    function fizzBuzz(number) 
    {
        const results = [];
        for (let i = 1; i <= number; i++) 
        {
            let value = '';
            if (i % 3 === 0) value += 'Fizz';
            if (i % 5 === 0) value += 'Buzz';
            results.push(value || i);
        }
        return results;
    }

    // Compact version 
    function fizzBuzzCompact(number)
    {
            for (let i = 1; i <= number; i++) 
            results.push(((i % 3 === 0) ? 'Fizz' : '') + ((i % 5 === 0) ? 'Buzz' : '') || i);

        return results;
    }
