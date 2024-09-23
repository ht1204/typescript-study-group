import { it } from "vitest";


declare global {
  interface DispatchableEvent {
    LOG_IN: {
      username: string;
      password: string;
    };
  }

  /* *
     * This type converts the DispatchableEvent
     * interface into a union:
     *
     * { type: 'LOG_IN'; username: string; password: string; }
  */

  type UnionOfDispatchableEvents = {
    [K in keyof DispatchableEvent]: {
      type: K;
    } & DispatchableEvent[K];
  }[keyof DispatchableEvent];
}

// Global handler proposal
let globalEventHandler: ((event: UnionOfDispatchableEvents) => void) | null = null;

const setGlobalEventHandler = (handler: (event: UnionOfDispatchableEvents) => void) => {
  globalEventHandler = handler;
};


const dispatchEvent = (event: UnionOfDispatchableEvents) => {
  // Imagine that this function dispatches this event
  // to a global handler

  if (globalEventHandler) {
    globalEventHandler(event);
  } else {
    throw new Error("Global event handler is not set");
  }
};

it("Should be able to dispatch a LOG_IN and LOG_OUT event", () => {
  
  setGlobalEventHandler((event) => {
    console.log("Global event handler received event:", event);
  });

  dispatchEvent({ type: "LOG_IN", username: "username", password: "password" });
  dispatchEvent({ type: "LOG_OUT" });
});