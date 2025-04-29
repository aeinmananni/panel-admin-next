export const getChangeColor = (
  text: "تایید شده" | "در انتظار تایید" | "لغو شده"
) => {
  switch (text) {
    case "تایید شده":
      return "#3c9909";
    case "در انتظار تایید":
      return "#edb611";
    case "لغو شده":
      return "#fa160a";
  }
};
