import { create } from 'zustand';

interface Post {
    id: number,
    title: string;
    body: string;
}

interface CounterState {
    count: number;
    title: string;
    increment: (value: number) => void;
    posts: Post[];
    getPosts: () => Promise<void>;
    clearStore: () => void;
    multiply: (value: number) => void;
}

export const useCounterStore = create<CounterState>((set, getState) => ({
    count: 10,
    title: "Some title",
    increment: (value: number) => set((state) => ({
        count: state.count + value
    })),
    posts: [],
    getPosts: async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        console.log(data)
        set(state => ({...state, posts: data}))
    },
    clearStore: () => set({}, true),
    multiply: (value: number) => {
        const { count } = getState()
        set({ count: count * value });
    },
}))