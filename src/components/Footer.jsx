import Accordion from "./Accordion";

export default function Footer() {
  const footerLinks = [
    {
      title: "Shop and Learn",
      links: [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "Vision",
        "AirPods",
        "TV & Home",
        "AirTag",
        "Accessores",
        "Gift Cards",
      ],
    },
    {
      title: "Apple Wallet",
      links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
    },
    {
      title: "Account",
      links: [
        "Manage Your Account Account",
        "Apple Storage Account",
        "iCloud.com",
      ],
    },
    {
      title: "Entertainment",
      links: [
        "Apple One",
        "Apple TV",
        "Apple Music",
        "Apple Arcade",
        "Apple Fitness+",
        "Apple News+",
        "Apple Podcasts",
        "Apple Books",
        "App Store",
      ],
    },
    {
      title: "Apple Store",
      links: [
        "Find a Store",
        "Genius Bar",
        "Today at Apple",
        "Group Reservations",
        "Apple Camp",
        "Apple Store App",
        "Certified Refurbished",
        "Apple Trade In",
        "Financing",
        "Carrier Deals at Apple",
        "Other Status",
        "Shopping Help",
      ],
    },
    {
      title: "For Business",
      links: ["Apple and Business", "Shop for Business"],
    },
    {
      title: "For Education",
      links: ["Apple and Education", "Shop for K-12", "Shop for College"],
    },
    {
      title: "For Healthcare",
      links: ["Apple and Healthcare"],
    },
    {
      title: "For Government",
      links: [
        "Apple and Government",
        "Shop for Veterans and Military",
        "Shop for State and Local Employees",
        "Shop for Federal Employees",
      ],
    },
    {
      title: "Apple Values",
      links: [
        "Accessibility",
        "Education",
        "Environment",
        "Inclusive and Diversity",
        "Privacy",
        "Racial Equity and Justice",
        "Supply Chain Innovation",
      ],
    },
    {
      title: "About apple",
      links: [
        "Newsroom",
        "Apple Leadership",
        "Career Opportunities",
        "Investors",
        "Ethics & Compliance",
        "Events",
        "Contact Apple",
      ],
    },
  ];

  return (
    <div className="grid gap-2 py-4 px-4 md:px-6 text-[12px] text-[rgba(0,0,0,0.56)] bg-[#f5f5f7] lg:px-35">
      <p>
        1. Trade‑in values will vary based on the condition, year, and
        configuration of your eligible trade‑in device. Not all devices are
        eligible for credit. You must be at least the age of majority to be
        eligible to trade in for credit or for an Apple Gift Card. Trade‑in
        value may be applied toward qualifying new device purchase, or added to
        an Apple Gift Card. Actual value awarded is based on receipt of a
        qualifying device matching the description provided when estimate was
        made. Sales tax may be assessed on full value of a new device purchase.
        In‑store trade‑in requires presentation of a valid photo ID (local law
        may require saving this information). Offer may not be available in all
        stores and may vary between in‑store and online trade‑in. Some stores
        may have additional requirements. Apple or its trade‑in partners reserve
        the right to refuse, cancel, or limit quantity of any trade‑in
        transaction for any reason. More details are available from Apple’s
        trade-in partner for trade‑in and recycling of eligible devices.
        Restrictions and limitations may apply.
      </p>
      <p>
        To access and use all Apple Card features and products available only to
        Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad
        that supports and has the latest version of iOS or iPadOS. Apple Card is
        subject to credit approval, available only for qualifying applicants in
        the United States, and issued by Goldman Sachs Bank USA, Salt Lake City
        Branch.
      </p>
      <p>
        Apple Payments Services LLC, a subsidiary of Apple Inc., is a service
        provider of Goldman Sachs Bank USA for Apple Card and Savings accounts.
        Neither Apple Inc. nor Apple Payments Services LLC is a bank.
      </p>
      <p>
        If you reside in the U.S. territories, please call Goldman Sachs at
        877-255-5923 with questions about Apple Card.
      </p>
      <p>
        Learn more about how Apple Card applications are evaluated at{" "}
        <a className="underline text-[#000000B8]" href="">
          support.apple.com/kb/HT209218
        </a>
        .
      </p>
      <p>
        A subscription is required for Apple Arcade, Apple Fitness+, Apple
        Music, and Apple TV.
      </p>
      <p>
        Features are subject to change. Some features, applications, and
        services may not be available in all regions or all languages.
      </p>
      <div className="text-[rgba(0,0,0,0.88)]">
        {footerLinks.map((item) => (
          <Accordion
            title={item.title}
            content={
              <div>
                {item.links.map((link) => (
                  <a className="block my-2 hover:underline" href="">
                    {link}
                  </a>
                ))}
              </div>
            }
          />
        ))}
      </div>
      <p className="pb-4 mt-3 md:border-b text-balance border-[rgba(255,255,255,0.24)]">
        More ways to shop:{" "}
        <a className="text-blue-400 underline" href="">
          Find an Apple Store
        </a>{" "}
        or{" "}
        <a className="text-blue-400 underline" href="">
          other retailer
        </a>{" "}
        near you. Or call{" "}
        <a className="text-blue-400 underline" href="">
          1-800-MY-APPLE
        </a>{" "}
        (1-800-692-7753).
      </p>
      <div className="flex flex-col gap-2 lg:flex-row-reverse lg:justify-between lg:items-center">
        <a className="my-2 hover:underline text-[.78rem]" href="">
          United States
        </a>
        <a>Copyright © 2026 Apple Inc. All rights reserved.</a>
      </div>
      <div className="flex gap-4">
        <a href="">Privacy Policy</a>
        <a href="">Term of Use</a>
        <a href="">Sales and Refunds</a>
        <a href="">Legal</a>
        <a href="">Site map</a>
      </div>
    </div>
  );
}
