# The Tech Blog

## Description
The Tech Blog is a social blogging application where the user can post, view posts, edit posts, and comment on other posts. This project uses the MVC structure, routes, SQL and Handlebars templating.

## User Story
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Built With
  * Node.js
  * Bcrypt
  * Sequalize
  * Dotenv
  * Express
  * Express Handlebars
  * Express Session
  * MySQL2

## Installation
  1. To install this application, ``` git clone ``` this repository, or download the .zip file and extract all of the files.
  2. Ensure Node.js is installed on your system.
  3. Install all of the dependencies in the package.json file by typing ``` npm install ``` in the terminal.

## Usage
Esnure that you are in the root directory in the command terminal in order to initialize the application.
In the command terminal, enter the following command to start the application. Make sure to add a ``` .env ``` file with the following template for mysql
```
DB_NAME='tech_blog_db'
DB_USER='root'
DB_PW='(password)'
```
Then to run the application, type ``` npm start ``` into the terminal.

## Screenshot
![tech-blog-screenshot](https://user-images.githubusercontent.com/106774932/199862969-8da0efa3-9f50-45f6-8752-b46836f4ca3f.png)

## Questions
If you have any questions, please contact me at kasey_crocker@yahoo.com
