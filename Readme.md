
## Live App
- [Web (Vercel)](https://takehome.vercel.app)
- [Expo Go](https://expo.io/@rmorey/prophone-takehome-pixabay)
<img width="212" alt="Screen Shot 2021-06-27 at 2 17 09 PM" src="https://user-images.githubusercontent.com/4590343/123555221-5f3c2780-d752-11eb-9bfe-8e9ab3a00194.png">

### Screenshots
![Untitled Diagram](https://user-images.githubusercontent.com/4590343/123557649-0b383f80-d760-11eb-95c1-5b716acafbe3.png)

## Planning Notes
- Expo React App (managed) https://docs.expo.io/get-started/create-a-new-app/
- Access pixabay API via fetch() https://pixabay.com/api/docs/


### Screens
- Search: screen for searching for images
  - search bar
  - list of images that can be clicked
    - click takes you to Details
- Details: screen for viewing individual image details
  - display the user that posted the image
  - display relevant tags
  - assumed: the image itself



### To-do/would-do:
- ~~Fix search bar width on mobile~~ I've decided it's a feature
- make less ugly
 
#### Done
- Get and test Pixabay API key
  - Search: https://pixabay.com/api/docs/#api_search_images    
  - Pizza: https://pixabay.com/api/?key=22259626-cf646f94d7bf37e93a1753150&q=pizza     
- Init Expo app
- Mockup search screen
- Implement Search with Dummy Data
- call fetch on pixabay and populate search list (details included)
- Fetch thumbnails for list
- add react-nav: https://reactnavigation.org/docs/hello-react-navigation
- add image to details screen
- Add more details to details screen
- Make return key launch search
- Add user profile image to details page
