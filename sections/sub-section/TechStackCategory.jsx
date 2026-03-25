import { techstack } from "../../src/data/techstack"

function TechStackCategory(){
    return (
        <div>
            {techstack.map((stack, index) => ( 
                    <div className="mb-4" key={index}>
                        <h2 className="text-md font-semibold mb-3">{stack.category}</h2>
                        <div className="flex flex-wrap gap-3">
                                {stack.skills.map((skill, i) => (
                                    <ul className="bg-gray-200 py-1 px-3 rounded-sm" key={i}>{skill}</ul>
                                ))}
                        </div>
                    </div>
            ))}
        </div>
    )
}

export default TechStackCategory