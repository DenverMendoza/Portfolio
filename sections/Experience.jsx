import WorkExperience from "./sub-section/WorkExperience";
import { experiences } from "../src/data/experiences";

export const Experience = () => {
    return <section>
        <h1 className = "font-bold text-xl mb-2">Experience</h1>
        {
            
            experiences.map(
                (exp, index) => 
                    <WorkExperience 
                        key = {index}
                        Company={exp.company}
                        Position={exp.position}
                        Year={exp.year}
                        Description={exp.description}
                    />
            )
        }  
    </section>
}