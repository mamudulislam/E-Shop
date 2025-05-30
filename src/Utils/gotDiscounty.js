export const gotDiscounty =(price,discout)=>{
    if (!discout || discout <= 0)return price;
  const discountedPrice = price - (price * discout) / 100;
  return parseFloat(discountedPrice.toFixed(2));  
}