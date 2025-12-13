export default function ToggleButton ({ children, onClick, disabled, type })
{
    return (
        <button onClick={onClick} disabled={disabled} type={type} className="px-5 py-3 bg-pink-200 hover:bg-pink-300 hover:text-pink-100 border border-pink-200 rounded-md shadow-md text-xl font-semibold transition duration-300 ease-in-out cursor-pointer">
            {children}
        </button>
    );
}