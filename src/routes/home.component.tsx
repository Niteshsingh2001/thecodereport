import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { ChangeEvent, useState } from "react";

export function Home() {

    const [color, setColor] = useState("#000000")
    function handleColor(event: ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value)
    }
    return (
        <div style={{ color: color }} className="flex flex-col gap-2 px-2 " >
            <Navbar>
                <input type="color" value={color} onChange={handleColor} aria-label='text_color' />
            </Navbar>
            <Outlet />
        </div>
    )
}