Робота виконана за допомогою Create React App

Технічне завдання:

Відповідно до макету потрібно реалізувати картки юзера.
При клікові на кнопку Follow - текст змінюється на Following. Також змінюється колір кнопки. А до кількості фоловерів додається і ваш. Тобто, початкова кількість складає 100,500 фоловерів. При клікові на кнопку буде 100,501.
При оновлені сторінки має фіксуватись кінцевий результат дій юзера. Тобто, якщо клікнути по кнопці і оновити сторінку - то кнопка все рівно залишається в стані Following із відповідним кольором, а кількість фоловерів НЕ зменшується до початкового значення.
При повторному клікові на кнопку її текст та колір змінюються до початкового стану. Також змінюється і кількість фоловерів. Вона зменшується на 1 (100,500).
В коді цифра 100,500 має бути прописана одним значенням (100500). В UI - виведено через кому (100,500).
Створи свій персональний бекенд для розробки за допомогою UI-сервісу mockapi.io. Створи ресурс users. Використай конструктор ресурсу та опиши об'єкт юзера, як описано нижче.

Юзер

Створено юзера в Mockapi з наступними полями: id, user, tweets, followers, avatar
Має бути від 12 юзерів з різними значеннями в базі.
Зроблена пагінація.
На одній сторінці пагінації має відображається від 3 твітів, решта підгружаються при натисканні Load More
Додатково зроблена маршрутизація за допомогою React Router
