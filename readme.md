BACKEND LEAGUE CHALLENGE CSV MATRIX 
===========
League csv-matrix - This is the solution for league backend challenge
---------------
Live API BaseUrl: https://csvmatrix.herokuapp.com/

## Installation
```
- Open terminal
- install npm ( >= version 6)
- install node js (>= version 14)
- confirm installation of node with this commands(node -v and npm -v)
- install git on local machine
- clone project using this command git clone https://github.com/sandysci/MatrixLeague.git
- or 
- clone project using this command git clone git@github.com:sandysci/MatrixLeague.git
- pull from main branch or master branch 
- npm install
- npm run dev 
- npm run test // to run the test cases 

```


### CSV Matrix Echo  
- To print csv matrix echo
- Test command below with terminal 
- Note: this must be a valid path to the csv file in your machine e.g @/Users/Sandy/Downloads/matrix.csv
- http://localhost:8080/echo is the endpoint in your local port and server.
- You can use this url to test live https://csvmatrix.herokuapp.com/echo instead of using your local url
```javascript
curl -i -X POST -H "Content-Type: multipart/form-data" -F "file=@/Users/Sandy/Downloads/matrix.csv" http://localhost:8080/echo

Output = "1,2,3\n4,5,6\n7,8,9"
```
### CSV Matrix Invert  
- To print csv matrix invert
- Test command below with terminal 
- Note: this must be a valid path to the csv file in your machine e.g @/Users/Sandy/Downloads/matrix.csv
- http://localhost:8080/invert is the endpoint in your local port and server.
- You can use this url to test live https://csvmatrix.herokuapp.com/echo instead of using your local url
```javascript
curl -i -X POST -H "Content-Type: multipart/form-data" -F "file=@/Users/Sandy/Downloads/matrix.csv" http://localhost:8080/invert

Output = "1,4,7\n2,5,8\n3,6,9\n"
```

### CSV Matrix flatten  
- To print csv matrix flatten
- Test command below with terminal 
- Note: this must be a valid path to the csv file in your machine e.g @/Users/Sandy/Downloads/matrix.csv
- http://localhost:8080/flatten is the endpoint in your local port and server.
- You can use this url to test live https://csvmatrix.herokuapp.com/echo instead of using your local url
```javascript
curl -i -X POST -H "Content-Type: multipart/form-data" -F "file=@/Users/Sandy/Downloads/matrix.csv" http://localhost:8080/flatten

Output = "1,2,3,4,5,6,7,8,9"
```

### CSV Matrix Sum  
- To print csv matrix Sum
- Test command below with terminal 
- Note: this must be a valid path to the csv file in your machine e.g @/Users/Sandy/Downloads/matrix.csv
- http://localhost:8080/sum is the endpoint in your local port and server.
- You can use this url to test live https://csvmatrix.herokuapp.com/echo instead of using your local url
```javascript
curl -i -X POST -H "Content-Type: multipart/form-data" -F "file=@/Users/Sandy/Downloads/matrix.csv" http://localhost:8080/sum

Output = "45"
```

### CSV Matrix Multiply  
- To print csv matrix multiply
- Test command below with terminal 
- Note: this must be a valid path to the csv file in your machine e.g @/Users/Sandy/Downloads/matrix.csv
- http://localhost:8080/multiply is the endpoint in your local port and server.
- You can use this url to test live https://csvmatrix.herokuapp.com/echo instead of using your local url
```javascript
curl -i -X POST -H "Content-Type: multipart/form-data" -F "file=@/Users/Sandy/Downloads/matrix.csv" http://localhost:8080/multiply

Output = "362880"
```

### Tests
#### Cli
```bash
npm install
npm run test
```

#### Contributors

- [Repository](https://github.com/sandysci/MatrixLeague.git)

- [Ezeibe Sandra Chioma Profile](https://queenofcodes.herokuapp.com)

- [API BASEURL LIVE](https://csvmatrix.herokuapp.com/)
