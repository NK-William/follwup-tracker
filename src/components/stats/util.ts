export const useStats = (date?: Date) => {
  const getFormattedDate = () => {
    if (!date) return "";
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };
  return { getFormattedDate };
};
