import { Equal, Expect } from "../../../../helper";

/* 
review how react-query implements TS >> https://github.com/TanStack/query/blob/main/packages/react-query/src/types.ts#L171 
also this crazy repo TS-SQL >> https://github.com/codemix/ts-sql/blob/master/src/Evaluator.ts
*/

// CHALLENGE
// 1. let's create our own 'Pick' type
/* knowing that TS utility type 'Pick' is like >> Pick<BaseType, ConditionToPick> */

// Proposal approach

type BaseType =  {
    a: string;
    b: number;
    c: string;
    d: boolean;
}


type TPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

// Custom Pick
type PickBase = TPick<BaseType, 'a' | 'c' | 'd'>;

// 2. let's create our own 'Exclude' type
/* knowing that TS utility type 'Pick' is like >> Exclude<BaseType, ConditionToExclude> */
// Proposal approach

type TExclude<T, U> = T extends U ? never : T;

type ExcludeBase = {
    [K in TExclude<keyof BaseType, 'a' | 'c' | 'd'>]: BaseType[K];
}

