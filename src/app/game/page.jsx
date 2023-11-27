"use client";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiCircle } from "react-icons/bi";

const TicTacToe = () => {
  const [tos, setTos] = useState();
  const [id, setId] = useState();
  //   const [tic, setTic] = useState(false);
  //   const [tac, setTac] = useState(false);

  return (
    <div className="grid h-screen text-white place-items-center">
      <div className="space-y-4">
        <div className="flex justify-center gap-4">
          <AiOutlineClose
            onClick={() => setTos("tic")}
            size={"4rem"}
            className={`rounded ${tos === "tic" && "bg-slate-800"}`}
          />
          <BiCircle
            onClick={() => setTos("tac")}
            size={"4rem"}
            className={`rounded ${tos === "tac" && "bg-slate-800"}`}
          />
        </div>
        <div className="grid grid-cols-3 grid-rows-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
            <div
              id={e}
              onClick={() => setId(e)}
              key={e}
              className="grid w-20 h-20 border place-items-center"
            >
              {id === e &&
                (tos === "tic" ? (
                  <AiOutlineClose size={"4rem"} />
                ) : (
                  <BiCircle size={"4rem"} />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
