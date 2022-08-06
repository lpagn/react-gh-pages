# PT Lucio Pagni

Detailed instructions are here:

https://github.com/lpagn/react-gh-pages/blob/main/PT_Lucio_Pagni_.pdf

# Problem I

Determine if a sequence of parenthesis is correctly balanced. A sequence is correctly balanced if for every opening ( there is a closing ).

f ( '(())') = true

f ( '((') = false

`python3 PROBLEMS/problemI.py`

# Problem II

Design a function that performs the following transformation on a list.
f ( [a,b,c,d] ) = [bcd,acd,abd,abc] 

`python3 PROBLEMS/problemII.py`

# MVP

A Single Page Application developed in React was deployed in Git Hub Pages. The front end web interacts with Google Sheets using Sheet Best.

## Bootstraping

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Make sure that you have all the needed dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm run deploy`

Publishes the code in: 

https://lpagn.github.io/react-gh-pages/

### Important

To Log In use the harcoded credentials.

`username: admin`

`password: admin`

Disable Cross-Origin Restrictions in your browser so that the email can be sent. Since we do not have any
control over the backend service we disable it.

Develop >> Disable Cross-Origin Restrictions

Since I used a free tier subscription in Sheet Best there is a maximum of 100 requests, It may produce an error.

### Detailed References

I used the following material as guide.

### How to publish the app

https://github.com/gitname/react-gh-pages

### How to interact with a google spread sheet

https://www.freecodecamp.org/news/react-and-googlesheets/

https://contactmentor.com/login-form-react-js-code/
