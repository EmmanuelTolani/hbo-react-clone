This is a React.js & Next.js project integrated with SASS, local storage, and movie database API. It provide a pixel-perfect match with the mockup design and allow users create a user, login, search for shows or movies based on genre. It also allows users to add movies to their watch later list and view the cast and directors of any movie.

Data for all the movies: https://api.themoviedb.org/
## How I worked on this project
* I divided the layout into several smaller user interface components.
* I worked with tasks on a Kanban board to keep the project organized.

## Available Scripts
* yarn or npm install installs all dependencies
* yarn dev or npm run dev starts the server You should be able to access the app through http://localhost:3000

# Demo 
## Create User
![Create User](create.gif)
## Login User
![](login.gif)
## Search Movies
![](search_Trim.gif)
* Search for any movie or show and it's displayed dynamically.
## Show Cast
![](castcrew.gif)
* A list of all cast and directors for each movie are displayed dynamically.
## Watch List
![](watchlist.gif)
* Add movies into your watch list, or remove them from your watch list.
## Movie List
![](movies-Trim.gif)
* All movies for any genre.
## Show List
![](shows-Trim.gif)
* All shows for any genre.
## Sign Out
![](signout.gif)



## How to navigate this project
* [Layout](../../tree/main/components/Layouts)
* [UI components with Logic and styles](../../tree/main/components/UI)
* [GlobalState to provide logic for the whole application](../../tree/main/components/HBOProvider.js)
* [Slug Url implementation](../../tree/main/pages/[mediaType])
  
## Why I built this project this way 
* I decided to create the app with Next.js because of it's routing, fast refresh, and static file serving.

## If i had more time I would change


