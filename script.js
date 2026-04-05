// Growfish Digital — minimal site JS
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu — toggle a simplified menu overlay
const toggle = document.querySelector(".menu-toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", expanded ? "false" : "true");
    let menu = document.getElementById("mobile-menu");
    if (!menu) {
      menu = document.createElement("div");
      menu.id = "mobile-menu";
      menu.className = "liquid-glass-strong";
      menu.style.cssText = "position:fixed;top:72px;left:16px;right:16px;z-index:49;border-radius:24px;padding:20px;display:flex;flex-direction:column;gap:4px;";
      const links = [
        ["Services","#services"],["Process","#approach"],["Work","#results"],
        ["About","#about"],["Contact","#contact"]
      ];
      links.forEach(([label, href]) => {
        const a = document.createElement("a");
        a.href = href; a.textContent = label;
        a.style.cssText = "color:#fff;padding:12px 16px;border-radius:9999px;font-size:14px;font-weight:500;";
        a.addEventListener("click", () => menu.remove());
        menu.appendChild(a);
      });
      document.body.appendChild(menu);
    } else {
      menu.remove();
    }
  });
}
