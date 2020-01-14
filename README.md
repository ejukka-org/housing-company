# This is project for housing company

#### Prerequisite 

 - Yarn 
 - Google maps API key
 - Firebase API Key

### environment setup
- yarn install
- create .env-file on the root of the project and place Google API KEY there

- REACT_APP_GOOGLE_MAPS_KEY=this_is_my_seacred_api_key

##### Configure also following firebase ids to your .evn file:
- REACT_APP_API_KEY=apikey,
- REACT_APP_AUTH_DOMAIL=test-domain,
- REACT_APP_DATABSE_URL=test,
- REACT_APP_PROJECT_ID=test,
- REACT_APP_STORAGE_BUCKET=test,
- REACT_APP_MESSAGGIGN_SENDER_ID=test,
- REACT_APP_APP_ID=test


##### Configure also following texts to your .evn file:
- REACT_APP_APP_headerText='Housing company name'
- REACT_APP_APP_headerTextAdmin='ADMIN - Housing company name- ADMIN'

- REACT_APP_APP_link1Text='First link'
- REACT_APP_APP_link1='https://duckduckgo.com/'
- REACT_APP_APP_link2Text='Second link'
- REACT_APP_APP_link2='https://duckduckgo.com/'
- REACT_APP_APP_link3Text='Third link'
- REACT_APP_APP_link3='https://duckduckgo.com/'
- REACT_APP_APP_link4Text='Fourth link'
- REACT_APP_APP_link4='https://duckduckgo.com/'
- REACT_APP_APP_link5Text='Fifth link'
- REACT_APP_APP_link5='https://duckduckgo.com/'
- REACT_APP_APP_link6Text='Six link'
- REACT_APP_APP_link6='https://duckduckgo.com/'
- REACT_APP_MENU_TITLE1='Test title1'
- REACT_APP_MENU_TITLE1_LINK=''
- REACT_APP_MENU_TITLE2='Test title 2'
- REACT_APP_MENU_TITLE2_LINK=''
- REACT_APP_LATITUDE='90.3624643'
- REACT_APP_LONGITUDE='90.3637589'
- REACT_APP_APARTMENTS_IMG1=''
- REACT_APP_APARTMENTS_IMG1_ALT=''
- REACT_APP_APARTMENTS_IMG1_TEXT=''
- REACT_APP_APARTMENTS_IMG2=''
- REACT_APP_APARTMENTS_IMG2_ALT=''
- REACT_APP_APARTMENTS_IMG2_TEXT=''
- REACT_APP_APARTMENTS_IMG3=''
- REACT_APP_APARTMENTS_IMG3_ALT=''
- REACT_APP_APARTMENTS_IMG3_TEXT=''
- REACT_APP_ABOUT_COLUMN1_HEADER_TEXT='Osoite'
- REACT_APP_ABOUT_COLUMN2_HEADER_TEXT='Rakennusvuosi'
- REACT_APP_ABOUT_COLUMN3_HEADER_TEXT='Y-tunnus'
- REACT_APP_ABOUT_COLUMN1_HEADER_TEXT2='testitie 1'
- REACT_APP_ABOUT_COLUMN2_HEADER_TEXT2='2020'
- REACT_APP_ABOUT_COLUMN3_HEADER_TEXT2='12331-12'

- REACT_APP_ADMIN_COLUMN1_HEADER_TEXT='admin text'
- REACT_APP_ADMIN_COLUMN2_HEADER_TEXT='admin text'
- REACT_APP_ADMIN_COLUMN3_HEADER_TEXT='admin text'
- REACT_APP_ADMIN_COLUMN1_HEADER_TEXT2='admin text'
- REACT_APP_ADMIN_COLUMN2_HEADER_TEXT2='Jadmin text'
- REACT_APP_ADMIN_COLUMN3_HEADER_TEXT2='admin text'

- REACT_APP_ADMIN_LIST1='admin link'
- REACT_APP_ADMIN_LIST1_TEXT='admin text'

## Create following script.js file to your public folder

````
let script = document.createElement("script");
script.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_OWN_GOOGLE_API_KEY";
script.type = "text/javascript";
document.head.appendChild(script);`
````
### start project
yarn start
