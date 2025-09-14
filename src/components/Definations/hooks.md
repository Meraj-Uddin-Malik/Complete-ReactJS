Got it 👍 — let’s go step by step.

### ⚡ What are React Hooks?

Hooks are **special functions in React** that let you use features like **state, lifecycle, and context** inside **function components** (without writing classes).

---

### 🛠️ Commonly Used Hooks

1. **useState**

   * Lets you add state (data that changes) in a function component.

   ```js
   const [count, setCount] = useState(0);
   ```

2. **useEffect**

   * Runs side effects (like fetching data, setting timers).

   ```js
   useEffect(() => {
     console.log("Component mounted!");
   }, []);
   ```

3. **useContext**

   * Accesses data from React Context (global-like state).

   ```js
   const user = useContext(UserContext);
   ```

4. **useRef**

   * Holds a mutable value or references a DOM element.

   ```js
   const inputRef = useRef();
   ```

5. **useReducer**

   * Alternative to `useState` for complex state logic.

   ```js
   const [state, dispatch] = useReducer(reducer, initialState);
   ```

6. **useMemo**

   * Memoizes (remembers) expensive calculations to avoid re-running.

   ```js
   const result = useMemo(() => heavyCalc(data), [data]);
   ```

7. **useCallback**

   * Memoizes functions, useful when passing callbacks to child components.

   ```js
   const handleClick = useCallback(() => console.log("Clicked!"), []);
   ```

8. **useLayoutEffect**

   * Like `useEffect` but runs **before paint** (useful for DOM measurements).

---

### 🆕 React 19 (Latest) New Hooks

* **useActionState** → handle async actions (forms, API calls).
* **useFormStatus** → track form submission state.
* **useOptimistic** → optimistic UI updates.
* **use** → read promises or context directly.

---

In short:
**Hooks = functions that let you “hook into” React features inside function components.**