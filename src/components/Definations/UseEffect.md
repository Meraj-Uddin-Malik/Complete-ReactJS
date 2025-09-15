# `useEffect` in React

The `useEffect` hook lets you perform side effects in function components. Common uses include data fetching, subscriptions, and manually changing the DOM.

## Basic Syntax

```jsx
import { useEffect } from "react";

useEffect(() => {

    return () => {
        // Cleanup code (optional)
    };
}, [/* dependencies */]);
```

## How It Works

- The effect runs after every render by default.
- The dependency array (`[]`) controls when the effect runs:
    - `[]`: Runs only once after the initial render.
    - `[value]`: Runs when `value` changes.
    - No array: Runs after every render.

## Example

```jsx
import { useEffect, useState } from "react";

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>
    );
}
```

## Cleanup

Use the return function for cleanup (e.g., unsubscribing):

```jsx
useEffect(() => {
    const id = setInterval(() => {
        // Do something
    }, 1000);

    return () => clearInterval(id);
}, []);
```

## References

- [React Docs: useEffect](https://react.dev/reference/react/useEffect)