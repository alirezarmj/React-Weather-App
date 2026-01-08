export const getFormatedDate = () => {
  const currentDate = new Date();
  return currentDate.toLocaleString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getShortDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000); // convert timestamp to milliseconds

  return date.toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
