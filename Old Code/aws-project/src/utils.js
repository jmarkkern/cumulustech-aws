class Utils {
    // Static method to generate a random number within a range
    static generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Static method to capitalize the first letter of a string
    static capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Other static methods can be defined here...
}

export default Utils;