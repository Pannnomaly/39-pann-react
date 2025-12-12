export default function Owner ()
{
    return (
        <div className="min-h-dvh bg-pink-50 flex justify-center items-center">
            <div className="w-[50%] bg-pink-100 flex flex-col items-center gap-10 p-10 border-2 border-dashed border-pink-300 rounded-2xl shadow-md">
                <div>
                    <h1 className="font-semibold text-5xl">39_Supawith (Pann/ป่าน)</h1>
                </div>
                <div>
                    <img src="../public/pann-portrait2.jpg" alt="Nong Pann Portrait" width="350px" className="rounded-2xl object-cover shadow-md" />
                </div>
                <div>
                    <p className="font-semibold text-3xl">Short Biography</p>
                </div>
                <div className="w-[60%] text-lg text-center">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta itaque exercitationem voluptates nisi dolores! Neque eveniet illo, sit autem tempora quod nihil vitae error aliquid iure vero qui inventore quasi!</p>
                </div>
            </div>
        </div>
    );
}