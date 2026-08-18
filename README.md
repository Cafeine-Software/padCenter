<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="media/wideLogo_white.webp">
  <source media="(prefers-color-scheme: light)" srcset="media/wideLogo_dark.webp">
  <img alt="PadCenter" src="media/wideLogo_dark.webp">
</picture>

[![NodeJS Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)[![Npm Badge](https://img.shields.io/badge/npm-red?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/@cafeine-software/padcenter)

<hr/>

[Introduction](#Introduction) • [Installation](#Installation) • [Usage](#Usage) • [License](#License) • [Author](#Author)<hr/>

</div>

<br/>

# Introduction

A lightweight utility to pad and center strings within a given width

# Installation

```bash
npm install @cafeine-software/padcenter
```

# Usage

```javascript
import { padCenter } from '@cafeine-software/padcenter';

// Basic centering with spaces
padCenter('hello', 11);
// => '   hello   '

// Custom padding character
padCenter('hello', 11, '*');
// => '***hello***'

// Odd width distribution
padCenter('test', 9);
// => '  test   '
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `str` | `string` | - | The string to pad (required) |
| `width` | `number` | - | The final width (required) |
| `char` | `string` | `' '` | The padding character (optional) |

## Returns

- `string` - The padded and centered string

## Throws

- `Error` - If `str` is not a valid string
- `Error` - If `width` is not a finite number
- `Error` - If `width` is not an integer
- `Error` - If `char` is not a string
- `Error` - If `char` is not a single character

## Edge Cases

- If the string length is greater than or equal to the width, the original string is returned unchanged
- When padding is odd, the extra character is added to the end

# Changelog

- 18/08/2026 : v1.0.5 — Fixed validation order, added integer check for width, aligned license to MPL-2.0, flattened project structure, and expanded test coverage

# License

[![Licence](https://img.shields.io/badge/MPL%202.0-00d230?style=for-the-badge&logo=mozilla&logoColor=white)](https://www.mozilla.org/en-US/MPL/2.0/)

# Author

[<img src="https://raw.githubusercontent.com/quentinlamamy/quentinlamamy/b88fe446526c98aac889c6b21611a59c41bcbc3d/media/quentinDino_opti.svg" height=80/>](https://github.com/quentinlamamy)