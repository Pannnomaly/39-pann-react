import DataTableAdmin from "../components/DataTableAdmin";
import InputBar from "../components/InputBar";
import ToggleButton from "../components/ToggleButton";

export default function Admin ()
{
    return (
        <div>
            <h1 className="mt-10 font-semibold text-2xl">Create User Here</h1>
            <div className="mt-5 flex justify-between items-center gap-10">
                <InputBar name={"name"} id={"name"} placeholder={"Name"} />
                <InputBar name={"lastname"} id={"lastname"} placeholder={"Last Name"} />
                <InputBar name={"position"} id={"position"} placeholder={"Position"} />
                <ToggleButton>Save</ToggleButton>
            </div>
            <DataTableAdmin />
        </div>
    );
}