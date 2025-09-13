# Event Propagation in React

## 1. Event Propagation

Event propagation defines how events travel through the DOM tree. It includes two main phases:

- **Capturing** (from root to target)
- **Bubbling** (from target back up to root)

React handles event propagation using its own `SyntheticEvent` system, but the concept remains the same.

---

## 2. Event Bubbling

Event bubbling is the default behavior where an event starts from the target element and bubbles up to its ancestors.

- If you click on a child element, the click event will first trigger on the child, then on its parent, and so on up to the root.
- In React, you can handle events at any level of the component hierarchy, and the events will bubble up accordingly.

---

## 3. Event Capturing

Event capturing is the opposite of bubbling, where the event starts from the root and travels down to the target element.

- In React, you can use the `capture` option when adding event listeners to enable capturing phase handling.
- Example: `<div onClickCapture={handleClick}>` will handle the click event during the capturing phase before it reaches the target element.

---

## 4. Event Delegation

Event delegation is a technique where a single event listener is added to a parent element to manage events for its child elements.

- This reduces the number of event listeners in the DOM.
- In React, you can achieve event delegation by attaching an event handler to a common ancestor and using `event.target` to determine which child element triggered the event.

---

## 5. `stopPropagation`

The `stopPropagation` method is used to stop the event from bubbling up or capturing down the DOM tree.

- In React, call `event.stopPropagation()` within an event handler to prevent further propagation.
- Useful when you want to isolate the event handling to a specific element.

---

## 6. `preventDefault`

The `preventDefault` method is used to prevent the default action associated with an event.

- In React, call `event.preventDefault()` within an event handler to stop the default behavior (e.g., preventing a form submission or a link navigation).
- Allows you to implement custom behavior for events.

---

## 7. Synthetic Events

React uses a `SyntheticEvent` system to handle events, which is a cross-browser wrapper around the native event.

- Synthetic events have the same interface as native events but work identically across all browsers.
- This ensures consistent behavior and performance optimizations in React applications.