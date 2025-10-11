
import { Drawer, Tooltip } from "antd";
import { X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFontFamily,
  setPrimaryColor,
} from "../../Redux/Slice/settingsSlice";
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

  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState("right");

  const handleFontChange = (value) => dispatch(setFontFamily(value));
  const handleColorChange = (value) => dispatch(setPrimaryColor(value));

  return (
    <>
      {/* Trigger Button */}
      <Tooltip title="Customize UI">
        <button
          onClick={() => setOpen(true)}
          className={`fixed top-32 right-5 z-50 px-3 py-2 rounded-lg shadow-lg cursor-pointer  
            ${darkMode ? "text-black" : "text-white"}`}
          style={{
            backgroundColor: "var(--primary-color)",
          }}
        >
          Customize
        </button>
      </Tooltip>

      {/* Ant Design Drawer */}
      <Drawer
        title={null}
        placement={position}
        onClose={() => setOpen(false)}
        open={open}
        width={300}
        closeIcon={false}
        bodyStyle={{
          backgroundColor: darkMode ? "#000" : "#fff",
          color: darkMode ? "#fff" : "#000",
          padding: 24,
        }}
        maskClosable={true}
      >
        <div
          className={"flex justify-between items-center px-4 py-2 rounded-md mb-4 "}
        >
          <h2 className="text-xl font-semibold m-0">Customize UI</h2>
          <button
            onClick={() => setOpen(false)}
            className="hover:opacity-80 transition duration-300"
          >
            <X />
          </button>
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

     
        <p className="text-sm mb-4">Color Change apply only in Light Mode</p>

      
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

        <div className="mt-6">
          <TabsButton position={position} setPosition={setPosition} />
        </div>
      </Drawer>
    </>
  );
};

export default FontColorDrawer;
