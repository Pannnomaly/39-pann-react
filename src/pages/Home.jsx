import { useState } from "react";
import ToggleButton from "../components/ToggleButton";
import User from "./User";
import Admin from "./Admin";

export default function Home ()
{
    const [view, setView] = useState("");
    const [positionView, setPositionView] = useState("");

    return (
        <div className="min-h-dvh bg-pink-50 flex flex-col justify-center items-center">
            <div>
                <h1 className="font-semibold text-5xl">Generation Thailand</h1>
            </div>
            <div className="mt-5">
                <h1 className="font-semibold text-5xl">
                    {positionView ? `${positionView}` : "React - Assessment"}
                </h1>
            </div>

            <div className="flex justify-center items-center mt-10 gap-10">
                <ToggleButton onClick={() => {
                    setView("user");
                    setPositionView("Home - User Section");
                }}>
                    <p>User Home View</p>
                </ToggleButton>
                <ToggleButton onClick={() => {
                    setView("admin");
                    setPositionView("Home - Admin Section");
                }}>
                    <p>Admin Home View</p>
                </ToggleButton>
            </div>

            {view === "user" && <User />}
            {view === "admin" && <Admin />}
        </div>
    );
}