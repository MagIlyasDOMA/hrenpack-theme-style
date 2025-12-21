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

### Интеграция с magic-snowflakes

Пакет включает интеграцию с библиотекой `magic-snowflakes` для создания анимированного снегопада на странице.
> **Внимание:** Для корректной работы скрипт должен быть подключен синхронно (без атрибутов `async` или `defer`).

#### Подключение снегопада

```html
<!-- Подключите скрипт snow.js с настройками через data-атрибуты -->
<script
        src="node_modules/hrenpack-theme-style/dist/snow.js"
        data-count="100"
        data-color="#ffffff"
        data-min-opacity="0.3"
        data-max-opacity="0.9"
        data-min-size="5"
        data-max-size="15"
        data-rotation
        data-speed="1"
        data-types="6"
        data-z-index="9999">
</script>
```

#### Доступные настройки через data-атрибуты:
- `data-count` (число) - количество снежинок (по умолчанию: 50)
- `data-color` (строка) - цвет снежинок (по умолчанию: "#5ecdef")
- `data-min-opacity` (число) - минимальная прозрачность (по умолчанию: 0.6)
- `data-max-opacity` (число) - максимальная прозрачность (по умолчанию: 1)
- `data-min-size` (число) - минимальный размер (по умолчанию: 10)
- `data-max-size` (число) - максимальный размер (по умолчанию: 25)
- `data-rotation` (булевый) - включить вращение снежинок
- `data-speed` (число) - скорость падения (по умолчанию: 1)
- `data-stop` (булевый) - не запускать автоматически
- `data-types` (число) - количество типов снежинок (по умолчанию: 6)
- `data-z-index` (число) - z-index снежинок (по умолчанию: 9999)
> **Примечание:** Некоторые параметры (`width`, `height`, `wind`, `autoResize`) не могут быть установлены через data-атрибуты, но доступны для программного изменения.

#### Программное управление снегопадом
После подключения скрипта доступен глобальный объект `snowManager`:
```javascript
// Остановить снегопад
snowManager.pause();

// Запустить снегопад
snowManager.play();

// Переключить (вкл/выкл)
snowManager.toggle();

// Изменить параметры
snowManager.count = 200;
snowManager.speed = 2;
snowManager.color = "#ff0000";

// Уничтожить снегопад и освободить ресурсы
snowManager.destroy();
```
> **Важно:** Изменение любого параметра приводит к полному пересозданию снегопада. Это может вызвать кратковременное мерцание на странице.

#### Автоматическое управление
Снегопад автоматически приостанавливается:
- Когда пользователь переключается на другую вкладку
- Когда окно теряет фокус
- Когда страница скрыта

И автоматически возобновляется при возвращении.

## Зависимости
- `hrenpack_js` (^3.1.5) — базовые утилиты для работы с cookies, темами и DOM
- `magic-snowflakes` (^7.0.2) — библиотека для создания анимированного снегопада

## Ограничения и известные проблемы

### Снегопад
1. **Пересоздание экземпляра:** При изменении любого параметра снегопада через `snowManager.property = value` происходит полное пересоздание экземпляра, что может вызвать кратковременное мерцание.
2. **Синхронная загрузка:** Скрипт `snow.js` должен загружаться синхронно. Использование атрибутов `async` или `defer` приведет к ошибке `document.currentScript is null`.
3. **Производительность:** Большое количество снежинок (особенно на мобильных устройствах) может снизить производительность. Рекомендуется использовать `data-count` не более 150.

### Темы оформления
1. **Последовательность загрузки:** Стили `style.css` должны подключаться после Bootstrap для корректного переопределения переменных.
2. **Браузерная поддержка:** Некоторые старые браузеры могут не поддерживать CSS-переменные, что приведет к отображению только светлой темы.

## Совместимость
- Поддерживает современные браузеры (ES2020+)
- TypeScript 5.9.3 и выше
- Работает в средах с поддержкой модулей ES
- **Интеграция с magic-snowflakes 7.0.2+**
    - Изменение параметров снегопада происходит через пересоздание экземпляра
    - Динамическое обновление конфигурации требует полной реинициализации

## Разработка
Для сборки из исходников:

```shell
git clone https://github.com/MagIlyasDOMA/hrenpack-theme-style.git
cd hrenpack-theme-style
npm install
npm run build  # Компиляция TypeScript в JavaScript
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
