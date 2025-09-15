import { useState } from "react";
import "../../EV.css";

export default function Counter() {
const [count, setCount] = useState(0);

return (
<section className="main-div">
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)} className="">+ Increment</button>
    <button onClick={() => setCount(count - 1)}>- Decrement</button>
    <button onClick={() => setCount(0)}>Reset</button>
</section>
)
}