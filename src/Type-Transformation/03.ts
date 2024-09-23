import { Equal, Expect } from "../../helper";

/* review how react-query implements TS >> https://github.com/TanStack/query/blob/main/packages/react-query/src/types.ts#L171 
also this crazy repo TS-SQL >> https://github.com/codemix/ts-sql/blob/master/src/Evaluator.ts
*/

// CHALLENGE
// 1. lert's create our own 'Pick' type
/* knowing that TS utility type 'Pick' is like >> Pick<BaseType, ConditionToPick> */

// 2. lert's create our own 'Exclude' type
/* knowing that TS utility type 'Pick' is like >> Exclude<BaseType, ConditionToExclude> */
