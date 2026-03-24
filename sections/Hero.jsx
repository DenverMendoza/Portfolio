import { FaDownload, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import Button from "../components/Button";
import resumeFile from "../src/data/resume.pdf";
import { mydata } from "../src/data/mydata";

export const Hero = () => {
  return <section>
    <div className="flex gap-x-5">
      <div className="h-40 w-40">
        <img src="../src/assets/images.jpg" className="w-full h-full object-cover"/>
      </div>
      <div className="grow content-center">    
        <h1 className = "text-3xl font-bold mb-1">{mydata.myName}</h1>
        <h1 className = "text-sm mb-3 flex items-center gap-1">
          <IoLocation  className="w-4 h-4"/>
          {mydata.myLocation}
        </h1>
        
        <h2 className = "text-lg font-semibold">
          {mydata.myRoles.slice(0, 3).join(" | ")}
        </h2>
        
        <div className="flex gap-4">
          <div className="mt-3">
            <Button
              onClick={() => {
                const link = document.createElement('a');
                link.href = resumeFile;
                link.download = `${mydata.myName.replace(" ", "")}-Resume.pdf`;
                link.click();
              }}
              variant={"border-solid border-1 border-black"}
            >
            <FaDownload className="w-4 h-4" />
            Download CV
            </Button>
          </div>

          <div className="mt-3">
            <Button
              onClick={() => window.open(`${mydata.myLinkedIn}` , "_blank")}
              variant={"border-solid border-1 border-blue-800 bg-blue-800 text-white"}
            >
            <FaLinkedin  className="w-4 h-4" />
            LinkedIn
            </Button>
          </div>

          <div className="mt-3">
            <Button
              variant={"border-solid border-1 border-gray-200 bg-gray-200"}
            >
            <MdEmail className="w-4 h-4"/>
            Send Email
            </Button>
          </div>
        </div>  
      </div>
    </div>
  </section>;
};