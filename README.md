# tech-blog
CMS-Style Tech-Blog for Web Developers   

## User Story   

AS A developer who writes about tech   
I WANT a CMS-style blog site   
SO THAT I can publish articles, blog posts, and my thoughts and opinions   

## Acceptance Criteria    

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

# Table of Contents   
- [Description](#description)   
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Credits](#credits)  
- [License](#license)     

## Description     
This application is a tech blog in CMS-style (similar to a Wordpress site), which allows users to create accounts, view blog posts created by other users and comment on their posts. It also allows users to create their own blog posts, then update or delete them. The application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and express-session npm package for authentication.   

## Installation   
Clone the repository in GitHub, and install Node.js. MySQL2, Sequelize, Express, and dotenv are also imported and used for this application.              

# Usage    
To use this application, first open the .env file and use environment variables to store your MySQL sensitive data such as username, password, and database name.   
Next, open the integrated terminal at db level and run 'npm install' (npm i). Then use 'mysql -y root -p' and password, and run 'source schema/sql.' Exit and run 'npm run seed.'     
Last step is to run 'node server' and then open the browser and go to localhost.     

## Demo   

   

## Credits   
University of Arizona Coding Bootcamp lessons and examples, as well as mock-up.    

## License  

MIT License

Copyright (c) 2023 anistone9

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.  


