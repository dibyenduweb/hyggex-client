import { FaRegLightbulb } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";


const Mathematics = () => {
    return(
        <div>
             <ul className="flex gap-4 justify-center text-[#264074] p-4">
                <li className="underline">Study</li>
                <li>Quiz</li>
                <li>Test</li>
                <li>Game</li>
                <li>Others</li>
             </ul>
             <div>
                <div className="w-[721px] h-[393px] bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-lg ">
              <div className="text-3xl text-white flex justify-between p-6">
              <FaRegLightbulb />
                <AiFillSound />
              </div>

              <div className="text-center text-white text-4xl p-24">
              <h2>9 + 6 + 7x - 2x - 3</h2> 
              </div>
              
                </div>
             </div>
             <div class="flex justify-between max-w-2xl mx-auto p-4">
    <img src="/public/image/try.png" alt="" class="max-h-6" />
    <img src="/public/image/rarrow.png" alt="" class="max-h-10" />
    <h2 className="text-2xl font-bold">01 / 10</h2>
    <img src="/public/image/larrow.png" alt="" class="max-h-10" />
    <img src="/public/image/crop.png" alt="" class="max-h-6" />
</div>

        </div>
    )}
export default Mathematics;