export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const dateLocalString = dateObj.toLocaleDateString().split("/");
  let day = dateLocalString[1];
  if (day.length === 1) {
    day = "0" + day;
  }
  let month = dateLocalString[0];
  if (month.length === 1) {
    month = "0" + month;
  }

  return `${day}-${month}-${dateLocalString[2]}`;
};
