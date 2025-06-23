
/**
 * A scalable, class-based implementation of FizzBuzz in TypeScript.
 * Supports dynamic rule configuration via constructor and addRule methods.
 * */

type Rule = 
{
  divisor: number;
  output: string;
};

class FizzBuzz 
{
  private rules: Rule[];

  constructor(rules: Rule[]) 
  {
    this.rules = rules;
  }

  public getResult(limit: number): (string | number)[] 
  {
    const results: (string | number)[] = [];

    for (let i = 1; i <= limit; i++) 
    {
      let result = '';

      for (const rule of this.rules) 
      {
        if (i % rule.divisor === 0) 
        {
          result += rule.output;
        }
      }

      results.push(result || i);
    }

    return results;
  }

  public addRule(divisor: number, output: string): void 
  {
    this.rules.push({ divisor, output });
  }
}

const rules =  [{ divisor: 3, output: 'Fizz' }, { divisor: 5, output: 'Buzz' }];

const fizzbBuzz = new FizzBuzz(rules);
console.log(fizzbBuzz.getResult(21)); 

fizzbBuzz.addRule(7, 'Bazz');
console.log(fizzbBuzz.getResult(21));