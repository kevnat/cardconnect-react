# CardConnect MERN App (WIP)
Example/practice for MERN implementation of CardConnect's Payment APIs.

## Dependencies
Create local payments database and an auths collection. 
seed: `server/scripts/authDB.js`

## Usage
```
npm install
cd server && npm start 
cd client && npm start
```

## Overview
1. Express server listens on port: 5000, connects to database on mongodb://localhost/payments
2. Pay page is served on port 3000 and proxies request server on 'http://localhost:5000/' - main/entry point: `client/src/setupProxy.js` + `package.json`
3. Default form values: `client/src/components/payFormTwo/payFormTwo.js`
4. Form validation is implemented through: [Formik](https://jaredpalmer.com/formik/)
5. Formik Props are displayed dynamically: [helper.js component](`client/src/components/payFormTwo/helper.js`)
6. Upon submit on Pay page, request is handled through axios to /auth endpoint on server: [/src/utils/API.js] `client/src/utils/API.js`
7. Server accepts request, combines with merchant details and authorization creds. see `/server/config/api-config` and `server/controller/authController.js`
8. Server forwards auth request to the CardPointe Gateway API 
9. Server handles auth response, and writes transaction response into payments database (_id is new primary key)
10. Server completes client's request with a promise (async)
11. Client displays (and logs) auth response as current state: [helper2.js](`client/src/components/payFormTwo/helper2.js`)
12. /report is built with [React Table](https://www.npmjs.com/package/react-table)


### Page/Component Hierarchy
http://localhost:3000/pay/
* Heading
* payformtwo (authResp as state)
    - Formik
        - calls API upon submit
        - sets response as state
        - DisplayFormikState
    - Panel
        - DisplayResponse
* Footerpage

## Server
AuthController (hits gateway)
API Config as API
DB Models as DB
AuthRouter
Server


### API Config
```
baseURL: "https://fts.cardconnect.com:6443/cardconnect/rest/",
timeout: 3200,
auth: {
        username: 'testing',
        password: 'testing123'
      },
headers: {'Content-Type': 'application/json'},
data: {merchid: '496160873888'}
```

### Methods
1. testConnect
2. auth
3. report

## To Do:
token hooks
iframe token
retref
- void/refund/inquire
orderid
- voidByOrderId
dates
- funding
methods
- apple & google pay

