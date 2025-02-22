import { Equal, Expect } from "../../../../helper";
import { it, expect } from "vitest";

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

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MY_ENV_VAR: string;
    }
  }
}

process.env.MY_ENV_VAR = "Hello, world!";

it("Should be declared as a string", () => {
  expect(process.env.MY_ENV_VAR).toEqual("Hello, world!");
});

it("Should NOT have undefined in the type", () => {
  const myVar = process.env.MY_ENV_VAR;
  type tests = [Expect<Equal<typeof myVar, string>>];
});
