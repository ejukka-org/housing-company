# housing company

this is demo project for housing company

## Motivation
this is Demo project


![npm](https://img.shields.io/node/v/11) 


#### Prerequisite 

 - Yarn 
 - Node
 - Google maps API key
 - Firebase API Key

### environment setup
-  ```yarn install```
- ```yarn run create``
    - it will create .env-file on the root of the project 
    - place your Google API KEY on ```REACT_APP_GOOGLE_MAPS_KEY=this_is_my_seacred_api_key```


##### Configure also following firebase ids to your .evn file:
- REACT_APP_API_KEY=apikey,
- REACT_APP_AUTH_DOMAIL=test-domain,
- REACT_APP_DATABSE_URL=test,
- REACT_APP_PROJECT_ID=test,
- REACT_APP_STORAGE_BUCKET=test,
- REACT_APP_MESSAGGIGN_SENDER_ID=test,
- REACT_APP_APP_ID=test


##### Configure also following texts to your .evn file:`
[texts](fields.txt)


## Create following script.js file to your public folder

````
let script = document.createElement("script");
script.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_OWN_GOOGLE_API_KEY";
script.type = "text/javascript";
document.head.appendChild(script);`
````
### start project
yarn start
