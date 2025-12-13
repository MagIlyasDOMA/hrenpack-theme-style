# hrenpack-theme-style
## Описание
`hrenpack-theme-style` — это пакет для быстрой настройки тематического оформления веб-сайтов с поддержкой светлой и тёмной темы. Он предоставляет готовые CSS-стили, компоненты для переключения тем и интеграцию с системными настройками пользователя.

Пакет идеально подходит для проектов, где требуется гибкое управление цветовыми схемами с минимальными усилиями.

## Установка

```shell
npm install hrenpack-theme-style
```

## Использование
### Подключение стилей
Добавьте следующие стили в ваш HTML-файл:

```html
<!-- Подключите Bootstrap -->
<link rel="stylesheet" href="node_modules/bootstrap/dist/bootstrap.css">
<!-- Или -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css">

<!-- Обязательно именно этот id! -->
<link id="hrenpack-theme-stylesheet" rel="stylesheet" href="node_modules/hrenpack-theme-style/style.css">
<!-- Или, если не хотите устанавливать пакет -->
<link id="hrenpack-theme-stylesheet" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/hrenpack-theme-style/style.css">
```

### Подключение скриптов
```html
<!-- Подключите зависимости -->
<script src="node_modules/hrenpack_js/url.js"></script>
<script src="node_modules/hrenpack_js/system.js"></script>
<script src="node_modules/hrenpack_js/auto.js"></script>
<script src="node_modules/hrenpack_js/cookie.js"></script>

<!-- Подключите основной скрипт темы -->
<script src="node_modules/hrenpack-theme-style/script.js"></script>
<!-- Для работы темной темы -->
<script src="node_modules/hrenpack-theme-style/dark-theme.js"></script>
```

### Добавление кнопки переключения темы
Добавьте в HTML-разметку кнопку для переключения между темами:

```html
<div id="hrenpack-change-theme-div"> <!-- div с таким id не обязателен -->
    <button id="hrenpack-toggle-theme" class="btn-hren">Переключить тему</button>
</div>
```

Кнопка будет автоматически обработана скриптом `dark-theme.js`.

## Компоненты
### Стили
- `style.css` — базовые стили и CSS-переменные для светлой темы

- `style_light.css` — расширение базовых стилей (импортирует `style.css`)

- `style_dark.css` — переопределение переменных для тёмной темы

### Скрипты
- `script.js` — основной скрипт пакета

- `dark-theme.js` — управление переключением тем, сохранение выбора в `localStorage` и cookies

- `input-reversed.js` — утилита для обработки порядка элементов `input` и `label` внутри формы

- `form.js` - обработка формы

### CSS-переменные
Пакет использует CSS-переменные для управления цветами. Основные переменные:

- `--hrenpack-background` — цвет фона

- `--hrenpack-foreground` — цвет текста

- `--hrenpack-a-hover-coloк` — цвет ссылок при наведении

- `--hrenpack-button-hover-color` — цвет кнопок при наведении

- `--hrenpack-fcu-border-color` — цвет границ полей ввода

- И многие другие

Все переменные переопределяются в `style_dark.css` для тёмной темы.

### Классы
`.btn-hren`
Стандартная кнопка пакета. Автоматически получает цвета из CSS-переменных.

`.btn-hren-ahren`
Альтернативный стиль кнопки (инвертированные цвета).

`.form-control-hrenpack`
Стилизованное поле ввода.

`.form`
Готовый стиль для форм с градиентным фоном.

`.grid-div` и `.grid-panel`
Сетка для отображения карточек контента.

`.singular-panel`, `.panel`
Панели для выделения контента.

## Зависимости
- `hrenpack_js` (^2.0.5) — базовые утилиты для работы с cookies, темами и DOM

## Совместимость
- Поддерживает современные браузеры (ES2020+)

- TypeScript 5.9.3 и выше

- Работает в средах с поддержкой модулей ES

## Разработка
Для сборки из исходников:

```shell
git clone https://github.com/MagIlyasDOMA/hrenpack-theme-style.git
cd hrenpack-theme-style
npm install
npx tsc
```

## Лицензия
#### MIT © MagIlyasDOMA

---

## Ссылки
- [GitHub репозиторий](https://github.com/MagIlyasDOMA/hrenpack-theme-style)

- [npm пакет](https://www.npmjs.com/package/hrenpack-theme-style)

- [Баг-трекер](https://github.com/MagIlyasDOMA/hrenpack-theme-style/issues)

---

*Примечание: Пакет находится в активной разработке. Пожалуйста, сообщайте об ошибках и предлагайте улучшения через Issues на GitHub.*
