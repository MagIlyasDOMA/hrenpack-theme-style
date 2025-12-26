# Примеры использования Snow Manager

## Базовые сценарии

### 1. Простое подключение
```html
<!-- Минимальная конфигурация -->
<script src="snow.js"></script>
<!-- Будет использовано 50 голубых снежинок -->
```

### 2. Праздничное оформление
```html
<script src="snow.js"
    data-count="200"
    data-color="#ffffff"
    data-min-size="5"
    data-max-size="30"
    data-rotation
    data-speed="1.5"
    data-types="8"
    data-z-index="99999">
</script>
```

### 3. Интеграция с интерфейсом администратора
```html
<div class="snow-control-panel">
    <h3>Управление снегопадом</h3>
    
    <div class="control-group">
        <label>Количество снежинок: <span id="count-value">50</span></label>
        <input type="range" min="10" max="300" value="50" 
               oninput="updateSnowCount(this.value)">
    </div>
    
    <div class="control-group">
        <label>Скорость:</label>
        <input type="range" min="0.1" max="5" step="0.1" value="1"
               oninput="snowManager.speed = parseFloat(this.value)">
    </div>
    
    <div class="control-group">
        <label>Цвет:</label>
        <input type="color" value="#5ecdef"
               onchange="snowManager.color = this.value">
    </div>
    
    <div class="control-group">
        <button onclick="snowManager.toggle()">⏯️ Вкл/Выкл</button>
        <button onclick="snowManager.destroy()">🗑️ Удалить</button>
    </div>
</div>

<script>
function updateSnowCount(value) {
    document.getElementById('count-value').textContent = value;
    snowManager.count = parseInt(value);
}
</script>
```

## Продвинутые сценарии
### 1. Адаптивный снегопад
```js
// Автоматическая адаптация к размеру экрана
function createAdaptiveSnow() {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;
    
    const config = {
        count: isMobile ? 30 : isTablet ? 60 : 100,
        minSize: isMobile ? 5 : 8,
        maxSize: isMobile ? 15 : 25,
        speed: isMobile ? 0.8 : 1.2,
        optimize: true
    };
    
    return new SnowManager(config);
}

// Реакция на изменение размера окна
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        snowManager.destroy();
        snowManager = createAdaptiveSnow();
    }, 500);
});
```

### 2. Снегопад с интерактивностью
```js
// Снежинки реагируют на курсор
document.addEventListener('mousemove', (e) => {
    if (!snowManager.snow) return;
    
    const snowflakes = document.querySelectorAll('.snowflake');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    snowflakes.forEach(flake => {
        const rect = flake.getBoundingClientRect();
        const distance = Math.sqrt(
            Math.pow(rect.x - mouseX, 2) + 
            Math.pow(rect.y - mouseY, 2)
        );
        
        if (distance < 100) {
            // Отталкивание снежинок от курсора
            const force = (100 - distance) / 100;
            flake.style.transform += ` translate(${force * 10}px, ${force * 10}px)`;
        }
    });
});
```

### 3. Сезонные темы
```js
// Автоматическое определение сезона
function getSeasonalSnowConfig() {
    const month = new Date().getMonth();
    
    switch(month) {
        case 11: // Декабрь
        case 0:  // Январь
        case 1:  // Февраль
            return {
                count: 150,
                color: '#ffffff',
                speed: 1.5,
                rotation: true,
                types: 8
            };
            
        case 2: // Март
        case 3: // Апрель
            return {
                count: 80,
                color: '#e6f7ff',
                speed: 0.8,
                rotation: false,
                types: 4
            };
            
        default:
            return {
                count: 50,
                color: '#5ecdef',
                speed: 1,
                rotation: false,
                types: 6
            };
    }
}

// Инициализация с сезонной темой
snowManager = new SnowManager(getSeasonalSnowConfig());
```

### 4. Интеграция с игровым интерфейсом
```js
// Снегопад как часть игровой механики
class SnowGame {
    constructor() {
        this.snow = new SnowManager({
            count: 100,
            color: '#ffffff',
            speed: 1,
            stop: true // Не запускаем автоматически
        });
        
        this.score = 0;
        this.setupGame();
    }
    
    setupGame() {
        // Собираем снежинки кликом
        document.addEventListener('click', (e) => {
            const snowflakes = document.querySelectorAll('.snowflake');
            snowflakes.forEach(flake => {
                const rect = flake.getBoundingClientRect();
                if (e.clientX >= rect.left && e.clientX <= rect.right &&
                    e.clientY >= rect.top && e.clientY <= rect.bottom) {
                    this.collectSnowflake(flake);
                }
            });
        });
    }
    
    collectSnowflake(flake) {
        flake.style.opacity = '0';
        flake.style.transform = 'scale(0)';
        this.score += 10;
        
        setTimeout(() => {
            flake.remove();
            // Добавляем новую снежинку
            this.addSnowflake();
        }, 300);
    }
    
    addSnowflake() {
        // Логика добавления новой снежинки
    }
    
    startGame() {
        this.snow.play();
        setTimeout(() => this.snow.pause(), 30000); // Игра 30 секунд
    }
}
```

### 5. Снегопад для фонового видео
```html
<div class="video-container">
    <video autoplay muted loop>
        <source src="winter-scene.mp4" type="video/mp4">
    </video>
    <div class="snow-overlay"></div>
</div>

<script>
// Снегопад поверх видео
const snowManager = new SnowManager({
    container: document.querySelector('.snow-overlay'),
    count: 200,
    color: '#ffffff',
    minOpacity: 0.3,
    maxOpacity: 0.8,
    zIndex: 100,
    autoResize: false,
    width: document.querySelector('.video-container').offsetWidth,
    height: document.querySelector('.video-container').offsetHeight
});

// Синхронизация с размером видео
document.querySelector('video').addEventListener('loadedmetadata', function() {
    snowManager.width = this.videoWidth;
    snowManager.height = this.videoHeight;
});
</script>
```

## Отладка и оптимизация
### Профилирование в Chrome DevTools
```js
// Включить мониторинг производительности
const snowPerf = {
    startTime: performance.now(),
    frameCount: 0,
    
    startMonitoring() {
        const snowCanvas = document.querySelector('canvas');
        if (snowCanvas) {
            const ctx = snowCanvas.getContext('2d');
            const originalFill = ctx.fillRect;
            
            // Перехватываем отрисовку
            ctx.fillRect = function(...args) {
                snowPerf.frameCount++;
                return originalFill.apply(this, args);
            };
        }
    },
    
    getStats() {
        const elapsed = performance.now() - this.startTime;
        return {
            fps: Math.round((this.frameCount / elapsed) * 1000),
            totalFrames: this.frameCount,
            elapsedTime: Math.round(elapsed)
        };
    }
};

// Запуск мониторинга
snowPerf.startMonitoring();
setInterval(() => console.log(snowPerf.getStats()), 5000);
```
