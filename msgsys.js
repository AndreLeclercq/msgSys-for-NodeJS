/**
 * Find colors in https://en.wikipedia.org/wiki/ANSI_escape_code#Colors get the number in 'FG Code' column.
 * Base Code : \x1b[xxm | replace de 'xx' by the correct number.
 */

/**
 * Create a console.log with colors and time/date
 * @function
 * @param msg {string}
 * @param type {string}
 */
module.exports = function logSys(msg, type) {
    let style
    switch (type) {
        case 'success':
            style = '\x1b[32m'
            break
        case 'error':
            style = '\x1b[31m'
            break
        case 'warning':
            style = '\x1b[33m'
            break
        case 'info':
            style = '\x1b[34m'
            break
        case 'debug':
            style = '\x1b[46;30m'
            break
        default:
            style = '\x1b[0m'
    }
    type = type === undefined ? '' : `[${type}]`
    console.log(style, `[${dateTime()}]${type} ${msg}`, '\x1b[0m')
}

/**
 * Create TimeCode
 * @function
 * @returns {string}
 */
function dateTime() {
    let today = new Date()
    let addZero = e => e >= 10 ? e : `0${e}`
    return `${today.getFullYear()}-${addZero(today.getMonth() + 1)}-${addZero(today.getDate())} ${addZero(today.getHours())}:${addZero(today.getMinutes())}:${addZero(today.getSeconds())}`
}