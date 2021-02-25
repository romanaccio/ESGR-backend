# Description of the ESGR-backend project

This is a simple nodejs/Express app with Typescript, that provides a backend to the ESGR-App.

It currently stores survey reports into memory.
In the future, it should store them into a database.

When lauched locally (npm start), it runs on localhost:4000.
When pushed to GitHub, an automatic build is lauched on Heroku where the "prod" version runs...
