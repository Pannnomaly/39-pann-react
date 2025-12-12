export default function DataTableUser ()
{
    return (
        <div className="flex justify-center items-center mt-20 shadow-md">
            <table className="text-center text-xl">
                <thead>
                    <tr className="bg-pink-200">
                        <th className="border px-30 py-4">Name</th>
                        <th className="border px-30 py-4">Lastname</th>
                        <th className="border px-30 py-4">Position</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-30 py-4">John</td>
                        <td className="border px-30 py-4">Doe</td>
                        <td className="border px-30 py-4">Admin</td>
                    </tr>
                    <tr>
                        <td className="border px-30 py-4">Jane</td>
                        <td className="border px-30 py-4">Doe</td>
                        <td className="border px-30 py-4">User</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}