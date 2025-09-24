# `useMemo` Hook in React

The `useMemo` hook is used to optimize performance by memoizing the result of a calculation between renders.

## Syntax

```jsx
const memoizedValue = useMemo(() => computeValue(a, b), [a, b]);
```

- The function only recomputes when dependencies (`a`, `b`) change.

## Example

```jsx
import React, { useMemo, useState } from "react";

function ExpensiveComponent({ number }) {
    const squared = useMemo(() => {
        console.log("Calculating...");
        return number * number;
    }, [number]);

    return <div>Squared: {squared}</div>;
}
```

## When to Use

- Expensive calculations in render.
- Avoiding unnecessary recalculations.

## Notes

- Only optimize when necessary.
- Do **not** use for side effects (use `useEffect` instead).

[React Docs: useMemo](https://react.dev/reference/react/useMemo)