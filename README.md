
## Technologies
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

# MAILER

This project has the intention of create a Mailer too basic when you can send emails from a user to another user.

So, you need to have an account in SendGrid. Where you have the account, you need to replace int the `.env` file the SGEY and FROM.

The SGEY is the unique key your receive from the SendGrid for your project and the FROM field is your email from you want to send the emails.

You can follow the guide provided for SendGrid: https://app.sendgrid.com/guide/integrate

For this project we need to install the next libraries: 

- npm install --save @sendgrid/mail



## Authors

- [@AnisanYT](https://github.com/AnisanYT)


## Run Locally

Clone the project

```bash
  git clone https://github.com/AnisanYT/Mailer.git
```

Go to the project directory

```bash
  cd Mailer
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node index.js
```

