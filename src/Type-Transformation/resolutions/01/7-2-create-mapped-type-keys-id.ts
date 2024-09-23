import { Equal, Expect } from "../../../../helper";

// 7.2 create a mapped type with onle the keys containing "id"

interface Example {
    name: string;
    age: number;
    id: string;
    organisationId: string;
    groupId: string;
}

/*
  Checks if the key's value is of type string and if the key itself ends with "Id".
  If both conditions are met, the key is included in the resulting mapped type; 
  otherwise, it is excluded (never).
*/

// Proposal in lesson-04: type transformations part 1.
// type OnlyIdKeys<T> = {
//     [K in keyof T as K extends `${string}id` | `${string}Id` ? K : never]: T[K]
// };

type OnlyIdKeys<T> = {
    [K in keyof T as K extends `${string}${`id` | `Id`}${string}` ? K : never]: T[K]
};

type tests = [
    Expect<
        Equal<
            OnlyIdKeys<Example>,
            {
                id: string;
                organisationId: string;
                groupId: string;
            }
        >
    >,
    Expect<Equal<OnlyIdKeys<{}>, {}>>
];