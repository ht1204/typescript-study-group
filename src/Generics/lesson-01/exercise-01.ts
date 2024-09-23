// import { expect, it, test, assertType, expectTypeOf} from "vitest";
// import { Expect, Equal} from "@/helper"
// 1. intro to typescript generics, here we want to return the param with the correct type
// // @ts-expect-error
// const returnWhatIPassIn = (t) => {
//   return t;
// };

// const one = returnWhatIPassIn(1); // should be a number
// const miguel = returnWhatIPassIn("miguel"); // should be a string

// type test = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof miguel, "miguel">>]


// 2. use the same example above, but now onlky allow string as returnWhatIPassIn args
// const returnWhatIPassIn = (t) => {
//   return t;
// };


// 3. using what we now know, create a function "returnBothOfWhatIPassIn" that acepts 2 arguments and return the correct type for both
// const returnWhatIPassIn = (a,b) => {
//   return {a,b};
// };


// 4. using what we now know, create a function "returnBothOfWhatIPassIn" that acepts 2 arguments and return the correct type for both
// const returnWhatIPassIn = (t: {a, b}) => {
//   return {first:t.a, second:t.b};
// };

// 5. Generics in classes
// export class Component<T> {
//   private props: T
//   constructor(props: T) {
//     this.props = props;
//   }

//   getProps = () => this.props;
// }

// test("Should create an object containing props", () => {
//   const component = new Component({ a: 1, b: 2, c: 3 });

//   const result = component.getProps();

//   expect(result).toEqual({ a: 1, b: 2, c: 3 });

//   type tests = [
//     Expect<Equal<typeof result, { a: number; b: number; c: number }>>,
//   ];
// });

// 6. create a function that return the correct "mapped user" 
// export const concatenateFirstNameAndLastName = (user: unknown) => {
//   return {
//     ...user,
//     fullName: `${user.firstName} ${user.lastName}`,
//   };
// };

// it("Should add fullName to an object which only contains firstName and lastName", () => {
//   const users = [
//     {
//       firstName: "Matt",
//       lastName: "Pocock",
//     },
//   ];

//   const newUsers = users.map(concatenateFirstNameAndLastName);

//   expect(newUsers).toEqual([
//     {
//       firstName: "Matt",
//       lastName: "Pocock",
//       fullName: "Matt Pocock",
//     },
//   ]);

//   type tests = [
//     Expect<
//       Equal<
//         typeof newUsers,
//         Array<{ firstName: string; lastName: string } & { fullName: string }>
//       >
//     >,
//   ];
// });

// it("Should retain other properties passed in", () => {
//   const users = [
//     {
//       id: 1,
//       firstName: "Matt",
//       lastName: "Pocock",
//     },
//   ];

//   const newUsers = users.map(concatenateFirstNameAndLastName);

//   expect(newUsers).toEqual([
//     {
//       id: 1,
//       firstName: "Matt",
//       lastName: "Pocock",
//       fullName: "Matt Pocock",
//     },
//   ]);

//   type tests = [
//     Expect<
//       Equal<
//         typeof newUsers,
//         Array<
//           { id: number; firstName: string; lastName: string } & {
//             fullName: string;
//           }
//         >
//       >
//     >,
//   ];
// });
