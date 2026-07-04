# Introduction

A lightweight toolkit for string manipulation and text processing.

# Installation

Install the package via your preferred package manager.

## npm

```shell
npm install js-string-kit js-locale-kit
```

## yarn

```shell
yarn add js-string-kit js-locale-kit
```

# Usage

`StringKit` requires a configured `LocaleKit` instance.

```javascript
import LocaleKit from 'js-locale-kit';
import StringKit from 'js-string-kit';

const localeKit = new LocaleKit(configuration);
const stringKit = new StringKit(localeKit);
```

## Detecting Text Direction

Returns the writing direction of a string.

```javascript
stringKit.textDirection('Hello');
// 'ltr'

stringKit.textDirection('سلام');
// 'rtl'
```

Returns `null` when the direction cannot be determined.

```javascript
stringKit.textDirection('');
// null
```

## Converting Unicode Digits

Converts localized Unicode digits to ASCII digits.

```javascript
stringKit.replaceDigitsWithAscii('۱۲۳');
// '123'

stringKit.replaceDigitsWithAscii('١٢٣');
// '123'

stringKit.replaceDigitsWithAscii('Year ۲۰۲۶');
// 'Year 2026'
```
