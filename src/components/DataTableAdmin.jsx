import ToggleButton from "./ToggleButton";

export default function DataTableAdmin ()
{
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
                    <tr>
                        <td className="border px-30 py-4">John</td>
                        <td className="border px-30 py-4">Doe</td>
                        <td className="border px-30 py-4">Admin</td>
                        <td className="border px-30 py-4"><ToggleButton>Delete</ToggleButton></td>
                    </tr>
                    <tr>
                        <td className="border px-30 py-4">Jane</td>
                        <td className="border px-30 py-4">Doe</td>
                        <td className="border px-30 py-4">User</td>
                        <td className="border px-30 py-4"><ToggleButton>Delete</ToggleButton></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}