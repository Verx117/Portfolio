import { Moon } from "@icons/.";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between xl:max-w-[1040px]">
      <div className="flex items-center space-x-4 p-1">
        <div
          className=" size-8 rounded-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0) 20%, rgba(31,210,235,1) 40%, rgba(0,0,0,0) 70%)",
          }}
        />
        <h2 className="text-xl font-black">JV</h2>
      </div>
      <div className="flex items-center space-x-2 p-1">
        <div className="size-1 rounded-full bg-green " />
        <p className="text-xs font-semibold text-green md:text-base">
          Open for Work!
        </p>
        <button className="size-10 rounded bg-black text-gray">EN</button>
        <button className="relative flex size-10 items-center justify-center rounded bg-black">
          <Moon className="h-4 w-3.5 fill-gray" />
        </button>
      </div>
    </header>
  );
};

export default Header;
