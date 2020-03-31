# Project Overview

## Project Links

- [add your github repo link]()
- [add your deployment link]()

## Project Description

My project will be utilizing the Google Maps API to coordinate rides for a group of people. It will find the location of the drivers and of the people needing a ride on a map to show which people the drivers should pick up. User can click on markers to add people to specific drivers in a list. List will be formatted in a way to be easily read and distributed. If I am feeling more ambitious, perhaps routes for drivers can be made.

## API

https://developers.google.com/maps/documentation/





```
 const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
          defaultZoom = { 13 }
        >
            <Marker position={{ lat: 40.756795, lng: -73.954298 }} />
            <Marker position={{ lat: 40.7484 , lng: -73.9857 }} />
        </GoogleMap>
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- https://res.cloudinary.com/dwbqzx4rr/image/upload/v1585322111/React_Mobile_Wireframe_ex4qka.png
- https://res.cloudinary.com/dwbqzx4rr/image/upload/v1585283741/React_Wireframe_z5vygs.png
- https://docs.google.com/drawings/d/16_N3dAdj9kRaMiriIf-DeNjyUneBz-TRA8VwM9zf00U/edit


### MVP/PostMVP - 5min

MVP List:
- [x] Find external API
- [x] Render data on page
- [x] Implement Router into React
- [x] Learn how to get marker on page after someone inputs one/many addresses
- [x] InfoBar
- [ ] Marker hover
- [x] Marker Design
- [x] Assigning passengers to drivers on Maps
- [x] Navigation bar
- [x] Form for input of addresses
- [ ] Responsive
- [ ] Make ListPage
- [x] Make HomePage
- [x] Pass information over to DriverList from Maps



PostMVP List:
- [ ] CSS touchups
- [ ] Discover driver routes for driver


## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will have the navigation bar and footer with a switch route of Map and DriverList between the nav and the footer | 
| Map | This will take in the api data from google maps and render a map. It will also place markers on map based on the addresses input from the form in the navigation bar | 
| List | This will render a list based on rides assigned to drivers from the Map component | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Marker API | H | 3hrs| 1hrs | -hrs |
| Marker from Input | H | 4hrs| 2hrs | -hrs |
| Navbar| H | 2hrs| 1hrs | -hrs |
| Form | H | 2hrs| 2hrs | -hrs |
| InfoBar | H | 2hrs| 3hrs | 4hrs |
| AssignPassengers | H | 4hrs| 6hrs | 8hrs |
| List | H | 2hrs| 3hrs | -hrs |
| Responsive| H | 4hrs| -hrs | -hrs |
| Form to API | H | 4hrs| 2hrs | -hrs |
| Marker Interative| H | 6hrs| -hrs | -hrs |
| Form to DriverList | H | 4hrs| 2hrs | -hrs |
| Form to Map| H | 4hrs| 3hrs | -hrs |
| Driver Routes | L | 4hrs| -hrs | -hrs |
| CSS Touchups | H | 2hrs| -hrs | -hrs |
| Total | H | hrs| 39hrs | -hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
