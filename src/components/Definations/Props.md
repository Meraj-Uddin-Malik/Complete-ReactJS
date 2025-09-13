## Why Do We Use Props in React?

Props (short for "properties") are used in React to pass data from one component to another, typically from a parent component to a child component. They allow components to be dynamic and reusable by enabling them to receive different data and behave accordingly.

**Key reasons for using props:**
- **Data Flow:** Props enable one-way data flow, making it easier to manage and debug your application.
- **Reusability:** Components can be reused with different data by passing different props.
- **Customization:** Props allow you to customize the behavior and appearance of components without modifying their internal code.

**Example:**
```jsx
function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Welcome name="Alice" />
```
In this example, the `name` prop is passed to the `Welcome` component, allowing it to display a personalized message.