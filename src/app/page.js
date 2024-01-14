"use client";
import React from "react";
export default function Home() {
  const [show, setShow] = React.useState(false);
  const [showInput, setShowInput] = React.useState(true);
  const handleShow = () => {
    setShow(!show);
  };

  const goToUrl = (url) => {
    window.open(url, "_blank");
  };

  const sendMessage = async () => {
    setShowInput(false);
  };

  return (
    <div
      className="relative bg-[#F7F7F7] h-screen w-full"
      style={{
        backgroundImage: `url("background.png") , url("bullets.png")`,
        backgroundSize: "150%, 80%",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "-40% bottom,  -20% bottom ",
      }}
    >
      
      <div className=" absolute top-10 left-0 right-0 pl-6 pr-2 py-4">
        <span className="text-[28px] font-bold text-[#243439] italic">
          Don&apos;t close your eyes to <br />
          human trafficking
        </span>
      </div>
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-full  pl-6 pr-[120px]">
          <ul className="flex flex-col gap-12 mb-24  items-center">
            <li className="w-full mx-auto">
              <ButtonComponent
                label="Vote"
                onClick={() =>
                  goToUrl(
                    "https://app.sli.do/event/7GymX9dXhb64yG8oCrjmjR/live/polls"
                  )
                }
              />
            </li>
            <li className="w-full mx-auto">
              <ButtonComponent
                label="Q&A"
                onClick={() =>
                  goToUrl(
                    "https://app.sli.do/event/7GymX9dXhb64yG8oCrjmjR/live/questions"
                  )
                }
              />
            </li>
            <li className="w-full mx-auto">
              <ButtonComponent label="Melania" onClick={handleShow} />
            </li>
          </ul>
        </div>
      </div>
      {show ? (
        <div className=" absolute z-50 bottom-16 left-0 right-0 h-[45vh]">
          <div className="mb-4 relative w-4/5 bg-[#EDE5DE] border-2 border-[#302A36] m-4 rounded-lg ">
            <button
              onClick={handleShow}
              className=" absolute -top-3 -right-3 w-[36px] h-[36px] rounded-full border-2 border-[#302A36] bg-[#B8A99A]"
            >
              X
            </button>
            <div className="w-full h-full p-5 text-sm">
              <p className=" text-[#302A36] font-medium">
                Credeți că Melania este conștientă de potențialele pericole
                asociate cu astfel de interacțiuni online? De ce da sau de ce
                nu?
              </p>
              <p className=" text-[#302A36] font-medium italic mt-2">
                Do you think Melania is aware of the potential dangers
                associated with such online interactions? Why or why not?
              </p>
              {!showInput ? (
                <div className="w-full mt-4">
                  
                  <p className="text-[#960000] text-md italic">Your answer has been sent. Thank you!</p>
                </div>
              ) : (
                <div className="w-full mt-4">
                  <textarea
                    className=" resize-none w-full p-3 rounded-md outline outline-2 border-2 border-white -outline-offset-4 outline-[#EDE5DE] placeholder:italic placeholder:text-[12px]"
                    rows={3}
                    placeholder="Type here..."
                  />
                  <button
                    onClick={() => sendMessage()}
                    className="w-full flex items-center justify-center mt-2 rounded-md bg-[#243439] py-3 fill-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

const ButtonComponent = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative bg-[#E6E6E6] w-full max-w-[260px] h-[50px] rounded-full outline outline-4 outline-[#243439] overflow-hidden"
    >
      <span className="font-bold text-[#243439] text-xl">{label}</span>
      <div className="absolute top-[50%] -translate-y-[50%] right-0 rounded-full p-3 bg-[#243439] h-[50px] w-[50px] flex items-center justify-center border-4">
        <svg
          className="rotate-90 fill-white  ml-1 "
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M24 22h-24l12-20z" />
        </svg>
      </div>
    </button>
  );
};
