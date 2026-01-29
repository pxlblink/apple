import { useEffect } from "react";
import { useState } from "react";

export default function Header() {
  function NavLinkAndMenu({ linkName, menuContent }) {
    const [linkHovered, setLinkHovered] = useState(false);
    const [menuHovered, setMenuHovered] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
      setOpenMenu(linkHovered || menuHovered);
    }, [linkHovered, menuHovered]);

    return (
      <div
        className="flex items-center h-full"
        onMouseEnter={() => setLinkHovered(true)}
        onMouseLeave={() => setLinkHovered(false)}
      >
        <a href="" className="text-[12px]">
          {linkName}
        </a>
        {openMenu && (
          <div
            onMouseEnter={() => setMenuHovered(true)}
            onMouseLeave={() => setMenuHovered(false)}
            className="absolute right-0 left-0 top-full bg-white"
          >
            {menuContent}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex sticky top-0 justify-center w-full backdrop-blur-md bg-[rgb(255,255,255)]/80">
      <div className="flex gap-5 justify-center items-center">
        <svg
          height="48"
          viewBox="0 0 17 48"
          width="17"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"></path>
        </svg>
        <NavLinkAndMenu
          linkName={"Store"}
          menuContent={
            <div className="flex gap-10 px-40 pt-10 pb-20">
              <div>
                <p>Shop</p>
                <ul className="font-semibold text-[22px]">
                  <li>Shop the latest</li>
                  <li>Mac</li>
                  <li>iPad</li>
                  <li>iPhone</li>
                  <li>Apple Watch</li>
                  <li>Apple Vision Pro</li>
                  <li>AirPods</li>
                  <li>Accessories</li>
                </ul>
              </div>
              <div>
                <p>quick links</p>
                <ul className="font-semibold">
                  <li>Find a Store</li>
                  <li>Order Status</li>
                  <li>Apple Trade In</li>
                  <li>Financing</li>
                  <li>Personal Setup</li>
                </ul>
              </div>
              <div>
                <p>Shop Special Stores</p>
                <ul className="font-semibold">
                  <li>Certified Refubrished</li>
                  <li>Education</li>
                  <li>Business</li>
                  <li>Veterans and Military</li>
                  <li>Government</li>
                </ul>
              </div>
            </div>
          }
        />
        <NavLinkAndMenu
          linkName={"iPad"}
          menuContent={
            <div>
              <p>iPad menu</p>
            </div>
          }
        />
        <NavLinkAndMenu
          linkName={"iPhone"}
          menuContent={
            <div>
              <p>iPhone menu</p>
            </div>
          }
        />
      </div>
    </div>
  );
}
