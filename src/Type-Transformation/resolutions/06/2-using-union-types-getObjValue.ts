import { Equal, Expect } from "../../../../helper";
import { it, expect } from "vitest";

// 2. problem when using union types

const obj = {
  a: 1,
  b: 2,
  c: 3,
} as const;

type ObjKey = keyof typeof obj;


function getObjValue(): typeof obj['a']
function getObjValue<TKey extends ObjKey>(key: TKey): typeof obj[TKey]
function getObjValue(key?: ObjKey){
//function getObjValue<TKey extends ObjKey>(key: TKey = 'a'){ 
  return obj[key || "a"];
};

const one = getObjValue("a");
const oneByDefault = getObjValue();
const two = getObjValue("b");
const three = getObjValue("c");

type tests = [
  Expect<Equal<typeof one, 1>>,
  Expect<Equal<typeof oneByDefault, 1>>,
  Expect<Equal<typeof two, 2>>,
  Expect<Equal<typeof three, 3>>
];