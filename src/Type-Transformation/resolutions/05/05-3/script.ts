// 3 why is divElement2 not of type HTMLDivElement?
const divElement = document.querySelector("div");
const spanElement = document.querySelector("span");
const divElement2 = document.querySelector('div.foo');

/*
    The document.querySelector is a method that can select any type of HTML element based on a CSS selector.
    Because the CSS selector can match any type of element, the return type of 
    document.querySelector is Element | null by default, which is the base type for all HTML elements.
    
    The querySelector method returns an Element node that matches the specified selector, which in this case is 'div.foo'.
    While it is true that the element returned will be a div element with the class foo, 
    the return type of querySelector is still Element, not HTMLDivElement.

    On the other hand, divElement and spanElement are declared with more specific types (HTMLDivElement | null and HTMLSpanElement | null, respectively)
    because they are explicitly specified the expected types of these elements.

    const divElement = document.querySelector('div'): // HTMLDivElement | null 
    const spanElement = document.querySelector("span"); // HTMLSpanElement | null
    const divElement2 = document.querySelector("div.foo"); // Element | null
    
    TypeScript cannot infer the exact type of the element because div.foo could, 
    in theory, match any element with the class foo, not necessarily a div element.

    Possible solutions to above case can be applied using type assertions:
    const divElement = document.querySelector('div') as HTMLDivElement | null;
    const spanElement = document.querySelector('span') as HTMLSpanElement | null;
    const divElement2 = document.querySelector('div.foo') as HTMLDivElement | null;

    Or using generics in querySelector defining datatypes for DOM manipulation:
    const divElement = document.querySelector<HTMLDivElement>('div');
    const spanElement = document.querySelector<HTMLSpanElement>('span');
    const divElement2 = document.querySelector<HTMLDivElement>('div.foo');
    // In this case divElement2 is of type HTMLDivElement | null

*/

// DOM Manipulation
divElement.style.backgroundColor = 'red';
divElement2.style.backgroundColor = 'green';
