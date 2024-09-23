import { Equal, Expect } from "../../../../helper";

// 7 mapped types

// 7.1 create a mapped type from a union
type Route = "/" | "/about" | "/admin" | "/admin/users";

type RoutesObject = {
    [key in Route]: key;
};

type tests = [
    Expect<
        Equal<
            RoutesObject,
            {
                "/": "/";
                "/about": "/about";
                "/admin": "/admin";
                "/admin/users": "/admin/users";
            }
        >
    >,
];

