import { Equal, Expect } from "../../../../helper";

// 5. conditional types, want to return goodbye if u pass hello, and vice versa

type YouSayGoodbyeAndISayHello<T extends string> = T extends "hello"
 ? "goodbye" 
 : T extends "goodbye"
 ? "hello"
 : never
;

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
];

type tests2 = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"alright pal">, never>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<'1'>, never>>,
];