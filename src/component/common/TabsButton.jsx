import { useSelector } from "react-redux";
import { Radio } from "antd";

const TabsButton = ({ position, setPosition }) => {
  const darkMode = useSelector((state) => state.auth.darkMode);

  const getStyles = (value) => {
    const selected = position === value;
    return {
      backgroundColor: selected
        ? "var(--primary-color)"
        : darkMode
        ? "#000"
        : "#fff",
      color: selected
        ? darkMode
          ? "#fff"
          : "#000"
        : darkMode
        ? "#fff"
        : "#000",
      borderColor: selected
        ? "var(--primary-color)"
        : darkMode
        ? "#525252"
        : "#d1d5db",
    };
  };

  return (
    <div className="w-full mt-6 space-y-2">
      {/* First Row: Top & Right */}
      <Radio.Group
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="flex"
      >
        {["top", "right"].map((value) => (
          <Radio.Button
            key={value}
            value={value}
            className="!w-full  !px-4  !font-semibold text-center transition-all duration-300"
            style={getStyles(value)}
          >
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Radio.Button>
        ))}
      </Radio.Group>

      {/* Second Row: Bottom & Left */}
      <Radio.Group
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="flex"
      >
        {["bottom", "left"].map((value) => (
          <Radio.Button
            key={value}
            value={value}
            className="!w-full  !px-4 !font-semibold text-center transition-all duration-300"
            style={getStyles(value)}
          >
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
};

export default TabsButton;
