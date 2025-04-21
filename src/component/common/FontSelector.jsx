import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFontFamily,
  setPrimaryColor,
} from "../../Redux/Slice/settingsSlice";

const fonts = [
  { label: "Rajdhani", value: '"Rajdhani", sans-serif' },
  { label: "Roboto", value: '"Roboto", sans-serif' },
  { label: "Poppins", value: '"Poppins", sans-serif' },
];

const colors = [
  "#ff014f",
  "#2563eb", // Blue
  "#dc2626", // Red
  "#16a34a", // Green
  "#d97706", // Amber
  "#9333ea", // Purple
];

const FontColorDrawer = () => {
  const dispatch = useDispatch();
  const currentFont = useSelector((state) => state.settings.fontFamily);
  const currentColor = useSelector((state) => state.settings.primaryColor);
  const darkMode = useSelector((state) => state.auth.darkMode);

  const handleFontChange = (value) => dispatch(setFontFamily(value));
  const handleColorChange = (value) => dispatch(setPrimaryColor(value));

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
          className={`fixed right-0 top-0 h-full w-72 z-50 px-6 py-8 shadow-lg transform translate-x-full data-[state=open]:translate-x-0 transition-transform duration-300 ease-in-out ${
            darkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
          aria-describedby={undefined}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Customize UI</h2>
            <Dialog.Close asChild>
              <button>
                <X className="h-5 w-5" />
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
          <Dialog.DialogTitle className="text-sm">
            Color Change apply only in light Mode
          </Dialog.DialogTitle>
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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default FontColorDrawer;
{/* <div className="mt-6 flex justify-around">
<button onClick={() => setPosition("top")}>Top</button>
<button onClick={() => setPosition("right")}>Right</button>
<button onClick={() => setPosition("bottom")}>Bottom</button>
<button onClick={() => setPosition("left")}>Left</button>
</div> */}