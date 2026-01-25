# padCenter

A lightweight utility to pad and center strings within a given width

## Installation

```bash
npm install pad-center
```

## Usage

```javascript
import { padCenter } from 'pad-center';

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

## Documentation

### `padCenter(str, width, [char])`

Pads a string to center it within a given width using a specified character.

#### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `str` | `string` | - | The string to pad (required) |
| `width` | `number` | - | The final width (required) |
| `char` | `string` | `' '` | The padding character (optional) |

#### Returns

- `string` - The padded and centered string

#### Throws

- `Error` - If `str` is not a valid string
- `Error` - If `width` is not a finite number
- `Error` - If `char` is not a string
- `Error` - If `char` is not a single character

## Edge Cases

- If the string length is greater than or equal to the width, the original string is returned unchanged
- When padding is odd, the extra character is added to the end

## License

[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/CC_BY-SA_icon.svg/320px-CC_BY-SA_icon.svg.png" width="25%"/>](https://creativecommons.org/licenses/by-sa/4.0/)

## Contact

Developed by **Quentin Lamamy**.

- **Email**: [contact@quentin-lamamy.fr](mailto:contact@quentin-lamamy.fr)
- **GitHub**: [github.com/quentin-lamamy](https://github.com/quentin-lamamy)
- **Cafeine Github**: [github.com/Cafeine-Software](https://github.com/Cafeine-Software)