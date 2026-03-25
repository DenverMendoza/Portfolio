function WorkExperience({ Company, Position, Year, Description }) {
    return (

    <div className="w-full">
        <div className="flex gap-x-3 relative group rounded-lg hover:bg-surface">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:-translate-x-[0.5px] after:border-s after:border-line-2">
                <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-2 rounded-full bg-layer border-2 border-line-3 group-hover:border-line-6"></div>
                </div>
            </div>
            <div className="grow pt-0.5 pb-4">
                <h3 className="text-sm font-bold">{Position}</h3>
                <div className="flex text-xs justify-between gap-3">
                    <p className="grow">{Company}</p>
                    <p>{Year}</p>
                </div>  
            </div>
        </div>
    </div>

)
}

export default WorkExperience