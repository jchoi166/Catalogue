# Catalogue

*insert web url here*


Do you, like many others, have aspirations of becoming an avid reader, following the footsteps of many successful business figures, CEO's, and inspirational leaders? Do you also horde tens, maybe hundreds, of book titles that would cumulatively transform you into an intellectual Giga-Chad... only to read none of them at all? 

Then Catalogue is the perfect app for you!

Catalogue is a responsive, full-stack application designed to help users discover new books and keep a list of any books they would like to read in the future. 

Catalogue is built with React Hooks for the frontend, Redux for state management, and uses Firebase's REST api for database calls and user authentication.

## Features

### Explore
*insert image here*
* Displays four different articles that users can follow to view news on newly featured books. 
* Utilizes the NYT Books API to gather article information.

### Search
*insert image here*
* Users can search for new books by title, by typing in the search bar. 
* Displays a list of results that also give the user the option find a copy of book for purchase, or "bookmark" a book to their saved page *only* if they are logged in. 
* Clicking on the book title or image will also lead users to a different webpage that provides additional information on the book, i.e. publication info, reviews, etc. 
* Utilized the Google Books API to gather book information.

### Save 
*insert image here*
* Generates a grid of the users saved books and a button for each item to easily remove it from the list.
* Clicking on a book will open a modal that provides a brief description of the book and options to remove it from the list, view additional info, or find a copy. 

## Code Highlights

### Login Persistence
After a user logs in, the auth token and its expiration date is stored in local storage. Upon page reload, the the application check the expiration date value and calculates how much time is left before the token expires. If the remaining time is over a minute, the user stays logged in, otherwise the user is logged out. 

*insert image here*

### Conditional Rendering Based on Login Status
Depending on the user's login status, different pages will display different components. For example, the saved page will display an "Empty" component prompting the user to log in to view their saved items. Additionaly, if the user has not yet saved any books, the same "Empty" component will display with a different prompt. 

*insert image here*

## Future additions
My main focus for this project was to familiarize myself with user authentication and redux, and for that reason, there are many features that I did not include for this first iteration of the app. I hope to include these additions for future versions of the website. 

* Implement a carousel on the Explore page that displays different "bestseller" books within the previous week/month
* Add additional search parameters the user can search books with, i.e. by author/publisher
* Cleaner error handing/display for incorrect user logins/creations. 

## Additional notes
I would consider Catalouge a "pseudo" full-stack project, because while it is able to perform basic CRUD actions, there are some limitations it faces because I have not yet learned how to implement a custom backend for my projects. One of these limations are exposed API keys as I was unable to create a server that could read them from a .env file upon runtime. I realize this is a potential security risk for future projects, however for this particular app, I allowed the exposure because I'm not too concerned about keeping my NYT key secure, and my Firebase key only identifies my database on Firebase.
