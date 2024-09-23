import { Equal, Expect } from "../../../../helper";

// 3 super easy >> using template literals create a union of all posible permutations of Buttons

type ButtonSize = "small" | "medium" | "large";

type ButtonVariant = "primary" | "secondary";

/*
// Proposal for lesson-04: type transformations part 2.
type TPermutations<T extends string, U extends string> = `${T} ${U} button`;

type Buttons = TPermutations<ButtonSize, ButtonVariant>;

*/

type Buttons = `${ButtonSize} ${ButtonVariant} button`;

type tests = [
  Expect<
    Equal<
      Buttons,
      | "small primary button"
      | "small secondary button"
      | "medium primary button"
      | "medium secondary button"
      | "large primary button"
      | "large secondary button"
    >
  >
];