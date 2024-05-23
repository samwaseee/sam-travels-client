# SAM Travels

> ## Live Site : [https://sam-travels-a10.web.app/]

### server side repo : https://github.com/samwaseee/sam-travels-server

Welcome to the GitHub repository of SAM Travels, a travel-themed website focusing on _Europe-zones_

## Features and Characteristics

1. **Home Page**: Contains a navbar with active routes. The navbar includes the Website name, Home, All Tourists Spot, Add Tourists Spot (private/protected route), My List (private/protected route), Login, and Register.
2. **User Profile**: Conditional display based on user login status. If a user is logged in, the user image and a logout button are displayed. If not, a login button is shown.
3. **Add Tourists Spot Page**: A protected route where users can add a Tourists Spot through a form. This data is stored in the database.
4. **All Tourists Spot Page**: Displays all the tourist spots added by users to the database. Each card has a View Details button which redirects to the View Details Page.
5. **View Details Page**: A protected route that displays all the information stored in the database for a particular tourist spot.
6. **My List Page**: A protected route where users can see all the tourists spot they have added to the database.
7. **Update Page**: A protected route where users can update a Tourist Spot through a form. This data is updated in the database.
8. **Footer**: Contains website name, copyright, contact information, social media links.
9. **404 Page**: A dedicated page for not found errors.
10. **Banner**: Contains a slider with a minimum of 3 slides and meaningful information.
11. **Tourists Spots Section**: Displays at least 6 cards of tourists spot added on the database. Each card has a View Details Button which redirects to the View Details page.
12. **Countries Section**: Displays at least 6 countries' information for the selected category.
13. **Authentication**: Uses Firebase authentication for email, Google, and GitHub-based authentication. It also uses the React Context API for the auth provider.
14. **Routing**: Uses the React Router concept for routing to different pages.
15. **User Information**: Once a user is logged in, user information will show on the navbar even if he/she reloads the website.
16. **Loader**: A loader is displayed when the data is in a loading state.
17. **JSON Data**: The website uses JSON data for the Tourists Spots Section.
18. **Deployment**: The website is deployed on Firebase.

## NPM Packages Used

- React-simple-typewriter
- React Awesome reveal
- React Tooltip

## Authentication

The website uses Firebase authentication for email, Google, and GitHub-based authentication. It also uses the React Context API for the auth provider. The onAuthStateChanged method of Firebase is used to maintain user information on the navbar even after reloading the website.

## Routing

The website uses the React Router concept for routing to different pages.

## Future Enhancements

Stay tuned for future enhancements and features!
