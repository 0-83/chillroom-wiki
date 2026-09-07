// ==========================================
// ФОН ДЛЯ ВСЕГО САЙТА (из content/images/)
// ==========================================

body {
  background-color: #1a1a2e;
  background-image: url('/content/images/background.png');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

// Затемняем фон для читаемости текста
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.55);
  z-index: -1;
}

// Контент поверх фона
.page {
  position: relative;
  z-index: 1;
}

// Блоки с полупрозрачным фоном (эффект стекла)
article,
.sidebar,
.page-header,
footer {
  background: rgba(26, 26, 46, 0.8);
  backdrop-filter: blur(6px);
  border-radius: 12px;
  padding: 1rem 2rem;
  margin-bottom: 1.5rem;
}

// Для мобильных устройств
@media all and (max-width: 1800px) {
  .sidebar {
    background: transparent !important;
    backdrop-filter: none !important;
    padding: 0 !important;
  }
}
