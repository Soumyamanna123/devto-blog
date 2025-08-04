
// Cleaning up a timer

useEffect(() => {
  const intervalId = setInterval(() => {
    console.log("⏰ Timer running...");
  }, 1000);

  // 🧹 Cleanup when component unmounts
  return () => {
    clearInterval(intervalId); // ✅ Prevents memory leak
    console.log("🛑 Timer stopped.");
  };
}, []);
