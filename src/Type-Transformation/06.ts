import { Equal, Expect } from "../../helper";
import { it, expect } from "vitest";

// 1. return the correct data type.
// const useData = <T>(params: { fetchData: () => Promise<T>; initialData?: T }): {
//   getData: () => T | undefined;
// } => {
//   let data = params.initialData;

//   params.fetchData().then((d) => {
//     data = d;
//   });

//   return {
//     getData: () => data,
//   };
// }

// it("Should return undefined if no initial data is passed", () => {
//   const numData = useData({
//     fetchData: () => Promise.resolve(1),
//   });

//   const data = numData.getData();

//   type Test1 = Expect<Equal<typeof data, number | undefined>>;
// });

// it("Should NOT return undefined if initial data is passed", () => {
//   const numData = useData({
//     fetchData: () => Promise.resolve(1),
//     initialData: 2,
//   });

//   const data = numData.getData();

//   type Test1 = Expect<Equal<typeof data, number>>;
// });


// 2. problem when using union types

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// } as const;

// type ObjKey = keyof typeof obj;


// function getObjValue(): typeof obj['a']
// function getObjValue<TKey extends ObjKey>(key: TKey): typeof obj[TKey]
// function getObjValue(key?: ObjKey){
//   return obj[key || 'a'];
// };

// const one = getObjValue("a");
// const oneByDefault = getObjValue();
// const two = getObjValue("b");
// const three = getObjValue("c");

// type tests = [
//   Expect<Equal<typeof one, 1>>,
//   Expect<Equal<typeof oneByDefault, 1>>,
//   Expect<Equal<typeof two, 2>>,
//   Expect<Equal<typeof three, 3>>
// ];

// 3. process.env 
/**
 * Clues:
 *
 * 1. You'll need declare global again
 *
 * 2. You'll need to use the NodeJS namespace
 *
 * 3. Inside the NodeJS namespace, you'll need to add a
 * MY_ENV_VAR property to the ProcessEnv interface
 */

// process.env.MY_ENV_VAR = "Hello, world!";

// it("Should be declared as a string", () => {
//   expect(process.env.MY_ENV_VAR).toEqual("Hello, world!");
// });

// it("Should NOT have undefined in the type", () => {
//   const myVar = process.env.MY_ENV_VAR;
//   type tests = [Expect<Equal<typeof myVar, string>>];
// });


// 4 
/**
 * Clues:
 *
 * 1. You'll need declare global again
 *
 * 2. Inside declare global, you'll need to modify the Window
 * interface to add a makeGreeting function
 */
// window.makeGreeting = () => "Hello, world!";

// it("Should let you call makeGreeting from the window object", () => {
//   expect(window.makeGreeting()).toBe("Hello, world!");

//   type test1 = Expect<Equal<typeof window.makeGreeting, () => string>>;
// });

// 5
/**
 * How do we add a LOG_OUT and UPDATE_USERNAME events to the
* DispatchableEvent interface from WITHIN
* this file?
*/


// const handler = (event: UnionOfDispatchableEvents) => {
//  switch (event.type) {
// 	 case "LOG_OUT":
// 		 console.log("LOG_OUT");
// 		 break;
// 	 case "UPDATE_USERNAME":
// 		 console.log(event.username);
// 		 break;
//  }
// };

// it("Should be able to handle LOG_OUT and UPDATE_USERNAME events", () => {
//  handler({ type: "LOG_OUT" });
//  handler({ type: "UPDATE_USERNAME", username: "matt" });
// });

