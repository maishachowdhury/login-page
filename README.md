# Login Page

This is a simple login page built with Next.js and Bootstrap. It allows users to log in by entering a username and password, which are checked against the hardcoded values "username" and "password" in the backend API

## MVP Backend 
- [x] Created endpoint /login
- [x] Endpoint accecpts POST request 
- [x] Authenticates with hard coded values for username and password 

## MVP Frontend 
- [x] Consumes API 
- [x] Created simple login form using CSS and bootstrap 

## Additional 
Added tests for API. But no time to investigate bug (TypeError: Cannot destructure property 'username' of 'req.body' as it is undefined.)

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/login-page.git
```
2. Install the dependencies:

```
npm install

```
3. Run the development server:

```
npm run dev
```

4. Open your browser and navigate to http://localhost:3000 to view the login page.

## Usage

To use the login page, enter "username" and "password" in the respective input fields and click the "Log in" button. If the credentials are correct, a success message will be displayed. If the credentials are incorrect, an error message will be displayed.

## Testing

This project includes tests for the backend API. To run the tests, use the following command

```
npm run test
```

## Technologies Used
* Next.js
* Bootstrap
* Jest

## Contributing

1. There are 2 main branches `main` & `dev`
2. When working on a ticket branch off of `dev` and raise a PR.
    1. If you are working on a Ticket make sure you include the number in your PR name.
    2. You can merge your PR after at least one approval.
    3. Make sure you increment the version as well in case there are code changes.
3. Your branch will be deleted automatically.

## Publish a new version
1. Create a release branch from dev
2. Raise a PR against main from release
3. Merge your branch and that automatically publishes a new version.

## Note
Tailwind and PostCSS not used. Configured with NextJS intially as I thought I would use Tailwind componenets. However Bootstrap provided free and quicker implementation to build an MVP. No time to remove Tailwind coniguration and dependencies. 

## Acknowledgements
* https://www.makeareadme.com
* https://nextjs.org
