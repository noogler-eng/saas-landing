import Price from "../components/Price";

export default function Pricing() {
  const pricingTier: {
    bg: string;
    tierName: String;
    special: String;
    price: Number;
    button: String;
    features: string[];
  }[] = [
    {
      bg: "white",
      tierName: "Free",
      special: "",
      price: 0,
      button: "Get for free",
      features: [
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "2GB storage",
        "Integrations",
        "Basic support",
      ],
    },
    {
      bg: "black",
      tierName: "Pro",
      special: "Most Popular",
      price: 9,
      button: "Sign up now",
      features: [
        "Up to 50 project members",
        "Unlimited tasks and projects",
        "50GB storage",
        "Integrations",
        "Priority support",
        "Advanced support",
        "Export support",
      ],
    },
    {
      bg: "white",
      tierName: "Business",
      special: "",
      price: 19,
      button: "Sign up now",
      features: [
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "200GB storage",
        "Integrations",
        "Dedicated account manager",
        "Custom fields",
        "Advanced analytics",
        "Export capabilities",
        "API access",
        "Advanced security features",
      ],
    },
  ];

  const pricingComp = pricingTier.map((item, index) => {
    return <Price key={index} item={item} />;
  });

  return (
    <div className="px-8 flex flex-col items-center w-full bg-white pt-24 pb-12 gap-8">
      <div className="tracking-tight font-semibold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text w-5/6 text-3xl md:w-8/12 xl:w-4/12 md:text-5xl text-center">
        Pricing
      </div>
      <p className="text-xl font-light w-5/6 md:w-6/12 xl:w-4/12 text-center mb-8">
        Free forever. Upgrade for unlimited tasks, better security, and
        exclusive features.
      </p>
      <div className="flex flex-col xl:flex-row gap-6">{pricingComp}</div>
    </div>
  );
}
