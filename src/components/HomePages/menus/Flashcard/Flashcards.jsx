import Navbar from "../../../Navbar/Navbar";
import { IoHomeOutline } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { IoArrowDownOutline } from "react-icons/io5";
import Mathematics from "./Mathematics";

const Flashcards = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center gap-1 p-10">
        <IoHomeOutline />
        <FaGreaterThan />
        <h5>Flashcard</h5>
        <FaGreaterThan />
        <h5>Mathematics</h5>
        <FaGreaterThan />
        <h3 className="text-[#06286E] font-semibold text-1xl">
          Relation and Function
        </h3>
      </div>
      <h2 className="text-[#06286E] text-2xl font-bold px-10">
        Relations and Functions ( Mathematics )
      </h2>

<div>
    <Mathematics/>
</div>



      <div className="flex items-center justify-between">
        <div className="flex items-center px-10">
          <div className="w-24 rounded-full shadow-2xl ">
            <img src="/public/image/icon2.png" alt="" />
          </div>
          <div>
            <p>Published by</p>
            <img src="/public/image/Component 40.png" alt="" />
          </div>
        </div>

        <div className="flex gap-1 items-center px-10">
          <IoIosAdd className="text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-2xl" />
          <h3 className="text-[#06286E] text-2xl ">Create Flashcard</h3>
        </div>
      </div>

      <h2 className="text-[#06286E] text-4xl font-bold p-10 ">FAQ</h2>

      <div class="container px-10">
        <div class="flex items-center justify-between max-w-2xl border border-gray-500 rounded-lg p-2 mb-4">
          <h3 class="text-black-500 leading-tight text-cap font-inter font-semibold text-lg md:text-xl">
            Can education flashcards be used for all age groups?
          </h3>
          <button class="flex items-center text-black-500 focus:outline-none">
            <IoArrowDownOutline class="w-6 h-6 ml-2" />
          </button>
        </div>
        <div class="flex items-center justify-between max-w-2xl border border-gray-500 rounded-lg p-2 mb-4">
          <h3 class="text-black-500 leading-tight text-cap font-inter font-semibold text-lg md:text-xl">
            How do education flashcards work?
          </h3>
          <button class="flex items-center text-black-500 focus:outline-none">
            <IoArrowDownOutline class="w-6 h-6 ml-2" />
          </button>
        </div>
        <div class="mb-24 flex items-center justify-between max-w-2xl border border-gray-500 rounded-lg p-2">
          <h3 class="text-black-500 leading-tight text-cap font-inter font-semibold text-lg md:text-xl">
            Can education flashcards be used for test preparation?
          </h3>
          <button class="flex items-center text-black-500 focus:outline-none">
            <IoArrowDownOutline class="w-6 h-6 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Flashcards;
