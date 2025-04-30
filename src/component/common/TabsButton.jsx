import { useSelector } from "react-redux";
import * as Tabs from "@radix-ui/react-tabs";

const TabsButton = ({ position, setPosition }) => {
  const darkMode = useSelector((state) => state.auth.darkMode);

  return (
    <Tabs.Root
      value={position}
      onValueChange={setPosition}
      className="w-full mt-6"
    >
      <Tabs.List className="grid grid-cols-2 gap-2 border-t pt-4">
        {["top", "right", "bottom", "left"].map((pos) => {
          const isSelected = position === pos;
          return (
            <Tabs.Trigger
              key={pos}
              value={pos}
              className={`
                px-4 py-2 rounded-lg border font-semibold transition-all duration-300 space-x-4
                ${
                  isSelected
                    ? darkMode
                      ? "bg-primary text-white border-primary"
                      : "bg-primary text-black border-primary"
                    : darkMode
                    ? "bg-black text-white border-gray-600"
                    : "bg-white text-black border-gray-300"
                }
 
              `}
            >
              {pos.charAt(0).toUpperCase() + pos.slice(1)}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>
    </Tabs.Root>
  );
};

export default TabsButton;
