export const formatDateWithTimezone = (date, timezone) => {
  const tzDate = new Date(date.toLocaleString("en-US", { timeZone: timezone }));
  const offset = -tzDate.getTimezoneOffset();
  const offsetHours = String(Math.floor(offset / 60)).padStart(2, "0");
  const offsetMinutes = String(offset % 60).padStart(2, "0");
  const offsetSign = offset >= 0 ? "+" : "-";
  return `${
    tzDate.toISOString().split("T")[0]
  } 00:00:00 ${offsetSign}${offsetHours}${offsetMinutes}`;
};
