# Type17NodeJS

## dotenv - https://www.npmjs.com/package/dotenv
## nodemon - https://www.npmjs.com/package/nodemon
## eslint - https://www.npmjs.com/package/eslint

> npm i dotenv
 > - require("dotenv").config()

 > - const port = process.env.PORT || 8080
 
 > - app.listen(port, () => console.log(`Server is running on port ${port}`))

> npm i nodemon --save-dev

> npx eslint --init

> package.json:
> 
scripts: {
"start": "node app.js",
"dev": "nodemon app.js
}

> .eslintrc.js:

 "rules": {
     "singleQuote": true,
     "arrowParens": "always",
     "trailingComma": "all"
 }
