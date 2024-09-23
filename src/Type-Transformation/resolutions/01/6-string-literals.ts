import { Equal, Expect } from "../../../../helper";

// 6. string literals 
// 6.1 only allow absolute path as arguments.
type Route = `/${string}`;
const goToRoute = (route: Route) => {};

goToRoute("/users");
goToRoute("/");
goToRoute("/admin/users");

// @ts-expect-error
goToRoute("users/1");
// @ts-expect-error
goToRoute("http://facebook.com");


// 6.2 dynamic Routes
type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

type DynamicRoutes = Extract<Routes, `/${string}/:id`>;

type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/posts/:id">>];
