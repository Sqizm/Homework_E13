<h1>Практическая работа 13.7</h1>
<p>Проект создан с помошью команды npm init</p>
<p>Установлены такие NPM-пакеты как:</p>
<ul>
    <li>webpack, webpack-cli, webpack-dev-server;</li>
    <li>style-loader, css-loader;</li>
    <li>html-webpack-plugin;</li>
    <li>json-server</li>
    <li>eslint, husky, lint-staged</li>
</ul>
<p>Что сделано:</p>
<ul>
    <li>В хук pre-commit добавлен запуск линтера.</li>
    <li>В package.json добавлена настройка для lint-staged. В настройке, линтер eslint будет запускаться на всех измененных .js файлах, и будет выполнять автоматически исправления, если это возможно.</li>
    <li>Два окружения: dev и prod. В dev включен HMR, в prod выключен. В режиме разработки (dev mode) используется webpack-dev-server (при изменений файлов в проекте сервер автоматически пересоберёт сборку и обновит страницу в браузере)</li>
    <li>В prod HMR выключен. для запуска сервера используется webpack serve.</li>
</ul>
<p>Запуск приложения:</p>
<ul>
    <li>Установить npm-пакеты, которые перечислены выше и инициализировать husky и eslint!</li>
    <li>Запуск webpack-сборки осуществляется с помощью команды: npm run start:dev</li>
    <li>В первом окне консоли/терминала IDE запускаем JSON-server командой - npm run start:api</li>
    <li>Во втором окне консоли/терминале IDE запускаем webpack сервер
        <ul>
            <li>Production mode: npm run build</li>
            <li>Development mode: npm start</li>
        </ul>
    </li>
    <li>Адрес проекта - <a href="http://localhost:8080/">ссылка</a></li>
</ul>