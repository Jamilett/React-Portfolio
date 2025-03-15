import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Link } from "react-router-dom";
import "../styles/colors.css";
import "../styles/navbarStyles.css";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About me", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
  { name: "Resume", href: "/resume" },
];

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <Disclosure as="nav" className="black2-bg sticky top-6 left-0 right-0 z-50 w-full rounded-xl">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          
          <div className="hidden sm:flex sm:items-center sm:justify-end">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    "white-txt hover:bg-black",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium white-txt hover:bg-black"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}