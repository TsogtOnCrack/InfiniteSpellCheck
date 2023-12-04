"use client";
import { eslint } from "@/next.config";
import { galig } from "./galig";
import { useState, useEffect } from "react";

export default function Home() {
  const [text, setState] = useState("");
  const [fontSize, setFontSize] = useState(20);

  useEffect(() => {
    const storeFont = localStorage.getItem("FONT");
    const store = localStorage.getItem("TEXT");
    if (store) {
      setState(store);
    }
    if (storeFont) {
      setFontSize(storeFont);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("TEXT", text);
  }, [text]);

  useEffect(() => {
    localStorage.setItem("FONT", fontSize);
  }, [fontSize]);


  const togleSpellCheck = () =>{

    alert("Coming Soon!")
  }

  return (
    <main className="flex text-[20px] min-h-screen flex-col  items-center justify-center">
      <div className=" text-white w-screen h-screen flex flex-col">
        <div className="w-full h-fit py-4 px-28 mt-2 flex flex-row justify-between items-center">
          <div className="flex flex-row items-end ">
            <p className="font-bold">M-TYPE</p>
            <p className="text-[10px] mb-[5px] ml-3 text-slate-500">
              by the only TSOGT
            </p>
          </div>

          <div className="flex flex-row items-center justify-center">
            <p className="text-[10px] uppercase mx-2 text-slate-500 ">
              font-size
            </p>
            <input
              className="text-white w-[50px] pl-2 text-[16px] flex justify-center items-center rounded-sm bg-white/10 "
              type="number"
              value={fontSize}
              onChange={(e) => {
                setFontSize(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-row">
            <div
              onClick={() => {
                localStorage.setItem("TEXT", "");
                setState("");
              }}
              className="text-[12px] rounded-md  text-slate-500  hover:bg-slate-800/80 mx-2 py-1 cursor-pointer px-2 uppercase "
            >
              clear
            </div>
            <div onClick={()=>{
              togleSpellCheck()
            }} className=" text-[12px] rounded-md  text-slate-500 hover:bg-slate-800/80 py-1 cursor-pointer px-2 uppercase ">
              spell-check
            </div>
          </div>
        </div>
        <textarea
          placeholder="Type here ..."
          type="text"
          className={`w-full text-[${fontSize}px] mt-4 h-full rounded-md  px-24 bg-transparent outline-none flex flex-wrap`}
          value={text}
          onChange={(e) => {
            setState(galig(e.target.value));
          }}
        />
      </div>
    </main>
  );
}
