# thanhlive User Service backend REST API application.

## • Requirements

- nodeJs (version >= 10.8)
- mongodb
- git
- yarn

## • Technologies

- nodeJS
- typescript
- express
- mongoDB
- docker
- docer-compose

## • Scripts and Tasks

- `yarn build` - Build application (tsc)
- `yarn lint`  - Run verify lint
- `yarn start`   - Run application for local (via nodemon)

## • Getting Started

#### Step 1: Environment preparation

Install:

- Node.js and npm [https://nodejs.org/en/](https://nodejs.org/en/)
- MongoDB [https://docs.mongodb.com/manual/installation/](https://docs.mongodb.com/manual/installation/)
- Install global yarn `npm install -g yarn`

#### Step 2: Install dependencies

- yarn
- copy .env.example to .env and replace right environment value

## • Deploy


## • Project Structure

```
├── dist/ .......................... Compiled source files place
├── src/ ........................... Source files
│   ├── app.ts ..................... Application startpoint
│   ├── server.ts .................. Web Server point
│   ├── consts/ .................... App constants files
│   │   └── app.ts ................. All constants for application
│   │   └── error.ts ............... All errorCode and errorMessage for application
│   ├── core/ ...................... Base Core logic implementation
│   │   ├── interfaces/ ............ Interfaces for core modules
|   |   |   ├──IPagination.ts ...... Interface for paginate mongoose
|   |   |   └──IRepository.ts ...... Interface for repository core
|   |   ├── database.ts ............ Configuration for database connection
|   |   ├── httpHandler.ts ......... Handler all headers, response and error API
│   │   ├── repository.ts .......... Common query for database
│   │   ├── routes.ts .............. Dynamic smart register routing for application
│   ├── modules/ ................... Manager all modules API in application
|   |   ├── module<name>/ .......... Module folder
|   |   |   ├── route.ts ........... Configuration routing for modules API
|   |   |   ├── controller.ts ...... Main handler for API
|   |   |   ├── service.ts ......... Handler bussiness logic
|   |   |   ├── repository.ts ...... Repository for API
|   |   |   ├── schema.ts .......... Object schemes
|   |   |   ├── interface.ts ....... Manager interface for req and response API
|   |   |   └── validator.ts ....... Validator request API
│   ├── utils/ ..................... Manager all common functions
│   │   │   ├── logger.ts .......... Handle log for application
│   │   │   └── share.ts ........... Other function common
├── tsconfig.json .................. tsc compilation configurations
├── tslint.json .................... tsc lint configurations
├── .env.example ................... example environment
├── CHANGELOG.md ................... Manager changes for each version development
├── README.md ...................... Guide line develop and maintaince application
```

## • Docker

