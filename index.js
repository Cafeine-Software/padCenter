/**
 * @summary Pad a string to center it
 * @description Pads a string to center it within a given width using a specified character
 * @param {String} str String to pad
 * @param {Number} width Final width
 * @param {String} [char] Character to use for padding (default: space) 
 * @returns {String} Padded string
 * @throws {Error} If the string to pad is not a valid string
 * @throws {Error} If the width is not a valid number
 * @throws {Error} If the padding character is not a string
 * @throws {Error} If the padding character is not a single character
 * @example
 * import { padCenter } from 'pad-center';
 * 
 * padCenter('hello', 11);
 * // => '   hello   '
 * 
 * padCenter('hello', 11, '*');
 * // => '***hello***'
 */
export function padCenter(str, width, char = ' ') {

    // Type checks
    if(typeof str !== 'string') throw new Error("First argument must be a valid string to be padded.");
    if(typeof width !== 'number' || isNaN(width) || !isFinite(width)) throw new Error("Width must be a finite number.");
    if (str.length >= width) return str;
    if(typeof char !== 'string') throw new Error("Padding character must be a string.");
    if( char.length !== 1) throw new Error("Padding character must be a single character.");

    const totalPadding = width - str.length;
    const paddingStart = Math.floor(totalPadding / 2);
    const paddingEnd = totalPadding - paddingStart;
    return char.repeat(paddingStart) + str + char.repeat(paddingEnd);
    
}