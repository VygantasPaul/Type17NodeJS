# Type17NodeJS

## cors - (https://www.npmjs.com/package/cors)
## express - (https://www.npmjs.com/package/express)
## dotenv - (https://www.npmjs.com/package/dotenv)
## nodemon - (https://www.npmjs.com/package/nodemon)
## eslint - (https://www.npmjs.com/package/eslint)
## jsonwebtoken - (https://www.npmjs.com/package/jsonwebtoken)
## bcryptjs - (https://www.npmjs.com/package/bcryptjs)

> npm i cors
 - const cors = require('cors')
> 
> npm i express
 - const express = require("express")
> npm i dotenv
 - require("dotenv").config()

 - const port = process.env.PORT || 8080
 
 - app.listen(port, () => console.log(`Server is running on port ${port}`))

> npm i nodemon

> npx eslint --init

> npm i jsonwebtoken

> npm i bcrypt.js

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
