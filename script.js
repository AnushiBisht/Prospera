const textArray = [
    "Fixed Deposits",
    "Mutual Funds",
    "Commodities",
    "US Stocks",
    "PMS",
    "Equity",
    "Bonds",
    "AIF",

  ];
  let currentIndex = 0;
  const textElement = document.getElementById("dynamic-text");
  
  function updateText() {
      textElement.style.opacity = 0;
      setTimeout(() => {
          textElement.textContent = textArray[currentIndex];
          textElement.style.opacity = 1; 
          currentIndex = (currentIndex + 1) % textArray.length;
      }, 500);
  }
  
  setInterval(updateText, 3000); 
  updateText(); 
  