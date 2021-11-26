BACKEND PANGAEA CHALLENGE TOPIC SUBSCRIPTION 
===========
PANGAEA Topic-subscribers - This is the solution for topic subscribers challenge
---------------
Live API BaseUrl: (https://topicsubscription.herokuapp.com/)

## Installation
```
- Open terminal or command prompt
- install npm ( >= version 6)
- install node js (>= version 14)
- confirm installation of node and npm with this commands(node -v and npm -v)
- install git on local machine
- clone project using this command git clone https://github.com/sandysci/TopicSubscription.git
- or 
- clone project using this command git clone git@github.com:sandysci/TopicSubscription.git
- pull from main branch or master branch 
- npm install
- npm run dev 
- npm run test // to run the test cases 

```


### Subscribe Topic   
- To Subscribe to a topic
- Test using the command below in your terminal 
- Note: this must be a valid post url endpoint  e.g http://localhost:8000/test1
- You can use this url to test live (https://topicsubscription.herokuapp.com/subscribe/topic1) instead of using your local url
```javascript
Local:
curl -X POST -H "Content-Type: application/json" -d '{ "url": "http://localhost:8000/test1"}' http://localhost:8000/subscribe/topic1 
Live: 
curl -X POST -H "Content-Type: application/json" -d '{ "url": "https://topicsubscription.herokuapp.com/test1"}' https://topicsubscription.herokuapp.com/subscribe/topic1 


Output = {"url":"http://localhost:8000/test1","topic":"topic1"}
or 
Output ={"url":"https://topicsubscription.herokuapp.com/test1","topic":"topic1"}
```
### Publish Topic Message to Subscribers 
- To publish message to all subscriber of a topic
- Test command below with terminal 
- You can use this url to test live (https://topicsubscription.herokuapp.com/publish/topic1) instead of using your local url
```javascript
Local:
 curl -X POST -H "Content-Type: application/json" -d '{"message": "hello"}' http://localhost:8000/publish/topic1

Live: 
curl -X POST -H "Content-Type: application/json" -d '{"message": "hello"}' https://topicsubscription.herokuapp.com/publish/topic1

Error Output = {"error":"connect ECONNREFUSED 127.0.0.1:8000,connect ECONNREFUSED 127.0.0.1:8000"}
Success Output = {status: "success",data: "Message has been pushed to subscribers"}
```



### Tests
#### Cli
```bash
npm install
npm run test
```

#### Written by

- [Repository](https://github.com/sandysci/TopicSubscription)

- [Ezeibe Sandra Chioma Profile](https://queenofcodes.herokuapp.com)

- [API BASEURL LIVE](https://topicsubscription.herokuapp.com/)
