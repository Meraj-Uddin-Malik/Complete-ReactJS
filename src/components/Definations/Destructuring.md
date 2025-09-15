# Destructuring in React

Destructuring is a JavaScript feature that allows you to extract values from arrays or properties from objects into distinct variables. In React, destructuring is commonly used to simplify code, especially when working with props and state.

## Destructuring Props

Instead of accessing props via `props.propertyName`, you can destructure them directly in the function parameter:

```jsx
// Without destructuring
function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// With destructuring
function Welcome({ name }) {
    return <h1>Hello, {name}!</h1>;
}
```

## Destructuring State

When using the `useState` hook, destructuring helps assign state and its updater function:

```jsx
const [count, setCount] = useState(0);
```

## Destructuring in Class Components

You can destructure props or state inside the render method:

```jsx
class Welcome extends React.Component {
    render() {
        const { name } = this.props;
        return <h1>Hello, {name}!</h1>;
    }
}
```

## Benefits

- Cleaner and more readable code
- Reduces repetition
- Makes it easier to see which props or state variables are being used

---

**Tip:** Use destructuring to write concise and maintainable React components.