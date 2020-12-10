# msgSys-for-NodeJS
Create a console.log with colors and time/date.

## Install msgSys
run command `npm i msgsys`

Import the module to your JavaScript files

`let logSys = require('msgsys')` by default

or

`import logSys from 'msgsys'` for npm project type module

## Use msgSys
- Success : `logSys('My success message', 'success')`
- Error : `logSys('My error message', 'error')`
- Warning : `logSys('My warning message', 'warning')`
- Info : `logSys('My info message', 'info')`
- Debug : `logSys('My debug message', 'debug')`

## Result in terminal

![logSys](https://i.imgur.com/QPR4vjH.png)

## Edit Colors
Edit the `/node_modules/msgsys/msgsys.js` file and follow the instructions :

Find colors in [Wikipedia ANSI escape code Colors](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors) get the number in `FG Code` column.

Base Code : `\x1b[xxm` | replace de `xx` by the correct number.

## Links
* [Sources From Github](https://github.com/AndreLeclercq/msgSys-for-NodeJS)

* [NPM package](https://www.npmjs.com/package/msgsys)

* ☕ [Buy my a coffee](https://www.buymeacoffee.com/aleclercq)

## Licence

MIT Licence

Copyright (c) 2020 André LECLERCQ

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.