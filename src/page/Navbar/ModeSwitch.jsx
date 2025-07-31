import { Segmented, Tooltip } from "antd";
import { Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../Redux/Slice/authSlice";

const ModeSwitch = () => {
  const darkMode = useSelector((state) => state.auth.darkMode);
  const dispatch = useDispatch();
  const options = [
    {
      label: (
        <div
          className={`flex items-center ${
            darkMode ? "text-white hover:text-white" : "text-black"
          }  justify-center h-6 `}
        >
          <Sun size={16} />
        </div>
      ),
      value: "light",
    },
    {
      label: (
        <div className="flex items-center justify-center h-6 ">
          <Moon size={16} />
        </div>
      ),
      value: "dark",
    },
  ];
  return (
    <>
      <Tooltip
        title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        placement="top"
      >
        <Segmented
          size="middle"
          shape="round"
          value={darkMode ? "dark" : "light"}
          onChange={() => dispatch(toggleTheme())}
          options={options}
          className="transition-all rounded-full font-semibold"
          style={{
            backgroundColor: darkMode ? "#111" : "#eee",
            color: darkMode ? "#fff" : "#000",
            border: "1px solid",
            borderColor: darkMode ? "#333" : "#ccc",
            height: 36,
            display: "flex",
            alignItems: "center",
          }}
          block={true}
        />
      </Tooltip>
    </>
  );
};

export default ModeSwitch;
