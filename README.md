# **Currency Exchanger**

#### This application will convert currency rates, 11/20/2020

#### **By Jerrod Styrk**

## Decription
- This Application will take in an amount in whichever currency you select and converts it given the exchange rate of which ever country you've selected to convert it too. It does not take in text or negative numbers.

## Setup

 #### _Things You Need_
 * A prefered Internet Browser
 * A code Editor to view the code 

 #### _To Open Locally_

- [Click to view Github repository](https://github.com/SJerrod/Currecy-exchanger) Or simply paste the following url into your prefered browser https://github.com/SJerrod/Currecy-exchanger
- To Clone repository simply click the green Code button and copy the url.
- Using a prefered terminal use the command 'git clone paste-url-here' in which ever directory you wish.
- Open the newly cloned repo with your text editor.
- In the terminal use the command 'npm install' to install all necessary packages for this project.
- [Click to get your API_KEY](https://www.exchangerate-api.com/) or simply paste the following url in the browser https://www.exchangerate-api.com/ & create a free account to generate your own API_KEY
- create a .env at the root of the directory and type API_KEY= paste-your-key-here
- Now use the command 'npm start' to start a live server

<details>
  <summary>Note to Apple Users</summary>

    - Under package.json navigate to "scripts"
    - Navigate to "start", the & needs to be replaced with ;
    Before
    "scripts": {... "start": "npm run build & webpack-dev-server --open --mode development",
    After
    "scripts": {... "start": "npm run build; webpack-dev-server --open --mode development",
  </details>

## Specifications

<details>
  <summary>Expand Specs</summary>

| Behavior                                                        | Input     | Output    |
| --------------------------------------------------------------- | --------- | --------- |
| Will take in User input and return as is | Hello | Hello |
| It will ignore non intergers or numbers less then 0 | text | alert("Must be numbers") |
| Will take in a value input | 3 | n/a |
| Will take in a country and fetch the API for it | USA | USD |
| Will take in second country to return the exchange rate for | Australia/AUD | 1.3739 |
| Will multiply the first by the second and return the exchanged value | (USD*AUD) 3*1.3739= | 4.1217 |
| Will round amount to nearest actual value 0.00 format | 4.1217 | 4.12 |

</details>

## Bugs

* AED currency Symbol(Dirham) defaults to after the amount/ total

## For support

_jstyrk@citadel.edu_

## Technologies and tools used

<details>
  <summary>Expand Tech/tools</summary>

- Visual Studio Code
- Html
- markdown
- bootstrap
- css
- jQuery
- javaScript
- clean-webpack-plugin
- css-loader
- eslint
- eslint-loader
- html-webpack-plugin
- style-loader
- webpack
- webpack-cli
- webpack-dev-server
- popper.js
- jest
- babel
- dotenv

</details>

### License

[MIT] Copyright (c) 2020 **Jerrod Styrk**