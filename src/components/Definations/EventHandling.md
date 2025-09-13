# Event Handling in React

Event handling in React is similar to handling events on DOM elements, but with some syntactic differences. React events are named using camelCase, and you pass a function as the event handler.

## Example: Handling a Button Click

```jsx
import React from 'react';

function ClickButton() {
    function handleClick() {
        alert('Button was clicked!');
    }

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );
}

export default ClickButton;
```

**Explanation:**
- The `onClick` attribute is used to handle the click event.
- The `handleClick` function is called when the button is clicked.
