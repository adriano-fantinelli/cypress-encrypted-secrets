# Cypress Encrypted Secrets

Created to show alternatives that we can use to avoid revealed credentials when versioning a Test Automation project. Server and UI are using Node, Test Automation is using Cypress. 

## How to run

To run the development applications we can see the README.md on application/admin-ui and application/server.

Create the cypress.env.json file with the data: 
```
{
    "username": "encrypted-secrets",
    "password": "Tdc2022!"
}
```

Install dependecies using:
```
npm i
```

To open the testing UI:
```
npx cypress open
```
