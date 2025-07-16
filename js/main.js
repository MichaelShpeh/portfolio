//! Функція для завантаження та застосування перекладу
async function setLanguage(lang) {
  try {
    const res = await fetch(`./lang/${lang}.json`);
    const translations = await res.json();

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[key]) {
        el.textContent = translations[key];
      }
    });

    //! Зберегти мову в localStorage
    localStorage.setItem("lang", lang);
  } catch (error) {
    console.error("Помилка завантаження мови:", error);
  }
}

//! Отримати мову з localStorage або використати "en" за замовчуванням
const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);

//! Обробники кнопок
document.getElementById("btn-uk").addEventListener("click", () => {
  setLanguage("uk");
});

document.getElementById("btn-en").addEventListener("click", () => {
  setLanguage("en");
});
