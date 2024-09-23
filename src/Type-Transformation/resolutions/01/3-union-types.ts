import { Equal, Expect } from "../../../../helper";

// 3. unions types
type A =
    | {
        type: "a";
        a: string;
    }
    | {
        type: "b";
        b: string;
    }
    | {
        type: "c";
        c: string;
    };

type B = "a" | "b" | "c";

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


type ClickEvent = Extract<Event, { type: 'click' }>;    
type EventType = Event['type'];

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
const arr: tests = [true];

type tests2 = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];
const arr2: tests2 = [true];
