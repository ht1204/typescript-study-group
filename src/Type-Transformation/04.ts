// import { Equal, Expect } from "../../helper";

// 1. infer keyword
/*
En TypeScript, la palabra clave infer se utiliza en el contexto de los tipos condicionales para inferir un tipo dentro de una expresión de tipo. Esto puede resultar particularmente útil cuando trabajas con tipos genéricos y necesitas extraer o manipular ciertas partes de esos tipos.
*/


// 2 create our own Parameters utility type
function asd(b: number, c: string) {
  return 1234
}

type MyParams<T extends (...args: any) => any > = T extends (...args: infer A) => any ? A : never;


type AsdParams = MyParams<typeof asd>
type AsdParams2 = Parameters<typeof asd>


// 3 create our own ReturnType utility type
type MyReturn<T extends (...args: any) => any > = T extends (...args: any) => infer A ? A : never;

type AsdReturn = MyReturn<typeof asd>

const arr = [1,2,3,4] as const;


type ArrLength<T extends readonly any[]> = T['length']

type MyArr = ArrLength<typeof arr>

//  ejemplo: str: 'Bogota' >>> 'B' | "o" | "g"...
type zxc = StringToUnion<'PGD'>

type StringToUnion<T extends string> = T  extends `${infer HEAD}${infer TAIL}` ? HEAD | StringToUnion<TAIL> : never