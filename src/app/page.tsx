"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  CommandInput,
  CommandEmpty,
  CommandItem,
  CommandGroup,
  CommandList,
  Command,
} from "@/components/ui/command";

const menus = [
  {
    menu: "Electronics",
    submenus: [
      { menu: "Laptops", submenus: ["Work", "Gaming", "Custom"] },
      { menu: "TVs", submenus: ["Slim", "Curved", "Touch Screen"] },
      { menu: "Cameras", submenus: ["DSLR", "Pocket", "Retro"] },
    ],
  },
  {
    menu: "Home",
    submenus: [
      { menu: "Furniture", submenus: ["Sofa", "Table", "Chair"] },
      { menu: "Decor", submenus: ["Paintings", "Lamps", "Mirrors"] },
      { menu: "Kitchen", submenus: ["Cookware", "Appliances", "Utensils"] },
    ],
  },
  {
    menu: "Appliances",
    submenus: [
      {
        menu: "Refrigerators",
        submenus: ["Single door", "Multiple door", "Custom"],
      },
      {
        menu: "Washing Machines",
        submenus: ["Front-load", "Top-load", "Custom"],
      },
      {
        menu: "ACs",
        submenus: ["Cooler A", "Cooler B", "Cooler C"],
      },
    ],
  },
  {
    menu: "Grocery",
    submenus: [
      { menu: "Fruits & Vegetables", submenus: ["Apple", "Banana", "Carrot"] },
      { menu: "Dairy & Bakery", submenus: ["Milk", "Bread", "Cheese"] },
      { menu: "Staples", submenus: ["Rice", "Pasta", "Beans"] },
    ],
  },
  {
    menu: "Beauty and Toys",
    submenus: [
      { menu: "Makeup", submenus: ["Lipstick", "Foundation", "Eyeshadow"] },
      { menu: "Skincare", submenus: ["Moisturizer", "Cleanser", "Sunscreen"] },
      { menu: "Toys", submenus: ["Action Figures", "Dolls", "Board Games"] },
    ],
  },
];

const items = [
  "Electronics",
  "Laptops",
  "Work",
  "Gaming",
  "Custom",
  "TVs",
  "Slim",
  "Curved",
  "Touch Screen",
  "Cameras",
  "DSLR",
  "Pocket",
  "Retro",
  "Home",
  "Furniture",
  "Sofa",
  "Table",
  "Chair",
  "Decor",
  "Paintings",
  "Lamps",
  "Mirrors",
  "Kitchen",
  "Cookware",
  "Appliances",
  "Utensils",
  "Appliances",
  "Refrigerators",
  "Single door",
  "Multiple door",
  "Custom",
  "Washing Machines",
  "Front-load",
  "Top-load",
  "Custom",
  "ACs",
  "Cooler A",
  "Cooler B",
  "Cooler C",
  "Grocery",
  "Fruits & Vegetables",
  "Apple",
  "Banana",
  "Carrot",
  "Dairy & Bakery",
  "Milk",
  "Bread",
  "Cheese",
  "Staples",
  "Rice",
  "Pasta",
  "Beans",
  "Beauty and Toys",
  "Makeup",
  "Lipstick",
  "Foundation",
  "Eyeshadow",
  "Skincare",
  "Moisturizer",
  "Cleanser",
  "Sunscreen",
  "Toys",
  "Action Figures",
  "Dolls",
  "Board Games",
];

export default function Component() {
  const [searchTerm, setSerchTerm] = useState("");
  return (
    <div className="bg-white">
      <header className="bg-[#2874f0] p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              alt="Logo"
              className="h-10"
              height="40"
              src="https://cdn.pixabay.com/photo/2017/03/29/04/09/shopping-icon-2184065_1280.png"
              style={{
                aspectRatio: "100/40",
                objectFit: "contain",
              }}
              width="100"
            />
            <Command>
              <CommandInput
                autoFocus
                className="h-9"
                placeholder="Search..."
                value={searchTerm}
                onValueChange={(searchString) => {
                  setSerchTerm(searchString);
                }}
              />
              <CommandList className="z-10">
                <CommandEmpty>No match found.</CommandEmpty>
                {searchTerm !== "" ? (
                  <CommandGroup className="">
                    {items.map((item, index) => (
                      <CommandItem key={index}>{item}</CommandItem>
                    ))}
                  </CommandGroup>
                ) : null}
              </CommandList>
            </Command>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="text-white bg-[#2874f0] hover:bg-[#0a5dc2]">
              Login
            </Button>
            <ShoppingCartIcon className="text-white" />
          </div>
        </div>
        <nav className="flex justify-between mt-4">
          <Menubar className="w-full flex justify-around bg-transparent text-white border-none">
            {menus.map((category, key1) => (
              <MenubarMenu key={key1}>
                <MenubarTrigger className="bg-transparent">
                  {category.menu}
                </MenubarTrigger>
                <MenubarContent>
                  {category.submenus.map((submenu, key2) => (
                    <MenubarSub key={key2}>
                      <MenubarSubTrigger>{submenu.menu}</MenubarSubTrigger>
                      <MenubarSubContent>
                        {submenu.submenus && submenu.submenus.length > 0 && (
                          <>
                            {submenu.submenus.map((nestedSubmenu, key3) => (
                              <>
                                <MenubarItem>{nestedSubmenu}</MenubarItem>
                                <MenubarSeparator />
                              </>
                            ))}
                          </>
                        )}
                      </MenubarSubContent>
                    </MenubarSub>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            ))}
          </Menubar>
        </nav>
      </header>
      <main>
        <section className="my-4">
          <img
            alt="Big Year End Sale"
            className="w-full"
            height="200"
            src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{
              aspectRatio: "800/200",
              objectFit: "cover",
            }}
            width="800"
          />
        </section>
        <section className="my-4 px-4">
          <h2 className="text-xl font-semibold mb-2">Best Selling Products</h2>
          <div className="grid grid-cols-5 gap-4">
            <img
              alt="Laptop"
              className="w-full"
              height="150"
              src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
            <img
              alt="tshirt"
              className="w-full"
              height="150"
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
            <img
              alt="Camera"
              className="w-full"
              height="150"
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
            <img
              alt="Headphones"
              className="w-full"
              height="150"
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
            <img
              alt="Toys"
              className="w-full"
              height="150"
              src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function ArrowDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
