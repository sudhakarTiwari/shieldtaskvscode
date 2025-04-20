import React from "react";
import { timezoneOptions } from "../types";

const TimezoneDropdown = ({ selected, onChange }) => {
  return (
    <div className="timezone-dropdown">
      <label style={{ margin: "5px" }}>Select Timezone: </label>
      <select value={selected} onChange={(e) => onChange(e.target.value)}>
        {timezoneOptions.map((zone) => (
          <option key={zone} value={zone}>
            {zone}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimezoneDropdown;
