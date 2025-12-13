import ToggleButton from "./ToggleButton";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DataTableAdmin ()
{
    const url = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {

        console.log("useEffect started. . .");

        const fetchData = async () => {

            try {

                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {

                setError(error);
                console.log(error);
            } finally {

                setLoading(false);
                console.log("useEffect finished. . .");
            }
        };

        fetchData();
    }, []);

    console.log(data);

    const handleDelete = async (id) => {

        try {
            
            await axios.delete(`${url}/${id}`);
            setData(prev => prev.filter(item => item.id !== id));
            console.log("Delete successful");
        } catch (error) {
            setError(error);
            console.log(error);
        }
    };

    if (loading)
    {
        return <div className="w-full flex justify-center items-center font-semibold text-xl mt-10">Loading data. . .</div>
    }

    if (error)
    {
        return (
            <div className="w-full flex justify-center items-center font-semibold text-xl text-red-500 mt-10">
                Error: {error.className}
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center mt-20">
            <table className="text-center text-xl shadow-md">
                <thead>
                    <tr className="bg-pink-200">
                        <th className="border px-30 py-4">Name</th>
                        <th className="border px-30 py-4">Lastname</th>
                        <th className="border px-30 py-4">Position</th>
                        <th className="border px-30 py-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr>
                            <td className="border px-30 py-4">{item.name}</td>
                            <td className="border px-30 py-4">{item.lastname}</td>
                            <td className="border px-30 py-4">{item.position}</td>
                            <td className="border px-30 py-4"><ToggleButton type={"button"} onClick={() => handleDelete(item.id)}>Delete</ToggleButton></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}