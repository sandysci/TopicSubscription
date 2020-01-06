tm-timestamp
===========
tm-timestamp - This is a utility package to get TimeStamp for datetime passed

## Installation
```json
"dependencies": {
  "tm-timestamp": "1.0.0" // see the "releases" section
}
```
```npm install tm-timestamp```
## Requirements
```javascript
const utils = require('tm-timestamp');
```

### TimeStamp Getter for Now 
- To get a timestamp now
```javascript
let datetime = timestamp.getTimeStampNow();
console.log(datetime); //1578312236075
```

### TimeStamp Getter for Now 
- To get a timestamp from a datetime
```javascript
let datetime = "2020-02-3:1:30:10";
datetime = timestamp.getTimeStampNow(datetime);
console.log(datetime); //1580526090010
```


### Tests
#### Cli
```bash
npm install
npm test
```

#### Contributors

- [Ezeibe Sandra Chioma](https://gitlab.com/chiomatm30)
