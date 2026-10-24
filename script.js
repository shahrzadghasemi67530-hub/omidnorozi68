"use strict";

// NOROUZI OIL - script.js

document.addEventListener("DOMContentLoaded", () => {

    // حرکت نرم بین بخش‌های صفحه
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const id = link.getAttribute("href");

            if (!id || id === "#") return;

            const target = document.getElementById(id.slice(1));

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    
});