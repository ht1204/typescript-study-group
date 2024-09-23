import { Equal, Expect } from "../../helper";


/* 1 create a mapped type, where the keys are represented by the property route of the discriminated union 
and the values represented by the search property
 */
// type Route =
//   | {
//       route: "/";
//       search: {
//         page: string;
//         perPage: string;
//       };
//     }
//   | { route: "/about"; search: {} }
//   | { route: "/admin"; search: {} }
//   | { route: "/admin/users"; search: {} };

// type RoutesObject = unknown;

// type tests = [
//   Expect<
//     Equal<
//       RoutesObject,
//       {
//         "/": {
//           page: string;
//           perPage: string;
//         };
//         "/about": {};
//         "/admin": {};
//         "/admin/users": {};
//       }
//     >
//   >,
// ];

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
// interface Values {
//   email: string;
//   firstName: string;
//   lastName: string;
// }

// type ValuesAsUnionOfTuples = { /* you only need to modify/add something here */
//   [K in keyof Values]: [K, Values[K]];
// }; 

// type tests = [
//   Expect<
//     Equal<
//       ValuesAsUnionOfTuples,
//       ["email", string] | ["firstName", string] | ["lastName", string]
//     >
//   >
// ];


// 3 super easy >> using template literals create a union of all posible permutacions of Buttons

// type ButtonSize = "small" | "medium" | "large";

// type ButtonVariant = "primary" | "secondary";

// type Buttons = unknown;

// type tests = [
//   Expect<
//     Equal<
//       Buttons,
//       | "small primary button"
//       | "small secondary button"
//       | "medium primary button"
//       | "medium secondary button"
//       | "large primary button"
//       | "large secondary button"
//     >
//   >
// ];
