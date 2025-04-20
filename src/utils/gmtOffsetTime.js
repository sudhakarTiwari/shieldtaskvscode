export const getGMTOffset = (timezone) => {
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      timeZoneName: "shortOffset",
    });

    const parts = formatter.formatToParts(new Date());
    const offsetPart = parts.find((part) => part.type === "timeZoneName");

    return offsetPart?.value || "";
  } catch (err) {
    console.error("Invalid timezone:", timezone);
    return "";
  }
};
