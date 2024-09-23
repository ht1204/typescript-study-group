import { Equal, Expect } from "../../helper";


// 1. extract a union type of frameworks

// const testingFrameworks = {
//   vitest: {
//     label: "Vitest",
//   },
//   jest: {
//     label: "Jest",
//   },
//   mocha: {
//     label: "Mocha",
//   },
// };

// type TestingFramework = keyof typeof testingFrameworks;

// type tests = [Expect<Equal<TestingFramework, "vitest" | "jest" | "mocha">>];


// 2. typeof and use of ....??

// const makeQuery = (
//   url: string,
//   opts?: {
//     method?: string;
//     headers?: {
//       [key: string]: string;
//     };
//     body?: string;
//   },
// ) => {};

// type MakeQueryParameters = Parameters<typeof makeQuery>;

// type tests = [
//   Expect<
//     Equal<
//       MakeQueryParameters,
//       [
//         url: string,
//         opts?: {
//           method?: string;
//           headers?: {
//             [key: string]: string;
//           };
//           body?: string;
//         },
//       ]
//     >
//   >,
// ];


// 3. unions types
// type A =
//   | {
//       type: "a";
//       a: string;
//     }
//   | {
//       type: "b";
//       b: string;
//     }
//   | {
//       type: "c";
//       c: string;
//     };

// type B = "a" | "b" | "c";

type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

type ClickEvent = Extract<Event, {type: 'click'}>

// type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];

// type tests2 = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];


// 4. infer literal values by indexing 

// export const programModeMap = {
//   GROUP: "group",
//   ANNOUNCEMENT: "announcement",
//   ONE_ON_ONE: "1on1",
//   SELF_DIRECTED: "selfDirected",
//   PLANNED_ONE_ON_ONE: "planned1on1",
//   PLANNED_SELF_DIRECTED: "plannedSelfDirected",
// 	asd: {
// 		qwe: 'hello'
// 	}
// } as const;


// export type GroupProgram = typeof programModeMap["GROUP"];
// export type AnnouncementProgram = typeof programModeMap["ANNOUNCEMENT"];
// export type OneOnOneProgram = typeof programModeMap["ONE_ON_ONE"];
// export type SelfDirectedProgram = typeof programModeMap["SELF_DIRECTED"];
// export type PlannedOneOnOneProgram =
//   typeof programModeMap["PLANNED_ONE_ON_ONE"];
// export type PlannedSelfDirectedProgram =
//   typeof programModeMap["PLANNED_SELF_DIRECTED"];

// type tests = [
//   Expect<Equal<GroupProgram, "group">>,
//   Expect<Equal<AnnouncementProgram, "announcement">>,
//   Expect<Equal<OneOnOneProgram, "1on1">>,
//   Expect<Equal<SelfDirectedProgram, "selfDirected">>,
//   Expect<Equal<PlannedOneOnOneProgram, "planned1on1">>,
//   Expect<Equal<PlannedSelfDirectedProgram, "plannedSelfDirected">>,
// ];


// 5. conditional types, want to return goodbye if u pass hello, and vice versa

// type YouSayGoodbyeAndISayHello<T> = T extends 'hello' ? 'goodbye' : 'hello';
// type YouSayGoodbyeAndISayHello<T> = T extends 'hello' | 'goodbye' 
// 	? T extends 'hello' 
// 		? 'goodbye' 
// 		: 'hello' 
// 	: never;

// type tests = [
//   Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
//   Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
// ];

// type tests2 = [
//   Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
//   Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
//   Expect<Equal<YouSayGoodbyeAndISayHello<"alright pal">, never>>,
//   Expect<Equal<YouSayGoodbyeAndISayHello<1>, never>>,
// ];

// 6. string literals 
// 6.1 only allow absolute path as arguments.
// type Route = `/${string}`;
// const goToRoute = (route: Route) => {};

// goToRoute("/users");
// goToRoute("/");
// goToRoute("/admin/users");

// // @ts-expect-error
// goToRoute("users/1");
// // @ts-expect-error
// goToRoute("http://facebook.com");

// 6.2 dynamic Routes

// type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

// type DynamicRoutes = Extract<Routes, `/${string}:${string}`>;

// type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/posts/:id">>];



// 7 mapped types

// 7.1 create a mapped type from a union
// type Route = "/" | "/about" | "/admin" | "/admin/users";

// type RoutesObject = {
// 	[k in Route]: k
// };

// type tests = [
//   Expect<
//     Equal<
//       RoutesObject,
//       {
//         "/": "/";
//         "/about": "/about";
//         "/admin": "/admin";
//         "/admin/users": "/admin/users";
//       }
//     >
//   >,
// ];

// 7.2 create a mapped type with onle the keys containing "id"
// interface Example {
//   name: string;
//   age: number;
//   id: string;
//   organisationId: string;
//   groupId: string;
// }

// type OnlyId = `${string}${'id' | "Id"}${string}`

// type OnlyIdKeys<T> = {
// 	[k in keyof T as k extends OnlyId ? k : never]: T[k]
// };

// type tests = [
//   Expect<
//     Equal<
//       OnlyIdKeys<Example>,
//       {
//         id: string;
//         organisationId: string;
//         groupId: string;
//       }
//     >
//   >,
//   Expect<Equal<OnlyIdKeys<{}>, {}>>
// ];