import { Equal, Expect } from "../../../../helper";
import { expect, it } from "vitest";

/*
  NOTE: one thing to note, is that the implemantation body (the signature of the function)
  isn't exposed outside of the function, so it's parameters becomes only an internal signature 
*/


// 1. same as before, if we pass to the function goodbye it must return hello and vice versa,
// we want a function overload that can handle the diferent cases


function youSayGoodbyeISayHello(greeting: "hello"): "goodbye";
function youSayGoodbyeISayHello(greeting: "goodbye"): "hello";

function youSayGoodbyeISayHello(greeting: 'hello' | 'goodbye') {
    return greeting === "goodbye" ? "hello" : "goodbye";
};

it("Should return goodbye when hello is passed in", () => {
    const result = youSayGoodbyeISayHello("hello");

    type test = [Expect<Equal<typeof result, "goodbye">>];

    expect(result).toEqual("goodbye");
});

it("Should return hello when goodbye is passed in", () => {
    const result = youSayGoodbyeISayHello("goodbye");

    type test = [Expect<Equal<typeof result, "hello">>];

    expect(result).toEqual("hello");
});