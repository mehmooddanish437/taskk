import Image from "next/image";
import SideBar from "./Components/SideBar";

export default function Home() {
  return (
    <main className="min-h-[100vh] max-h-[100vh] overflow-y-auto  bgGradient flex ">
  
     <SideBar/>

   <div className="w-full px-5">
<h1 className="nebula text-white mt-[30px] text-[32px] leading-none  font-normal">Welcome, Mike</h1>
<p className="plus-jakarta-sans text-white mb-6 text-base leading-none font-normal">Here is your articles history</p>
<div className="rounded-[22px] border-gradient">
<div className="table-bg rounded-[22px]">
<div className="bg-[#6F40B0] boxShadow2 border-b-[4px] border-[#E945D0] w-full flex py-4 gap-5 items-start rounded-t-[22px] pl-5">
<div className="text-white w-full max-w-[17px]">#</div>
<div className="text-white w-full max-w-[120px]">Photo</div>
<div className="text-white w-full max-w-[187px]">Headline</div>
<div className="text-white w-full min-w-[426px] max-w-[426px]">Preview</div>
<div className="text-white w-full max-w-[131px]">Created Date</div>
<div className="text-white w-full"></div>
</div>
<div className="mt-5">
<div className="flex gap-5 items-center pl-5 text-white">
  <div className="w-full max-w-max">01</div>
  <div className="w-full max-w-[120px]"><Image src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Astronaut-final%207.png" height={90} width={120} alt="image"/></div>
  <div className="w-full max-w-[187px]"><p className="plus-jakarta-sans text-[14px] font-normal leading-[142.857%] ">Lorem ipsum dolor sit amet, consect etur sed det dolor</p></div>
  <div className="w-full min-w-[426px] max-w-[426px]"><p className="plus-jakarta-sans text-[14px] font-normal leading-[142.857%] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p></div>
  <div className="w-full max-w-[131px]"><p className="plus-jakarta-sans text-[14px] font-normal leading-[142.857%] ">April 2022,  Sunday   2:00PM </p></div>
 <div className="w-full flex justify-center items-center">  <button className="btn-shadow rounded-[10px] leading-[153.333%] border-[1px] border-[#FFFFFF80] px-[14px] py-[7px]">View</button></div>
</div>

</div>
<div className="mt-5">
<div className="flex gap-5 items-center pl-5 text-white">
  <div className="w-full max-w-max">02</div>
  <div className="w-full max-w-[120px]"><Image src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Astronaut-final%2013.png" height={90} width={120} alt="image"/></div>
  <div className="w-full max-w-[187px]"><p className="plus-jakarta-sans text-[14px] font-normal leading-[142.857%] ">Lorem ipsum dolor sit amet, consect etur sed det dolor</p></div>
  <div className="w-full min-w-[426px] max-w-[426px]"><p className="plus-jakarta-sans text-[14px] font-normal leading-[142.857%] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p></div>
  <div className="w-full max-w-[131px]"><p className="plus-jakarta-sans text-[14px] font-normal leading-[142.857%] ">April 2022,  Sunday   2:00PM </p></div>
 <div className="w-full flex justify-center items-center">  <button className="btn-shadow rounded-[10px] leading-[153.333%] border-[1px] border-[#FFFFFF80] px-[14px] py-[7px]">View</button></div>
</div>

</div>
<div className="mt-5">
<div className="flex gap-5 items-center pl-5 text-white">
  <div className="w-full max-w-max">03</div>
  <div className="w-full max-w-[120px]"><Image src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Astronaut-final%2014.png" height={90} width={120} alt="image"/></div>
  <div className="w-full max-w-[187px]"><p className="plus-jakarta-sans text-[14px] font-normal leading-[142.857%] ">Lorem ipsum dolor sit amet, consect etur sed det dolor</p></div>
  <div className="w-full min-w-[426px] max-w-[426px]"><p className="plus-jakarta-sans text-[14px] font-normal leading-[142.857%] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p></div>
  <div className="w-full max-w-[131px]"><p className="plus-jakarta-sans text-[14px] font-normal leading-[142.857%] ">April 2022,  Sunday   2:00PM </p></div>
 <div className="w-full flex justify-center items-center">  <button className="btn-shadow rounded-[10px] leading-[153.333%] border-[1px] border-[#FFFFFF80] px-[14px] py-[7px]">View</button></div>
</div>

</div>
<div className="mt-5">
<div className="flex gap-5 items-center pl-5 text-white">
  <div className="w-full max-w-max">04</div>
  <div className="w-full max-w-[120px]"><Image src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Astronaut-final%207.png" height={90} width={120} alt="image"/></div>
  <div className="w-full max-w-[187px]"><p className="plus-jakarta-sans text-[14px] font-normal leading-[142.857%] ">Lorem ipsum dolor sit amet, consect etur sed det dolor</p></div>
  <div className="w-full min-w-[426px] max-w-[426px]"><p className="plus-jakarta-sans text-[14px] font-normal leading-[142.857%] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p></div>
  <div className="w-full max-w-[131px]"><p className="plus-jakarta-sans text-[14px] font-normal leading-[142.857%] ">April 2022,  Sunday   2:00PM </p></div>
 <div className="w-full flex justify-center items-center">  <button className="btn-shadow rounded-[10px] leading-[153.333%] border-[1px] border-[#FFFFFF80] px-[14px] py-[7px]">View</button></div>
</div>

</div>
<div className="py-5">
<div className="flex gap-5 items-center pl-5 text-white">
  <div className="w-full max-w-max">05</div>
  <div className="w-full max-w-[120px]"><Image src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Astronaut-final%207.png" height={90} width={120} alt="image"/></div>
  <div className="w-full max-w-[187px]"><p className="plus-jakarta-sans text-[14px] font-normal leading-[142.857%] ">Lorem ipsum dolor sit amet, consect etur sed det dolor</p></div>
  <div className="w-full min-w-[426px] max-w-[426px]"><p className="plus-jakarta-sans text-[14px] font-normal leading-[142.857%] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p></div>
  <div className="w-full max-w-[131px]"><p className="plus-jakarta-sans text-[14px] font-normal leading-[142.857%] ">April 2022,  Sunday   2:00PM </p></div>
 <div className="w-full flex justify-center items-center">  <button className="btn-shadow rounded-[10px] leading-[153.333%] border-[1px] border-[#FFFFFF80] px-[14px] py-[7px]">View</button></div>
</div>

</div>
<div className=""/>
</div>
</div>
   </div>
    </main>
  )
}
