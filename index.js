export default class StringKit {
    #localeKit;

    constructor(localeKit) {
        this.#localeKit = localeKit;
    }

    textDirection(string) {
        if (string === null || string === undefined) {
            return null;
        }

        string = string.toString();
        string = string.replace(/ /g, '');
        string = string.replace(/[~!@#$%^&*()\-+{}:"';<>?؟.\/\\_]/g, '');

        if (string === '') {
            return null;
        }

        string = string.replace(/\p{Nd}/gu, '');
        
        if (string === '') {
            return 'ltr';
        }

        for (let locale of this.#localeKit.definedLocales) {
            const letters = this.#localeKit.get('letters', locale);

            if (letters.some(letter => string.startsWith(letter))) {
                return this.#localeKit.get('direction', locale);
            }
        }

        return null;
    }

    replaceDigitsWithAscii(string) {
        if (string === null || string === undefined) {
            return string;
        }
        
        string = string.toString();

        for (const locale of this.#localeKit.definedLocales) {
            const numbers = this.#localeKit.get('numbers', locale);

            for (let index in numbers) {
                string = string.split(numbers[index]).join(index);
            }
        }

        return string;
    }
}
