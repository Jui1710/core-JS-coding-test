/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */
const rgbToHexConversion = (...rgbValues) => {
    if ((rgbValues.length === 3) && (rgbValues.every((arg) => typeof (arg) === 'number' && arg >= 0 && arg <= 255))) {
        let hexcode = '#';

        rgbValues.forEach((color) => {
            color = color.toString(16);
            if (color.length === 1) {
                color = '0' + color;
            }
            hexcode = hexcode + color;
        })
        return hexcode;
    }
    else {
        throw new Error("Invalid Input");
    }
};

module.exports = rgbToHexConversion;
