import { useState } from "react";
import DataTableAdmin from "../components/DataTableAdmin";
import axios from "axios";

export default function Admin ()
{
    const url = "https://67eca027aa794fb3222e43e2.mockapi.io/members";
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormdata] = useState({
        name: "",
        lastname: "",
        position: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata ((prev) => ({
            ...prev, [name]: value,
        }));
    };

    const handleSave = async (e) => {

        e.preventDefault();
        setLoading(true);

        try {
            
            const response = await axios.post(url, formData);
            console.log(formData, response.data);

            setFormdata({
                name: "",
                lastname: "",
                position: "",
            });
        } catch (error) {
            
            setError(error);
            console.log(error);
        } finally {

            setLoading(false);
            console.log("save user finished. . .");
        }
    }

    if (loading)
    {
        return <div className="w-full flex justify-center items-center font-semibold text-xl mt-10">Loading data. . .</div>
    }

    if (error)
    {
        <div>
            Error: {error.className}
        </div>
    }

    return (
        <form onSubmit={handleSave} className="w-[90%] flex flex-col">
            <div>
                <h1 className="mt-10 ml-8 font-semibold text-2xl">Create User Here</h1>
            </div>
            
            <div className="mt-5 flex justify-between items-center">
                <input id="name" type="text" className="w-md h-15 p-5 text-xl bg-pink-100 rounded-md shadow-md" placeholder="Name" value={formData.name} onChange={handleChange} disabled={loading} />
                <input type="text" className="w-md h-15 p-5 text-xl bg-pink-100 rounded-md shadow-md" placeholder="Last name" value={formData.lastname} onChange={handleChange} disabled={loading} />
                <input type="text" className="w-md h-15 p-5 text-xl bg-pink-100 rounded-md shadow-md" placeholder="Position" value={formData.position} onChange={handleChange} disabled={loading} />
                <button type="submit" className="px-5 py-3 bg-pink-200 hover:bg-pink-300 hover:text-pink-100 border border-pink-200 rounded-md shadow-md text-xl font-semibold transition duration-300 ease-in-out cursor-pointer" disabled={loading} >{loading ? "Saving. . ." : "Save"}</button>
            </div>
            <DataTableAdmin />
        </form>
    );
}