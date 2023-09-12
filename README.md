Live Site can be accessed here: https://wghile.github.io/PS-Module2Project/

## About

This project was a deliverable for the Per Scholas Software Engineering course. Our objective was to create a web application using React and fetch data using any API of our choosing. My project uses the Ticketmaster API so users can browse for concerts by the artist's name and can filter results by city.

##Technologies
This project was built using React + Vite, JavaScript, HTMl, and CSS.

## Instructions

Users can search for a concert by inputting the artist's name in the input field then selecting the 'Search' button to see all results. Or they can also input the city if they'd like to narrow down the search. If a result exists, the user will be redirected to the results page where they can view all concerts that the artist will be performing in. Additionally, they can purchase tickets if they like, by selecting the 'Buy Ticket' button. This will open in a new tab the ticketmaster link grabbed from the API.

If there are no concerts for that particular artist or that artist in a particular city, the user will see no results.

## Further Improvements

-I'd like to add a sidebar to the results page of concert recommendations to display other concerts that match the genre of the initial search, so fans don't miss out on other performances. (in general, add more styling to Results page)
-Improve the display of performers on the homepage.. I don't like that when the back button is hidden it changes the positioning of the image and forward button. Also, I'd like to have 3 performers displayed at a time and have the buttons be used to bring 1 performer in to view and the other 2 would be half-hidden.

## Resources:

-MDN for all things
-Date sorting in the Results component: https://forum.freecodecamp.org/t/how-to-format-these-dates-and-sort/453354/2
-Using state to flip through images in Form component: https://www.shecodes.io/athena/17570-how-to-set-a-variable-as-the-source-of-an-image-in-react-js
-Button display toggle in Form component: https://www.shecodes.io/athena/9351-how-to-hide-a-button-in-react#:~:text=To%20hide%20a%20button%20in%20React%2C%20you%20can%20use%20the,class%20in%20your%20button%20element.

## Acknowledgements:

-Thank you to my instructors Tishana Trainor, Manara Ali and Kasper Kain for teaching us the foundation needed to build a React application
-Special thanks to Manara for showing me optional chaining! Without this, my application would not load the data every time because the component rendering would often happen before the data was retrieved.
