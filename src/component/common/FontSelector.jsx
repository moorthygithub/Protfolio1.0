import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  setFontFamily,
  setPrimaryColor,
} from "../../Redux/Slice/settingsSlice";
import * as Tabs from "@radix-ui/react-tabs";
import TabsButton from "./TabsButton";

const fonts = [
  { label: "Rajdhani", value: '"Rajdhani", sans-serif' },
  { label: "Roboto", value: '"Roboto", sans-serif' },
  { label: "Poppins", value: '"Poppins", sans-serif' },
];

const colors = [
  "#ff014f",
  "#2563eb",
  "#dc2626",
  "#16a34a",
  "#d97706",
  "#9333ea",
];

const FontColorDrawer = () => {
  const dispatch = useDispatch();
  const currentFont = useSelector((state) => state.settings.fontFamily);
  const currentColor = useSelector((state) => state.settings.primaryColor);
  const darkMode = useSelector((state) => state.auth.darkMode);

  const [position, setPosition] = useState("right");

  const handleFontChange = (value) => dispatch(setFontFamily(value));
  const handleColorChange = (value) => dispatch(setPrimaryColor(value));

  const getPositionStyles = () => {
    switch (position) {
      case "left":
        return "left-0 top-0 h-full w-72 overflow-y-auto translate-x-[-100%] data-[state=open]:translate-x-0";
      case "top":
        return "top-0 left-0 w-full h-72 overflow-y-auto -translate-y-full data-[state=open]:translate-y-0";
      case "bottom":
        return "bottom-0 left-0 w-full h-72 overflow-y-auto translate-y-full data-[state=open]:translate-y-0";
      case "right":
      default:
        return "right-0 top-0 h-full w-72 overflow-y-auto translate-x-full data-[state=open]:translate-x-0";
    }
  };

  return (
    <Dialog.Root modal={false}>
      <Dialog.Trigger asChild>
        <button
          className={`fixed top-32 right-5 z-50 px-3 py-2 rounded-lg shadow-lg cursor-pointer  
          ${darkMode ? "bg-[#ff014f] text-black" : "bg-black text-white"} `}
          style={{
            backgroundColor: "var(--primary-color)",
          }}
        >
          Customize
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300" />
        <Dialog.Content
          className={`fixed z-50 px-6 py-8 shadow-lg transition-transform duration-300 ease-in-out  overflow-x-auto
            ${darkMode ? "bg-black text-white" : "bg-white text-black"} 
            ${getPositionStyles()}`}
          aria-describedby={undefined}
        >
          <div className="flex justify-between items-center mb-6">
            <Dialog.Title asChild>
              <h2 className="text-xl font-semibold">Customize UI</h2>
            </Dialog.Title>
            <Dialog.Close asChild>
              <button>
                <X className={darkMode ? "text-white" : "text-black"} />
              </button>
            </Dialog.Close>
          </div>
          <div className="mb-8">
            <p className="font-semibold mb-2">Font Family</p>
            <div className="space-y-2">
              {fonts.map((font) => (
                <button
                  key={font.label}
                  onClick={() => handleFontChange(font.value)}
                  style={{ fontFamily: font.value }}
                  className={`block w-full px-3 py-2 text-left rounded border 
                    ${
                      currentFont === font.value
                        ? `border-primary bg-primary/10 font-bold text-${
                            darkMode ? "white" : "black"
                          }`
                        : "border-gray-300"
                    } 
                    transition-all duration-300 hover:bg-primary/10`}
                >
                  {font.label}
                </button>
              ))}
            </div>
          </div>

          <Dialog.Description className="text-sm mb-4">
            Color Change apply only in Light Mode
          </Dialog.Description>

          <div>
            <p className="font-semibold mb-2">Primary Color</p>
            <div className="flex gap-3 flex-wrap">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorChange(color)}
                  className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${
                    currentColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{
                    backgroundColor: color,
                    borderColor: currentColor === color ? "#000" : "#ccc",
                  }}
                />
              ))}
            </div>
          </div>
          <TabsButton position={position} setPosition={setPosition} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default FontColorDrawer;
