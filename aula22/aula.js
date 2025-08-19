let varA = `A`; // B
let varB = `B`; // C
let varC = `C`; // A
/*
    Tem outras maneiras de fazer isso, mas essa é a mais atual, poderia tambem criar uma variavel temporaria, mas isso é mais verboso.
*/
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);