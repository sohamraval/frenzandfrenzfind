import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Nav from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import {
  useProvider,
  useAccount,
  useNetwork,
  useSigner,
  useSignMessage,
} from "wagmi";
import {
  useChainModal,
  useConnectModal,
  useAccountModal,
} from "@rainbow-me/rainbowkit";
import Clouds from "@/components/Clouds";

const requiredChainID = 1;

export default function Airdrop() {
  const [code, setCode] = useState("");
  const codes = ["1234567", "1a1a1a1"];
  const [codeValid, setCodeValid] = useState(false);
  const [codeChecked, setCodeChecked] = useState(false);
  const [clickedTwitter, setClickedTwitter] = useState(false);
  const [clickedTelegram, setClickedTelegram] = useState(false);
  const [completed1, setCompleted1] = useState(false);
  const [completed2, setCompleted2] = useState(false);
  const [completed3, setCompleted3] = useState(false);
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const provider = useProvider();
  const signer = useSigner();
  const { chain } = useNetwork();
  const { openChainModal } = useChainModal();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();

  const checkCode = () => {
    if (codes.includes(code)) {
      setCodeValid(true);
    } else {
      setCodeValid(false);
    }
    setCodeChecked(true);
  };
  const handleTwitterButtonClick = () => {
    setClickedTwitter(true);
    window.open("https://twitter.com", "_blank");
  };
  const handleTelegramButtonClick = () => {
    setClickedTelegram(true);
    window.open("https://telegram.com", "_blank");
  };
  useEffect(() => {
    if (isConnected && address) {
      setCompleted2(true);
    }
  }, [address, isConnected]);

  return (
    <div>
      <div className="app-parent">
        <div className="min-h-screen pt-10 flex flex-col">
          <Clouds />
          <Nav />
          <MobileNav />
          <div className="pt-20 flex z-[1]">
            <div className="w-full flex flex-col items-center">
              <div className="w-full lg:w-1/2 flex flex-col items-center justify-start px-4 lg:px-0 pt-0 lg:pt-16 mb-6 lg:mb-16 text-xs lg:text-sm text-grey-light">
                <h2 className="font-krona text-[20px] md:text-[32px] leading-[110%] tracking-[0.64px] text-white uppercase text-center">
                  Get Rich With Frenz
                </h2>
                {!codeValid && (
                  <div className="flex flex-col w-full justify-center items-center pt-4 pb-8 px-12 mt-8">
                    <p className="mt-4 mb-6  text-[16px] font-krona text-white">
                      ENTER INVITE CODE
                    </p>
                    <div className="mb-8 text-grey-medium justify-center">
                      <input
                        name="code-input"
                        className="code-input border-input !text-black text-center w-full !text-2xl"
                        type="text"
                        maxlength="7"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                      />
                    </div>
                    <a className="button" onClick={checkCode}>
                      VERIFY CODE
                    </a>
                  </div>
                )}
                <div className="mt-8 flex flex-col lg:flex-row w-full justify-center items-center">
                  {codeChecked ? (
                    codeValid ? (
                      <div className="w-full px-10 md:w-auto">
                        <div className="text-white font-body md:font-bodymed text-[16px] md:text-[24px] tracking-[0.48px] capitalize py-[14px] px-[26px] bg-blue rounded-[6px] w-[fit-content] mx-auto">
                          Claim Your $Frenz airdrop
                        </div>
                        <p className="pl-[17px] mt-[56px] text-[24px] font-body tracking-[0.48px] text-white">
                          Verify your eligibility
                        </p>
                        <div className="flex flex-col gap-8 mt-8">
                          <div className="flex flex-col pl-[17px]">
                            <div className="flex items-center gap-4 w-full ">
                              {completed1 ? (
                                <div className="w-10 h-10 shrink-0 border-blue border-[3px] flex justify-center items-center rounded-full">
                                  <div className="bg-blue rounded-full w-5 h-5"></div>
                                </div>
                              ) : (
                                <div className="w-10 h-10 shrink-0 border-blue border-[2px] flex justify-center items-center rounded-full"></div>
                              )}
                              <button
                                disabled={completed1}
                                onClick={handleTwitterButtonClick}
                                className="button flex justify-center w-full lg:w-80 !font-body disabled:opacity-[30%]"
                              >
                                Follow Twitter
                              </button>
                            </div>
                          </div>
                          {clickedTwitter && !completed1 && (
                            <div className="px-4 flex w-full justify-center">
                              <button
                                onClick={() => {
                                  setTimeout(() => setCompleted1(true), 1000);
                                }}
                                className="button !px-5 md:!px-10 !font-body !text-[14px] md:!text-[16px] !bg-blue !border-white/10 !text-white ml-14 lg:w-80"
                              >
                                CLICK TO VERIFY FOLLOW
                              </button>
                            </div>
                          )}
                          <div className="flex flex-col">
                            <div
                              className={`flex items-center gap-4 pl-[17px] w-full ${
                                completed1 ? "opacity-100" : "opacity-50"
                              }`}
                            >
                              {isConnected &&
                              parseInt(chain.id) ===
                                parseInt(requiredChainID) ? (
                                <div className="w-10 h-10 shrink-0 border-blue border-[3px] flex justify-center items-center rounded-full">
                                  <div className="bg-blue rounded-full w-5 h-5"></div>
                                </div>
                              ) : (
                                <div className="w-10 h-10 shrink-0 border-blue border-[2px] flex justify-center items-center rounded-full"></div>
                              )}
                              {!isConnected && (
                                <button
                                  onClick={openConnectModal}
                                  disabled={completed2}
                                  className={`button flex justify-center w-full lg:w-80 !font-body ${
                                    completed1 ? "" : "pointer-events-none"
                                  } disabled:opacity-30`}
                                >
                                  Connect Wallet
                                </button>
                              )}
                              {isConnected &&
                                parseInt(chain.id) !==
                                  parseInt(requiredChainID) && (
                                  <button
                                    disabled={completed2}
                                    onClick={openChainModal}
                                    className={`button flex justify-center w-full lg:w-80 !font-body ${
                                      completed1 ? "" : "pointer-events-none"
                                    } disabled:opacity-30`}
                                  >
                                    Switch Network
                                  </button>
                                )}
                              {isConnected &&
                                parseInt(chain.id) ===
                                  parseInt(requiredChainID) && (
                                  <button
                                    disabled={completed2}
                                    onClick={openAccountModal}
                                    className={`button flex justify-center w-full lg:w-80 !font-body ${
                                      completed1 ? "" : "pointer-events-none"
                                    } disabled:opacity-30`}
                                  >
                                    Wallet Connected
                                  </button>
                                )}
                            </div>
                          </div>
                          <div
                            className={`flex items-center gap-4 pl-[17px] w-full ${
                              completed2 && completed1
                                ? "opacity-100"
                                : "opacity-50"
                            }`}
                          >
                            {completed3 ? (
                              <div className="w-10 h-10 shrink-0 border-blue border-[3px] flex justify-center items-center rounded-full">
                                <div className="bg-blue rounded-full w-5 h-5"></div>
                              </div>
                            ) : (
                              <div className="w-10 h-10 shrink-0 border-blue border-[2px] flex justify-center items-center rounded-full"></div>
                            )}
                            <button
                              disabled={completed3}
                              onClick={handleTelegramButtonClick}
                              className={`button flex justify-center w-full lg:w-80 !font-body disabled:opacity-30 ${
                                completed2 && completed1
                                  ? ""
                                  : "pointer-events-none"
                              }`}
                            >
                              Join Telegram
                            </button>
                          </div>
                          {clickedTelegram && !completed3 && (
                            <div className="px-4 flex w-full justify-center">
                              <button
                                onClick={() => {
                                  setTimeout(() => setCompleted3(true), 1000);
                                }}
                                className="button !px-5 md:!px-10 !font-body !text-[14px] md:!text-[16px] !bg-blue !border-white/10 !text-white ml-14 lg:w-80"
                              >
                                CLICK TO VERIFY JOIN
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <p className="text-center text-black text-[20px] font-bodymed font-[500]">
                          Invalid Code
                        </p>
                      </div>
                    )
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
