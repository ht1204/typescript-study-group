import { Equal, Expect } from "../../../../helper";


/* 
    1 create a mapped type, where the keys are represented by the property route of
    the discriminated union and the values represented by the search property.
 */

type Route =
    | {
        route: "/";
        search: {
            page: string;
            perPage: string;
        };
    }
    | { route: "/about"; search: {} }
    | { route: "/admin"; search: {} }
    | { route: "/admin/users"; search: {} };

type RoutesObject = {
    [key in Route['route']]: Extract<Route, { route: key }>['search'];
}

type tests = [
    Expect<
        Equal<
            RoutesObject,
            {
                "/": {
                    page: string;
                    perPage: string;
                };
                "/about": {};
                "/admin": {};
                "/admin/users": {};
            }
        >
    >,
];
