import { useMemo } from "react";

const useStockStatus = (stock, sold) => {
  return useMemo(() => {
    const Availablestock = stock - sold;
    const soldPercentage = stock > 0 ? (sold / stock) * 100 : 0;
    const roundedPercentage = Math.round(soldPercentage);

    if (roundedPercentage >= 100 || Availablestock <= 0) {
      return {
        status: "Out of stock",
        color: "gray",
        percentage: 0,
      };
    } else if (roundedPercentage >= 80) {
      return {
        status: "Limited stock",
        color: "#ff624c",
        percentage: roundedPercentage,
      };
    } else {
      return {
        status: `${Availablestock} Available`,
        color: "black",
        percentage: roundedPercentage,
      };
    }
  }, [stock, sold]);
};

export default useStockStatus;
