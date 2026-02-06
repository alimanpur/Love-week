export function getUnlockedDay() {
  return Number(localStorage.getItem("unlockedDay")) || 1;
}

export function unlockNextDay(day) {
  localStorage.setItem("unlockedDay", day);
}
