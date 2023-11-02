import * as React from "react";
import Image from "next/image";



export function Languages() {
  return (<>
  
  <div className="flex items-center gap-5">
  <Image src="images/languages.svg" alt="not found" width={20} height={20}/>


 <select className="bg-[#fff] w-[80px] outline-none border-[0px]" name="" id="">
    <option value="">Eng</option>
    <option value="">Arbic</option>

 
 </select>

  </div>
  
  
  </>
 
  )
}
