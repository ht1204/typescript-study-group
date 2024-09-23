import { Equal, Expect } from "../../../../helper";

/* 
    2 create a union of tuples out the following code. 
    the code is half way finished, hover over "ValuesAsUnionOfTuples" and you'll see

    type ValuesAsUnionOfTuples = {
        email: ["email", string];
        firstName: ["firstName", string];
        lastName: ["lastName", string];
    }
    notice we have an object like type with keys for each property and values as tuples
    in this case we'll only want the values to represent the union of tuples

    HINT: think of index access types

 */

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

/* you only need to modify/add something here */

type ValuesAsUnionOfTuples = { 
  [K in keyof Values]: [K, Values[K]];
}; 

type TValueTuples = ValuesAsUnionOfTuples[keyof Values];

type tests = [
  Expect<
    Equal<
    TValueTuples,
      ["email", string] | ["firstName", string] | ["lastName", string]
    >
  >
]; 

/*
// Proposal for lesson-04: type transformations part 2.

type ValuesAsUnionOfTuples = { 
  [K in keyof Values]: [K, Values[K]];
}[keyof Values]; 

type tests = [
  Expect<
    Equal<
      ValuesAsUnionOfTuples,
      ["email", string] | ["firstName", string] | ["lastName", string]
    >
  >
]; 

*/
