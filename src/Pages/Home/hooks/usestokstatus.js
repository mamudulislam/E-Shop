import { useMemo } from "react";

const useStockStatus = (stock, sold) => {
  return useMemo(() => {
    const total = stock + sold;
    const percentage = total > 0 ? (stock / total) * 100 : 0;
    const roundedPercentage = Math.round(percentage);

    if (roundedPercentage === 0) {
      return {
        status: "Out of stock",
        color: "gray",
        percentage: 0,
      };
    } else if (roundedPercentage <= 20) {
      return {
        status: "Limited stock",
        color: "#ff624c",
        percentage: roundedPercentage,
      };
    } else {
      return {
        status: `${stock} Available`,
        color: "black",
        percentage: roundedPercentage,
      };
    }
  }, [stock, sold]);
};

export default useStockStatus;
