## What is `useState`?

The `useState` hook is a built-in React function that lets you add state to functional components. It returns a stateful value and a function to update it.

**Syntax:**
```jsx
const [state, setState] = useState(initialValue);
```

## Why Do We Need `useState`?

- **State Management:** React components often need to remember information (state) between renders, such as user input, toggles, or fetched data.
- **Functional Components:** Before hooks, only class components could have state. `useState` enables state in functional components.
- **Reactivity:** When the state changes, React automatically re-renders the component to reflect the new state.

**Example:**
```jsx
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() =>-+-+-+-+-+
# React States: Understanding `useState` and Its Importance

## What is `useState`?

`useState` is a special function in React that allows functional components to keep track of changing data, known as state. It provides a way to declare a state variable and a function to update it.

**Basic usage:**
```jsx
const [value, setValue] = useState(defaultValue);
```

## Why Use `useState`?

- **Dynamic Data:** Components often need to update their display based on user actions or other events. State lets you store and update this data.
- **Functional Components:** With hooks like `useState`, you can manage state without writing class components.
- **Automatic Updates:** When state changes, React re-renders the component, ensuring the UI stays in sync.

**Simple Example:**
```jsx
import { useState } from 'react';

function Example() {
    const [text, setText] = useState('Hello');

    return (
        <div>
            <span>{text}</span>
            <button onClick={() => setText('World')}>Change</button>
        </div>
    );
}
```