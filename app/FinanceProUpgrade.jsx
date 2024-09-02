import React from "react";

const FinanceProUpgrade = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden"
      style={{
        fontFamily:
          'Newsreader, "Noto Sans", sans-serif',
      }}
    >
      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#e7edf3] px-10 py-3">
        <div className="flex items-center gap-4 text-[#0e141b]">
          <div className="w-10 h-10">
            {/* Logo SVG */}
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-[#1980e6]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
            Finance Pro
          </h2>
        </div>
        <div className="flex items-center gap-8">
          <div
            className="w-10 h-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/stability/469b3c17-4172-4baf-ae6d-422169de3d05.png")',
            }}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-10 md:px-20 lg:px-40">
        <div className="w-full max-w-3xl">
          {/* Title and Description */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold leading-tight tracking-[-0.015em] text-[#0e141b] mb-3">
              Upgrade to Finance Pro
            </h1>
            <p className="text-base font-normal leading-normal text-[#0e141b]">
              Unlock all premium features for
              $9.99/month. Cancel anytime.
            </p>
          </div>

          {/* Pricing Plans */}
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 mb-10">
            {/* Monthly Plan */}
            <div className="flex flex-col justify-between rounded-xl border border-[#d0dbe7] bg-white p-6 shadow-sm">
              <div>
                <h3 className="text-base font-bold leading-tight text-[#0e141b] mb-2">
                  Monthly
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-extrabold text-[#0e141b]">
                    $9.99
                  </span>
                  <span className="text-base font-medium text-[#0e141b]">
                    / month
                  </span>
                </div>
                <ul className="space-y-2">
                  {[
                    "Ad-free experience",
                    "Unlimited watchlists",
                    "Price alerts",
                    "Advanced charting tools",
                    "Screener with 50+ filters",
                    "Data export to CSV",
                    "Real-time news and events",
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-[#0e141b]"
                    >
                      <svg
                        className="w-5 h-5 text-[#1980e6] mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 2.5l-8.5 11L0 7.5l1.5-1.5 5 5 7-9z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 w-full py-2.5 bg-[#1980e6] text-white font-semibold rounded-lg hover:bg-[#106bbd] transition duration-300">
                Choose Monthly
              </button>
            </div>

            {/* Annual Plan */}
            <div className="flex flex-col justify-between rounded-xl border border-[#d0dbe7] bg-white p-6 shadow-sm relative">
              <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-white bg-[#1980e6] rounded-full">
                Save 17%
              </span>
              <div>
                <h3 className="text-base font-bold leading-tight text-[#0e141b] mb-2">
                  Annual
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-extrabold text-[#0e141b]">
                    $99.99
                  </span>
                  <span className="text-base font-medium text-[#0e141b]">
                    / year
                  </span>
                </div>
                <ul className="space-y-2">
                  {[
                    "Ad-free experience",
                    "Unlimited watchlists",
                    "Price alerts",
                    "Advanced charting tools",
                    "Screener with 50+ filters",
                    "Data export to CSV",
                    "Real-time news and events",
                    "Priority customer support",
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-[#0e141b]"
                    >
                      <svg
                        className="w-5 h-5 text-[#1980e6] mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 2.5l-8.5 11L0 7.5l1.5-1.5 5 5 7-9z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 w-full py-2.5 bg-[#1980e6] text-white font-semibold rounded-lg hover:bg-[#106bbd] transition duration-300">
                Choose Annual
              </button>
            </div>
          </div>

          {/* Payment Form */}
          <form className="space-y-6 max-w-md mx-auto">
            {/* Credit Card Number */}
            <div>
              <label
                htmlFor="card-number"
                className="block text-base font-medium text-[#0e141b] mb-2"
              >
                Credit Card Number
              </label>
              <input
                type="text"
                id="card-number"
                placeholder="1234 5678 9012 3456"
                className="w-full h-14 px-4 rounded-xl bg-[#e7edf3] text-[#0e141b] placeholder-[#4e7397] focus:outline-none focus:ring-2 focus:ring-[#1980e6] transition duration-300"
              />
            </div>

            {/* Expiry Date and CVC */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  htmlFor="expiry-date"
                  className="block text-base font-medium text-[#0e141b] mb-2"
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry-date"
                  placeholder="MM / YY"
                  className="w-full h-14 px-4 rounded-xl bg-[#e7edf3] text-[#0e141b] placeholder-[#4e7397] focus:outline-none focus:ring-2 focus:ring-[#1980e6] transition duration-300"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="cvc"
                  className="block text-base font-medium text-[#0e141b] mb-2"
                >
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  placeholder="123"
                  className="w-full h-14 px-4 rounded-xl bg-[#e7edf3] text-[#0e141b] placeholder-[#4e7397] focus:outline-none focus:ring-2 focus:ring-[#1980e6] transition duration-300"
                />
              </div>
            </div>

            {/* Start Free Trial Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#1980e6] text-white font-semibold rounded-xl hover:bg-[#106bbd] transition duration-300"
            >
              Start Your Free Trial
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default FinanceProUpgrade;
