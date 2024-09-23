import { Equal, Expect } from "../../../../helper";
import { expect, it } from "vitest";

// 2. we want to return what ever we pass to the function, 
// but if we pass the number one (1) we should return the number two (2).
// use function overloads.

/*
    When passes anything other than 1, the function should return what I pass in (as the name suggests).
    For example, if I pass in a, b, or c, the function should return a, b, or c respectively.
    However, when I pass in 1, the result should be of type 2.
*/

function returnWhatIPassInExceptFor1(t: 1): 2;
function returnWhatIPassInExceptFor1<T>(t: T): T;


function returnWhatIPassInExceptFor1(t: unknown): unknown {
  if (t === 1) {
    return 2;
  }
  return t;
}

it("Should return the type 2 when you pass in 1", () => {
  // function returnWhatIPassInExceptFor1(t: 1): 2;  
  const result = returnWhatIPassInExceptFor1(1);

  type test1 = Expect<Equal<typeof result, 2>>;

  const res: test1 = true;

  expect(res).toEqual(true);
});

it("Otherwise, should return what you pass in", () => {
  // function returnWhatIPassInExceptFor1<T>(t: T): T;

  const a = returnWhatIPassInExceptFor1("a");
  const b = returnWhatIPassInExceptFor1("b");
  const c = returnWhatIPassInExceptFor1("c");

  type tests = [
    Expect<Equal<typeof a, "a">>,
    Expect<Equal<typeof b, "b">>,
    Expect<Equal<typeof c, "c">>
  ];

  const res: tests = [true, true, true];
  expect(res).toEqual([true, true, true]);
});