// Save unlocked day
export const saveUnlockedDay = (day) => {
  localStorage.setItem("unlockedDay", day);
};

// Get unlocked day (default = 1)
export const getUnlockedDay = () => {
  return Number(localStorage.getItem("unlockedDay")) || 1;
};
