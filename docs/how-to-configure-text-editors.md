## How to Configure Text Editors and IDEs for React.js

> Tips and tricks on how to configure your favorite text editor or IDE to work
> with React.js/ES6+/JSX.

### WebStorm

Make sure that **JSX** support is enabled in your project. This is set by default, if you create a new project based on React.js template.
Configure JavaScript libraries for **auto-complete**
Enable **ESLint** support
Enable **CSSComb** by following the instructions [here](https://github.com/csscomb/jetbrains-csscomb).
**If you have trouble with autoreloading** try to disable "safe write" in `File > Settings > System Settings > Use "safe write" (save chnages to a temporary file first)`

### Atom

Install atom packages

* [linter](https://atom.io/packages/linter)
* [linter-eslint](https://atom.io/packages/linter-eslint)
* [linter-stylelint](https://atom.io/packages/linter-stylelint)
* [react](https://atom.io/packages/react)

```shell
apm install linter linter-eslint react linter-stylelint
```

Install local npm packages

* [eslint](https://www.npmjs.com/package/eslint)
* [babel-eslint](https://www.npmjs.com/package/babel-eslint)
* [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
* [stylelint](https://www.npmjs.com/package/stylelint)

```shell
npm install --save-dev eslint babel-eslint eslint-plugin-react stylelint
```

*You may need to restart atom for changes to take effect*

### SublimeText

Install SublimeText packages
Easiest with [Package Control](https://packagecontrol.io/) and then "Package Control: Install Package" (Ctrl+Shift+P)  

* [Babel](https://packagecontrol.io/packages/Babel)
* [Sublime-linter](http://www.sublimelinter.com/en/latest/)
* [SublimeLinter-contrib-eslint](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint)
* [SublimeLinter-contrib-stylelint](https://packagecontrol.io/packages/SublimeLinter-contrib-stylelint)

You can also use [SublimeLinter-contrib-eslint_d](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint_d) for faster linting.

Set Babel as default syntax for a particular extension:

* Open a file with that extension,
* Select `View` from the menu,
* Then `Syntax` `->` `Open all with current extension as...` `->` `Babel` `->` `JavaScript (Babel)`.
* Repeat this for each extension (e.g.: .js and .jsx).

Install local npm packages
```
npm install eslint@latest
npm install babel-eslint@latest
npm install eslint-plugin-react
npm install stylelint
```