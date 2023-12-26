import React from "react";
import { RingLoader } from "react-spinners";

const Loader = ()=>{
    return (
        <div className="bg-[#000013] flex items-center justify-center w-screen h-screen">
            <RingLoader color="#01c8ff"/>
        </div>
    );
}
export default Loader