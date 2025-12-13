export default function Inputbar ({ name, type, placeholder, value, onChange, disabled })
{
    return (
        <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled} className="w-md h-15 p-5 text-xl bg-pink-100 rounded-md shadow-md" />
    );
}