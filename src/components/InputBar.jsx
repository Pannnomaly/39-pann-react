export default function InputBar ({ name, id, placeholder })
{
    return (
        <div>
            <input type="text" name= {name} id= {id} placeholder= {placeholder} className="w-sm h-15 p-5 text-xl bg-pink-100 rounded-md" />
        </div>
    );
}