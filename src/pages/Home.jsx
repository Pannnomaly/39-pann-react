import { useState } from "react";
import ToggleButton from "../components/ToggleButton";
import User from "./User";
import Admin from "./Admin";

export default function Home ()
{
    const [view, setView] = useState("");

    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <div>
                <h1 className="font-semibold text-5xl">Generation Thailand React - Assessment</h1>
            </div>

            <div className="flex justify-center items-center mt-10 gap-10">
                <ToggleButton onClick={() => {
                    setView("user");
                }}>
                    <p>User Home View</p>
                </ToggleButton>
                <ToggleButton onClick={() => {
                    setView("admin");
                }}>
                    <p>Admin Home View</p>
                </ToggleButton>
            </div>

            {view === "user" && <User />}
            {view === "admin" && <Admin />}
        </div>
    );
}