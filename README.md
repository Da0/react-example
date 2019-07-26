# react-example
Example test work with React and Redux.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Основные задачи
1. С помощью AJAX получить JSON-файл (см. материалы к заданию) со списком людей и информацией о них.
2. Реализовать на JS вывод всех полученных людей в виде таблицы на основе полученного JSON-файла (см. мокап). Необязательно, чтобы это был тэг table.
3. Реализовать вывод людей в виде “превью” (см. мокап). Элементы у которых есть поле “video”, занимают всю ширину области и содержат плеер с этим видео из папки “videos” (см. материалы к заданию).
4. Реализовать сортировку (работает и для таблицы, и для превью).
5. Сделать переключатель, который без перезагрузки страницы включит англоязычный интерфейс (Sort by, Table/Previews, 30 years, ...).
6. Сделать фильтрацию (текстовым полем) по имени и/или фамилии. Предусмотреть возможность того, что пользователь может вписать в поле сначала фамилию, а потом имя.
7. Выбранный тип отображения списка, активная сортировка и фильтрация сохраняются в URL страницы. При открытии страницы, адрес страницы считывается с помощью JS и включаются соотстветсвующие фильтры, сортировки и тд.
8. Страница должна адаптироваться для планшетов и телефонов. Частью функционала на мобильных устройствах можно пожертвовать (например, автозапуском видео и анимацией).
9. Реализовать добавление/удаление из избранного. Без AJAX (менять поле в Redux-хранилище).
10. Анимация интерфейса. Реализовать анимацию элементов интерфейса (переключатели, фильтр и тд). 
11. Анимация списка. При загрузке, пересортировке, фильтрации и смене вида, элементы списка появляются друг за другом (с небольшой задержкой относительно друг друга).
12. Autoplay. Видеоролики в превью автоматически запускаются, когда видео находится в районе середины экрана и становтся на паузу, когда выходят из этой зоны. Не может играть два видео одновременно. После «ручного» запуска какого-либо видео функция автоплея отключается.
## Бонусные задачи:
1. Анимация списка. Элементы, которые не попадают в просматриваемую область, появляются анимированно только по мере прокрутки страницы вниз. В таблице анимированно прилетают строки целиком, а в виде превью — анимируется и сам блок превью (подложка с тенью) и все элементы внутри блока.
2. Брендируемость. Элементы интерфейса (кнопки, favourite и тд) имеют цвет из переменной (например, какой-нибудь $brandColor в стилях). Цвета для различных вариаций этих элементов (например их ховеры), должны автоматически расчитываться на основе переменной. Для смены цветовой схемы, достаточно изменить только значение переменной.
