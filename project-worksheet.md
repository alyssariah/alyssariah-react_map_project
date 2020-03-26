# Project Overview

## Project Links

- [add your github repo link]()
- [add your deployment link]()

## Project Description

My project will be a national parks app that accesses information from all the national parks. A user can search by name and perhaps even state if I am feeling ambitious to find their desired national park with wonderful information. The app will also contain a list of the users already visited national parks and they can add more to that list if they desire. 

## API

https://www.nps.gov/subjects/developer/api-documentation.htm

I pulled some of the api using this code in my sandbox https://codesandbox.io/s/practiceapicall-ldkdq: 
const getData = async () => {
    let url =
      "https://developer.nps.gov/api/v1/parks?q=Grand Canyon&api_key=swkeV3UVN0seL6RIBkXzn4KSN0NVXES37Ub2sYnP";
    let res = await fetch(url);
    let json = await res.json();
    console.log(json);
    let obj = json.data
    for (let i =0; i< obj.length; i++){
      if (obj[i].designation === "National Park"){
        console.log("here is my object",obj[i])
        setWeather(obj[i].directionsInfo)
      }
    }
  };
  getData();


```
{data: {} }
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes]()
- [add link to your react architecture]()


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
