import { useState } from "react";
import { subDays } from "date-fns";

export const useDateRange = () => {
  const today = new Date();
  const sevenDaysAgo = subDays(today, 7);
  return useState([sevenDaysAgo, today]);
};
