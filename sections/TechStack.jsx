import SectionHeader from "../components/SectionHeader"
import TechStackCategory from "./sub-section/TechStackCategory"

export const TechStack = () => {
    return <section className="p-4">
       <SectionHeader>Tech Stack</SectionHeader>
       <TechStackCategory></TechStackCategory>
    </section>
}