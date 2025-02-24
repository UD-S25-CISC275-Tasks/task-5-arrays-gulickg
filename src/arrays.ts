/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    return (
        numbers.length == 0 ? []
        : numbers.length == 1 ? [numbers[0], numbers[0]]
        : [numbers[0], numbers[numbers.length - 1]]
    );
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints = numbers.map((num: string): number =>
        parseInt(num) ? parseInt(num) : 0,
    );
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let newNum: string = "";
    const ints = amounts.map((num: string): number => {
        if (num[0] == "$") {
            num = num.slice(1);
        }
        if (parseInt(num)) {
            return parseInt(num);
        }
        return 0;
    });
    return ints;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    messages = messages.filter((str) => !str.endsWith("?"));
    const newMess = messages.map((message: string): string => {
        if (message.endsWith("!")) {
            return message.toUpperCase();
        }
        return message;
    });
    return newMess;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) {
        return true;
    }
    const trueColors = colors.every(
        (color: string): boolean =>
            color == "red" || color == "blue" || color == "green",
    );
    return trueColors;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) {
        return "0=0";
    }
    const sum = addends.reduce((total: number, num: number) => total + num, 0);
    const operation = addends.join("+");
    return sum.toString() + "=" + operation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum = 0;
    //get index of negative number
    const allPos = values.every((num: number): boolean => num >= 0);
    const index = values.findIndex((num: number): boolean => num < 0);
    //if there is a negative value
    if (!allPos) {
        const summedList = values.slice(0, index);
        sum = summedList.reduce((total: number, num: number) => total + num, 0);
        values.splice(index + 1, 0, sum);
    } else {
        //if there isn't a negative value
        sum = values.reduce((total: number, num: number) => total + num, 0);
        values.push(sum);
    }
    //splice list to get the list of numbers to be summed
    //get the sum
    //add sum to existing list
    return values;
}
