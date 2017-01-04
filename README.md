# API Basejump: Timestamp Microservice


For [Free Code Camp](http://freecodecamp.com) - [API Basejump: Timestamp Microservice](http://www.freecodecamp.com/challenges/basejump-timestamp-microservice)


### User Stories

1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.


### Usage

```
https://challenges-matheushsalves.cs50.io/November 20, 2014
```
```
https://challenges-matheushsalves.cs50.io/1416441600
```

### Sample Output

```javascript
{
"natural":"November 20th, 2014",
"unix":"1416441600"
}
```

### Live Site
[https://challenges-matheushsalves.cs50.io](https://challenges-matheushsalves.cs50.io)