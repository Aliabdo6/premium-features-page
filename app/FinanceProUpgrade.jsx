import React from "react";

export default function FinanceProUpgrade() {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden"
      style={{
        fontFamily:
          'Newsreader, "Noto Sans", sans-serif',
      }}
    >
      <div className="flex h-full grow flex-col">
        <header className="flex items-center justify-between border-b border-solid border-[#e7edf3] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0e141b]">
            <div className="w-10 h-10">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
              Finance Pro
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/stability/469b3c17-4172-4baf-ae6d-422169de3d05.png")',
              }}
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col w-[512px] max-w-[960px] py-5">
            <h1 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-3 pt-5">
              Upgrade to Finance Pro
            </h1>
            <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
              Unlock all premium features for
              $9.99/month. Cancel anytime.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-2.5 px-4 py-3">
              <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#d0dbe7] bg-slate-50 p-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-base font-bold leading-tight">
                    Monthly
                  </h1>
                  <p className="flex items-baseline gap-1 text-[#0e141b]">
                    <span className="text-4xl font-black leading-tight tracking-[-0.033em]">
                      $9.99
                    </span>
                    <span className="text-base font-bold leading-tight">
                      / month
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-[13px] font-normal leading-normal flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                    Ad-free experience
                  </div>
                  <div className="text-[13px] font-normal leading-normal flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                    Unlimited watchlists
                  </div>
                  <div className="text-[13px] font-normal leading-normal flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                    Price alerts
                  </div>
                  <div className="text-[13px] font-normal leading-normal flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                    Advanced charting tools
                  </div>
                  <div className="text-[13px] font-normal leading-normal flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                    Screener with 50+ filters
                  </div>
                  <div className="text-[13px] font-normal leading-normal flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                    Real-time market data
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#d0dbe7] bg-slate-50 p-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-base font-bold leading-tight">
                    Annual
                  </h1>
                  <p className="flex items-baseline gap-1 text-[#0e141b]">
                    <span className="text-4xl font-black leading-tight tracking-[-0.033em]">
                      $99.99
                    </span>
                    <span className="text-base font-bold leading-tight">
                      / year
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-[13px] font-normal leading-normal flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                    Ad-free experience
                  </div>
                  <div className="text-[13px] font-normal leading-normal flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                    Unlimited watchlists
                  </div>
                  <div className="text-[13px] font-normal leading-normal flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                    Price alerts
                  </div>
                  <div className="text-[13px] font-normal leading-normal flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                    Advanced charting tools
                  </div>
                  <div className="text-[13px] font-normal leading-normal flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                    Screener with 50+ filters
                  </div>
                  <div className="text-[13px] font-normal leading-normal flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                    Real-time market data
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 px-4 py-4">
              <button className="flex items-center justify-center rounded-full border border-solid border-[#e7edf3] bg-[#0e141b] px-6 py-3 text-sm font-bold leading-5 text-white">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
