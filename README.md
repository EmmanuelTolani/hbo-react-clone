# How I worked on this project
* I divided the layout into several smaller User Interface components.
* I worked with tasks on a Kanban board to keep the project organized
## How to navigate this project
* [Layout](../../tree/main/src/assets/js/components)
* [Custom styling with scss](../../tree/main/src/assets/scss)
  
### Why I built this project this way 
* I wanted to create a modern looking landing page with animations. I decided to separate the layouts and the content because the layout is reusable it won't change page to page. 
* I used gsap to create smooth, eye-catching animations to reduce the bounce rate on the website. In addition, I implemented scroll trigger to ensure the animation starts only when the content is in the view.
* I used functional components for most of components because they didn't require complex logic. 
* I tested each view and different web browsers. I did this to ensure the site was responsive in all viewports and browsers.
* I minified all images in order to increase the performance. Thos resulted in a lighthouse score for performance at 100%
#### If i had more time I would change
* I would refactor all my code and clean up unused imports
* Create variables and mixins with sass to speed up future styling development.
* I would create all the links to the pages and turn the site into a fully functioning eccommerce store. 
* I would use Jest to test each component. 

##### Available Scripts
* Npm run start
* Npm run eject
* Npm run build
