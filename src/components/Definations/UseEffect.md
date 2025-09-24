## useEffect Hook in React

The `useEffect` hook lets you perform side effects in function components. Common uses include data fetching, subscriptions, or manually changing the DOM.

### Basic Syntax

```js
import { useEffect } from "react";

useEffect(() => {
    // Your code here (side effect)
}, [/* dependencies */]);
```

- The first argument is a function containing the side effect.
- The second argument is an array of dependencies. The effect runs when any dependency changes. If empty, it runs once after the initial render.

### Example: Fetching Data

```js
import { useEffect, useState } from "react";

function Example() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://api.example.com/data")
            .then(response => response.json())
            .then(setData);
    }, []); // Runs once

    return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}
```

### Cleanup

Return a function from `useEffect` to clean up resources (like subscriptions or timers):

```js
useEffect(() => {
    const timer = setInterval(() => {
        // Do something
    }, 1000);

    return () => clearInterval(timer); // Cleanup
}, []);
```

### Summary

- `useEffect` runs after render.
- Use dependencies to control when it runs.
- Return a cleanup function if needed.