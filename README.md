# Type17NodeJS

**_ dotenv - https://www.npmjs.com/package/dotenv _**
**_ nodemon - https://www.npmjs.com/package/nodemon _**
**_ eslint - https://www.npmjs.com/package/eslint _**

> npm i dotenv
> npm i nodemon --save-dev
> npx eslint --init

require("dotenv").config()

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is running on port ${port}`))

** scripts: {
"start": "node app.js",
"dev": "nodemon app.js
}
**
**{
"singleQuote": true,
"arrowParens": "always",
"trailingComma": "all"
}**
