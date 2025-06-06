import './App.css'
import { useCounterStore } from "./store/counterStore.ts";
import {useEffect} from "react";

function App() {

    const { title, count, increment, getPosts, posts, clearStore, multiply} = useCounterStore();

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <h1>{title} : {count}</h1>
            <button onClick={() => increment(10)}>
                Increment
            </button>
            <button onClick={() => clearStore()}>
                Clear
            </button>
            <button onClick={() => multiply(2)}>
                Multiply
            </button>
            <hr />
            <div>
                {JSON.stringify(posts)}
            </div>
            <hr />
        </div>
    )
}

export default App
