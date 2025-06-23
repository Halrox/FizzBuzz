# Implémentations de FizzBuzz (TypeScript et JavaScript)

Ce dépôt contient deux implémentations de l'algorithme classique FizzBuzz, illustrant chacune une approche différente :

- `fizzbuzz.ts` : Une implémentation orientée objet, extensible, écrite en TypeScript.
- `fizzbuzz.js` : Une implémentation simple et fonctionnelle en JavaScript pur.

## Fichier : fizzbuzz.ts (TypeScript - basé sur les classes)

Cette version définit une classe `FizzBuzz` qui prend en charge la configuration dynamique des règles.

Fonctionnalités :
- Typage fort grâce à TypeScript
- Conception propre et modulaire
- Possibilité d’ajouter des règles à l’exécution
- Facile à tester et à réutiliser dans des projets plus complexes

Exemple d'utilisation :
```ts
const fizzBuzz = new FizzBuzz();
console.log(fizzBuzz.run(15)); // [1, 2, 'Fizz', 4, 'Buzz', ..., 'FizzBuzz']

fizzBuzz.addRule(7, 'Bazz');
console.log(fizzBuzz.run(21)); // Inclut 'Bazz' pour les multiples de 7
```