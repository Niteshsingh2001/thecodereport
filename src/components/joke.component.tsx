import { useEffect, useState } from "react";
import { jokesStore } from "../data/jokes";

const generateRandomIndexes = (numberOfJokes: number) => {
    const indexes: number[] = [];
    while (indexes.length < numberOfJokes) {
        const randomIndex = Math.floor(Math.random() * jokesStore.length);
        if (!indexes.includes(randomIndex)) {
            indexes.push(randomIndex);
        }
    }
    return indexes
};

export function Jokes({ numberOfJokes }: { numberOfJokes: number }) {
    const [randomIndexes, setRandomIndexes] = useState<number[]>([]);

    useEffect(() => {
        setRandomIndexes(generateRandomIndexes(numberOfJokes))
    }, [numberOfJokes]);

    return (
        <div>
            <h1 className="text-3xl font-bold py-2 capitalize">😂 Fun never stops</h1>
            <ul className="flex flex-col gap-2 ">
                {randomIndexes.map((index) => {
                    const { setup, punchline, type } = jokesStore[index]
                    return <li key={type}>
                        {setup} &nbsp;
                        {punchline}
                    </li>
                })}
            </ul>
        </div>
    );
}
