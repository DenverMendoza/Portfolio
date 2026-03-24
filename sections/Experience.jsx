import WorkExperience from "./sub-section/WorkExperience";
import SectionHeader from "../components/SectionHeader";
import { experiences } from "../src/data/experiences";

export const Experience = () => {
    return <section>
        <SectionHeader>Experience</SectionHeader>
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