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
export const getShortDate = (timestap: number) => {
  const date = new Date(timestap);
  return date.toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
  });
};
