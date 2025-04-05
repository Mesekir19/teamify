import React, { useState, useEffect, useRef } from "react";

export default function Pricing() {
  const [billingInterval, setBillingInterval] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const modalRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedPlan(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const plans = [
    {
      name: "Standard",
      price: {
        monthly: "$1000",
        yearly: "$8400",
      },
      desc: "Essential features for small teams",
      features: [
        "Up to 15 users",
        "10GB Storage",
        "Basic Analytics",
        "Email Support",
        "5 Projects",
      ],
      recommended: false,
    },
    {
      name: "Productivity",
      price: {
        monthly: "$1800",
        yearly: "$16200",
      },
      desc: "Advanced tools for growing businesses",
      features: [
        "Up to 50 users",
        "50GB Storage",
        "Advanced Analytics",
        "Priority Support",
        "Unlimited Projects",
        "API Access",
      ],
      recommended: true,
    },
    {
      name: "Practical",
      price: {
        monthly: "$2500",
        yearly: "$22500",
      },
      desc: "Complete solution for enterprises",
      features: [
        "Unlimited Users",
        "100GB Storage",
        "Custom Analytics",
        "24/7 Support",
        "SSO Integration",
        "Custom SLAs",
      ],
      recommended: false,
    },
  ];

  const OrderSummary = ({ plan }) => (
    <div className="absolute overflow-y-auto inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 w-full max-w-2xl p-8 relative"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Order Summary</h2>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl text-amber-400 mb-4">{plan.name} Plan</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white/80">Plan Price</span>
                <span className="text-white">
                  {plan.price[billingInterval]}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">Billing Cycle</span>
                <span className="text-white capitalize">{billingInterval}</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg text-white mb-4">Plan Features</h4>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-white/80">
                    <svg
                      className="w-4 h-4 mr-2 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-lg text-white mb-4">Payment Method</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="creditCard"
                    name="payment"
                    checked={paymentMethod === "creditCard"}
                    onChange={() => setPaymentMethod("creditCard")}
                  />
                  <label htmlFor="creditCard" className="text-white">
                    Credit Card
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="paypal"
                    name="payment"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                  />
                  <label htmlFor="paypal" className="text-white">
                    PayPal
                  </label>
                </div>

                {paymentMethod === "creditCard" && (
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 bg-white/5 p-6 rounded-xl">
              <h3 className="text-lg text-white mb-4">Order Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/80">Subtotal</span>
                  <span className="text-white">
                    {plan.price[billingInterval]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Discount</span>
                  <span className="text-amber-400">-$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Taxes</span>
                  <span className="text-white">Calculated at checkout</span>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <div className="flex justify-between font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-amber-400">
                      {plan.price[billingInterval]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors text-2xl p-2"
            >
              &times;
            </button>
            <button className="w-full mt-6 bg-amber-400 text-black py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors">
              Complete Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="flex justify-center text-white text-4xl font-bold text-center mb-4">
        Flexible <h2 className="text-amber-400 ml-2">Plans</h2>
      </h2>
      <p className="text-2xl text-white text-center mb-12 ">
        Choose a plan that works best for you & your team
      </p>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-16">
        <div className="bg-white/10 backdrop-blur-lg rounded-full p-1.5 flex gap-2">
          <button
            onClick={() => setBillingInterval("monthly")}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              billingInterval === "monthly"
                ? "bg-amber-400 text-black"
                : "text-white hover:bg-white/5"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingInterval("yearly")}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              billingInterval === "yearly"
                ? "bg-amber-400 text-black"
                : "text-white hover:bg-white/5"
            }`}
          >
            Yearly <span className="text-white">[save 60%]</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="relative p-8 rounded-3xl shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 bg-white/5 backdrop-blur-lg border border-white/10"
          >
            {plan.recommended && (
              <div className="absolute top-0 right-0 bg-amber-400 text-black px-4 py-1 rounded-bl-xl rounded-tr-xl text-sm font-bold">
                Recommended
              </div>
            )}

            <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">
                {plan.price[billingInterval]}
              </span>
              {plan.price[billingInterval] !== "Custom" && (
                <span className="text-lg text-white/80 ml-2">
                  /{billingInterval === "monthly" ? "month" : "year"}
                </span>
              )}
              {billingInterval === "yearly" &&
                plan.price.monthly !== "Custom" && (
                  <div className="text-sm text-white/60 mt-2">
                    Equivalent to {plan.price.monthly}/mo
                  </div>
                )}
            </div>

            <p className="mb-8 text-white/80">{plan.desc}</p>

            <ul className="space-y-4 mb-12">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-white/90">
                  <svg
                    className="w-5 h-5 mr-2 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedPlan(plan)}
              className={`w-full py-3 rounded-3xl font-semibold transition-colors duration-300 ${
                plan.recommended
                  ? "bg-amber-400 text-black hover:bg-amber-500"
                  : "bg-gray-600 text-white hover:bg-white/20"
              }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>

      {selectedPlan && <OrderSummary plan={selectedPlan} />}
    </div>
  );
}
