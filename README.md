# API Basejump: Timestamp Microservice


For [Free Code Camp](http://freecodecamp.com) - API Basejump: Timestamp Microservice


### User Stories

1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.


### Usage

```
http://localhost:8080/November 20, 2014
```
```
http://localhost:8080/1416441600
```

### Sample Output

```javascript
{
"natural":"November 20th, 2014",
"unix":"1416441600"
}
```