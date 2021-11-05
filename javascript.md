# JavaScript

## find the maximum odd number

```javascript
const arr = ['1', '3', '2', '4']

const res = arr
  .map((el) => parseInt(el))
  .filter((num) => num % 2)
  .reduce((max, value) => Math.max(max, value), 0)

console.log(res) // 3
```

## find the maximum number in an array of numbers

```javascript
const arr = [1, 2, 3]

const res = Math.max.apply(Math, arr) // old
const res = Math.max(...arr) // new

console.log(res) // 3
```

## find all names by given value

```javascript
const dict = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak',
  hamster: 'squeak',
}

const res = Object.entries(dict)
  .filter(([, value]) => value === 'squeak')
  .map(([key]) => key)

console.log(res) // ["mouse", "hamster"]
```

## Shuffle an Array

```
const shuffleArray = (arr) => arr.slice().sort(() => Math.random() - 0.5)
console.log(shuffleArray([1, 2, 3, 4, 5, 6]))
// Result: [6, 2, 3, 1, 5, 4]
```

## Throw a dice

```
const throwdice = () => ~~(Math.random() * 6) + 1;
// Examples
throwdice();    // Result: 4 
throwdice();    // Result: 1 
throwdice();    // Result: 6
```

## Detect Dark Mode

```
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// Result: True or False
```

## Check if Code is Running in the Browser

```
const isBrowser = typeof window === 'object' && typeof document === 'object';
// Result: True or False
```

### Get the Value of a Cookie

```
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
cookie('_ga');      
// Result: GA1.2.821239271.5181504719
cookie('lang');      
// Result: "en"
```

## Create an Array of the Past Seven Days

```
const pastSevenDays = [...Array(7).keys()].map(days => new Date(Date.now() - 86400000 * days));
console.log(pastSevenDays);
// Result: [Array with 7 Date Objects]
const comingSevenDays = [...Array(7).keys()].map(days => new Date(Date.now() + 86400000 * days));
console.log(comingSevenDays);
// Result: [Array with 7 Date Objects]
```

## Swap Two Variables

```
let a = 1
let b = 2
[a, b] = [b, a];
console.log(a)
// Result: 2
console.log(b)
// Result: 1
```

### Convert a String to a URL Slug

```
const slugify = string => string.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
// Example
slugify('Episode IV: A New Hope');    
// Result:'episode-iv-a-new-hope
```

## Generate a Random Hex Color

```
const randomHexColor = () => '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).slice(1, 6);
randomHexColor() // Result: #fec150
randomHexColor() // Result: #abba22
randomHexColor() // Result: #304060
```
