import { PiShootingStarFill } from "react-icons/pi";
import { FaThumbsUp } from "react-icons/fa";
import { BiSolidMedal } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

const pricingPlans = [
  {
    id: "free",
    name: "Starter Plan",
    description: "Best for Trying",
    price: "$0/month",
    featured: false,
    features: [
      "2 Free Videos Per Month",
      "Access to Basic Video Templates",
      "Standard Resolution Output",
      "Community Support"
    ],
    buttonText: "Try for free"
  },
  {
    id: "pro",
    name: "Pro Plan",
    description: "For Growing Creators",
    price: "$19/month",
    featured: true,
    features: [
      "200 Video Credits per Month",
      "Premium Video Templates",
      "High-Resolution Output",
      "Priority Email Support"
    ],
    buttonText: "Get now"
  },
  {
    id: "business",
    name: "Business Plan",
    description: "Best for Businesses",
    price: "$49/month",
    featured: false,
    features: [
      "500 Video Credits per Month",
      "Customizable Templates",
      "Full HD Resolution Output",
      "Dedicated Support Manager"
    ],
    buttonText: "Get now"
  }
];

function Page() {
  return (
    <div className="flex justify-center gap-8">
      {pricingPlans.map((tier) => (
        <div
          key={tier.id}
          className="bg-background/30 pricing-card-border w-[30rem] space-y-6 rounded-2xl backdrop-blur-3xl"
        >
          <div className="flex justify-between p-8">
            {/* Name */}
            <div className="flex items-center gap-4">
              {tier.id === "free" && <FaThumbsUp className="size-5" />}
              {tier.id === "pro" && <PiShootingStarFill className="size-7" />}
              {tier.id === "business" && <BiSolidMedal className="size-8" />}
              <p className="font-mono text-2xl font-semibold">{tier.name}</p>
            </div>
            {tier.featured && (
              <div className={"gradient-bg text-md absolute right-7 top-7 rounded-full px-4 py-2 text-white"}>
                Most popular
              </div>
            )}
          </div>
          {/* Price */}
          <p className="px-8 font-mono text-6xl">{tier.price}</p>
          <div className="px-8 text-xl">{tier.description}</div>
          <div className="flex w-full cursor-pointer justify-center px-8">
            <button className="bg-background/50 w-full rounded-full py-4 text-xl font-semibold">Get started</button>
          </div>
          {/* Features */}
          <ul className={"mb-8 flex flex-col gap-4 px-8"}>
            {tier.features.map((feature: string) => (
              <li key={feature} className="flex gap-x-3">
                <FaArrowRight className={"text-muted-foreground h-6 w-6"} />
                <span className={"text-base"}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Page;
