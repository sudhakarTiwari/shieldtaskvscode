import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import CalendarSelector from "./components/CalendarSelector";
import TimezoneDropdown from "./components/TimezoneDropdown";
import SearchInput from "./components/SearchInput";
import DataTable from "./components/DataTable";
import { useDateRange } from "./hooks/useDateRange";
import { useSearchFilter } from "./hooks/useSearchFilter";
import { fetchData } from "./utils/summtApi";
import { formatDateWithTimezone } from "./utils/formatDateWithTimezone";
import { MESSAGES, TOOLTIP_MESSAGES } from "./types/constants";
import { getGMTOffset } from "./utils/gmtOffsetTime";

const ShieldCalender = () => {
  const [range, setRange] = useDateRange();
  const [timezone, setTimezone] = useState("Europe/Moscow");
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleGo = async () => {
    const [startDate, endDate] = range;
    const startStr = formatDateWithTimezone(startDate, timezone);
    const endStr = formatDateWithTimezone(endDate, timezone);
    const result = await fetchData(startStr, endStr, timezone);
    setData(result);
    navigate("/table");
  };

  const filteredData = useSearchFilter(data, searchTerm);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container">
            <h2>{MESSAGES.SHIELD_CALENDAR}</h2>
            <div className="selected-dates">
              <strong style={{ marginRight: "5px" }}>Selected Range :</strong>{" "}
              {range[0]?.toLocaleDateString()} to{" "}
              {range[1]?.toLocaleDateString()}
            </div>
            <TimezoneDropdown selected={timezone} onChange={setTimezone} />
            <CalendarSelector
              startDate={range[0]}
              endDate={range[1]}
              onChange={setRange}
              timezone={timezone}
              tooltipMessages={{
                "2025-04-15": {
                  text: `${TOOLTIP_MESSAGES.EVENT}`,
                  disabled: false,
                },
                "2025-04-16": {
                  text: `${TOOLTIP_MESSAGES.HOLIDAY}`,
                  disabled: true,
                },
              }}
            />
            <div className="action-buttons">
              <button onClick={handleGo}>Go</button>
            </div>
          </div>
        }
      />

      <Route
        path="/table"
        element={
          <div className="container">
            <h2>Shield Table Page</h2>
            <div className="selected-dates">
              <strong>{MESSAGES.DATE_RANGE}</strong>{" "}
              {range[0]?.toLocaleDateString()} -{" "}
              {range[1]?.toLocaleDateString()}{" "}
              <strong style={{ marginLeft: "30px" }}>
                {MESSAGES.SELECTED_ZONE}
              </strong>
              {timezone} ({getGMTOffset(timezone)})
            </div>
            <SearchInput searchTerm={searchTerm} onSearch={setSearchTerm} />
            <DataTable data={filteredData} />
            <div className="action-buttons">
              <button onClick={() => navigate("/")}>Back</button>
            </div>
          </div>
        }
      />
    </Routes>
  );
};

const App = () => (
  <Router>
    <ShieldCalender />
  </Router>
);

export default App;
