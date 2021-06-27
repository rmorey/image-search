# prophone-takehome-pixabay
Ryan's Take-Home assessment for ProPhone using Pixabay\

Start Time: Noon on Jun 27

End Time: TBD


# Assignment
This is a take-home technical challenge meant to both test your technical abilities as well as your prioritization of features given a fixed time frame. Using [Pixabay](https://pixabay.com/api/docs/) as a datasource, you will create a mobile app with a screen for searching for images as well as another screen for viewing individual image details. You will need an API url and API key from Pixabay which you can get by following the above link.

The image search screen should include a search bar and list of images that can be clicked. Upon clicking on an image, you should be navigated to the image detail screen. The image detail screen should display the user that posted the image as well as any relevant tags.

You will have 3-4 hours to complete this challenge and we ask that you complete it all in one sitting.  Please track your time working on the challenge, even if you go over on time. Upon completion, push your code to Github (to your own account) as you will be presenting the code to Dan at a predefined time.

## Planning Notes
- Expo React App (managed) https://docs.expo.io/get-started/create-a-new-app/
- Access pixabay API via fetch() https://pixabay.com/api/docs/


### Screens
- Search: screen for searching for images
  - search bar
  - list of images that can be clicked
    - Thumbnail?     
    - click takes you to Details
- Details: screen for viewing individual image details
  - display the user that posted the image
  - display relevant tags
  - assumed: the image itself

### Todo:
- Get and test Pixabay API key
  - Search: https://pixabay.com/api/docs/#api_search_images         
- Init Expo app
- Mockup search screen
- Mockup Details screen
- Implement Search with Dummy Data
- Implement Details with Dummy Data
- call fetch on pixabay and populate search list (details included)
- fetch userImageURL

