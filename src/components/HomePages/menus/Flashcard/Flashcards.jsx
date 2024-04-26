import Navbar from "../../../Navbar/Navbar";
import { IoHomeOutline } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa";




const Flashcards = () => {
    return(
        <div>
             <Navbar/>
             <div className="flex items-center gap-1 p-10">
             <IoHomeOutline /> 
             <FaGreaterThan />
             <h5>Flashcard</h5>
             <FaGreaterThan />
             <h5>Mathematics</h5>
             <FaGreaterThan />
             <h3 className="text-[#06286E] font-semibold text-1xl">Relation and Function</h3>
             </div>
             <h2 className="text-[#06286E] text-2xl font-bold px-10">Relations and Functions ( Mathematics )</h2>
        </div>
    )}
export default Flashcards;