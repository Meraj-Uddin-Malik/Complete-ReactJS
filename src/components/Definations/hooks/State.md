## What is `useState`?

`useState` lets you store and change data in a React function component.

**How to use:**
```jsx
const [value, setValue] = useState(initialValue);
```

**Why use it?**
- Remembers values like input or clicks.
- Works in function components.
- Updates the screen when data changes.

**Example:**
```jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
```
