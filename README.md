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

## Main tasks
1. Using AJAX, get a JSON file (see task materials) with a list of people and information about them.
2. Implement on JS the output of all received people as a table based on the received JSON file (see the mocap). It is not necessary that this be a table tag.
3. Implement the output of people in the form of a “preview” (see mocap). Elements that have a “video” field occupy the entire width of the area and contain a player with this video from the “videos” folder (see the materials for the task).
4. Implement sorting (works both for the table and for the preview).
5. Make a switch that will turn on the English interface (Sort by, Table / Previews, 30 years, ...) without reloading the page.
6. Make filtering (text box) by name and / or last name. Provide the possibility that the user can enter in the field first, last name, and then the name.
7. The selected list display type, active sorting and filtering are saved in the URL of the page. When you open the page, the page address is read using JS and the corresponding filters, sorting and so on are turned on.
8. The page should be adapted for tablets and phones. Part of the functionality on mobile devices can be sacrificed (for example, autorun video and animation).
9. Implement add / remove from favorites. Without AJAX (change field in Redux-storage).
10. Animation of the interface. Implement the animation elements of the interface (switches, filters, etc.).
11. Animation list. When loading, re-sorting, filtering and changing the view, the elements of the list appear one after another (with a slight delay relative to each other).
12. Autoplay. Videos in the preview automatically start when the video is in the middle of the screen and pauses when they leave this zone. Can't play two videos at the same time. After the “manual” launch of any video, the autoplay function is disabled.
## Bonus tasks:
1. Animation list. Elements that do not fall into the viewing area appear animated only as the page scrolls down. The entire table is animated in the table, and in the form of a preview, the block of the preview itself (background with a shadow) and all elements inside the block are animated.
2. Branding. Interface elements (buttons, favorite, etc.) have a color from a variable (for example, some $ brandColor in styles). Colors for different variations of these elements (for example, their hovers) should be automatically calculated based on the variable. To change the color scheme, it is enough to change only the value of the variable.