import { Equal, Expect } from "../../../../helper";

/* review how react-query implements TS >> https://github.com/TanStack/query/blob/main/packages/react-query/src/types.ts#L171 
also this crazy repo TS-SQL >> https://github.com/codemix/ts-sql/blob/master/src/Evaluator.ts
*/

// CHALLENGE
// 1. let's create our own 'Pick' type
/* knowing that TS utility type 'Pick' is like >> Pick<BaseType, ConditionToPick> */

// 2. let's create our own 'Exclude' type
/* knowing that TS utility type 'Pick' is like >> Exclude<BaseType, ConditionToExclude> */

interface User {
  id: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  role: string;
}

type CreateUser = Omit<User, "id">;
type SearchUser = Pick<User, "email" | "username">;

type Select<T, K extends keyof T> = {
  [P in K]: T[P];
};
type OmiType<T, K extends string> = { [P in Exclude<keyof T, K>]: T[P] };

type SearchUser2 = Select<User, "email" | "username">;

type CreateUser2 = OmiType<User, "id">;

type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

type UserRequiredKeys = RequiredKeys<User>;

type tests3 = [Expect<Equal<UserRequiredKeys, "id" | "username" | "email" | "role">>];
