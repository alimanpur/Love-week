import html2canvas from "html2canvas";

export async function downloadElementAsImage(id, filename) {
  const element = document.getElementById(id);

  if (!element) {
    alert("Card not found!");
    return;
  }

  // ✅ Clone into safe wrapper (removes Tailwind OKLCH styles)
  const clone = element.cloneNode(true);

  // Create temporary container
  const wrapper = document.createElement("div");
  wrapper.style.position = "fixed";
  wrapper.style.top = "-9999px";
  wrapper.style.left = "-9999px";
  wrapper.style.background = "#050914"; // safe navy background
  wrapper.style.padding = "40px";

  wrapper.appendChild(clone);
  document.body.appendChild(wrapper);

  try {
    const canvas = await html2canvas(clone, {
      scale: 3,
      backgroundColor: "#050914",
      useCORS: true,

      // ✅ Ignore unsupported CSS
      ignoreElements: (el) => {
        const style = window.getComputedStyle(el);
        return style.color.includes("oklch");
      },
    });

    const link = document.createElement("a");
    link.download = filename;
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (err) {
    console.error("Download failed:", err);
    alert("Download failed. Please try again.");
  }

  // Cleanup
  document.body.removeChild(wrapper);
}
