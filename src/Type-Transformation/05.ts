import { Equal, Expect } from "../../helper";
import { expect, it } from "vitest";


// function overload https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads 

/* 
function overloading allows you to define multiple versions of a function with different parameter types or numbers of parameters, 
all sharing the same name. When you call the function, TypeScript uses the provided arguments to determine which overloaded version to invoke. 
This enables you to create more flexible and descriptive APIs.
*/

// e.g: if go to the reduce method definition (cmd + click for mac / ctrl + click windows), you'll find three definitions 
/*
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
1. reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
2. reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;

 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
	
2. reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
*/

/* NOTE: one thing to note, is that the implemantation body (the signature of the function) isn't exposed outside of the function, 
so it's parameters becomes only an internal signature */ 


// 1. same as before, if we pass to the function goodbye it must return hello and vice versa,
// we want a function overload that can handle the diferent cases

// function youSayGoodbyeISayHello(greeting: "goodbye" | "hello") {
//   return greeting === "goodbye" ? "hello" : "goodbye";
// };

// it("Should return goodbye when hello is passed in", () => {
//   const result = youSayGoodbyeISayHello("hello");

//   type test = [Expect<Equal<typeof result, "goodbye">>];

//   expect(result).toEqual("goodbye");
// });

// it("Should return hello when goodbye is passed in", () => {
//   const result = youSayGoodbyeISayHello("goodbye");

//   type test = [Expect<Equal<typeof result, "hello">>];

//   expect(result).toEqual("hello");
// });


// 2. we want to return what ever we pass to the funciton, 
// but if we pass the number one (1) we should return the number two (2).
// use function overloads.

// function returnWhatIPassInExceptFor1(t: unknown): unknown {
//   if (t === 1) {
//     return 2;
//   }
//   return t;
// }

// it("Should return the type 2 when you pass in 1", () => {
//   const result = returnWhatIPassInExceptFor1(1);

//   type test1 = Expect<Equal<typeof result, 2>>;
// });

// it("Otherwise, should return what you pass in", () => {
//   const a = returnWhatIPassInExceptFor1("a");
//   const b = returnWhatIPassInExceptFor1("b");
//   const c = returnWhatIPassInExceptFor1("c");

//   type tests = [
//     Expect<Equal<typeof a, "a">>,
//     Expect<Equal<typeof b, "b">>,
//     Expect<Equal<typeof c, "c">>
//   ];
// });

// 3 why is divElement2 not of type HTMLDivElement?
// const divElement = document.querySelector("div");
// const spanElement = document.querySelector("span");
// const divElement2 = document.querySelector("div.foo");