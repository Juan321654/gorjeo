# Gorjeo
With this application you can post your blogs, yours ideas and feelings, and will be private for you. it will be your personal online diary, noone will see this yours posts but you.

## Deployed Site:
https://gorjeo.netlify.app

# MVP
1. Use Ruby on Rails exposing Restful JSON endpoints.
2. Use working controller actions to utilize full CRUD on articles the user creates.
3. Use proper Linting for usability for future contributors on this application.
4. The application will allow the user to edit and delete their own articles via their Home Page web page. 

# Goals
```
-  Have the backend completed by Tuesday night.
-  Have React app basics and rendering completed by Weds night. 
-  Have MVP by Thursday night.
-  Have the backend and frontend deployed Friday night or saturday
```


# Libraries and Dependencies
```
Future libraries

```

# Wireframes

https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1oRdW1Q9TCoR1VrkMzD2l4yvXoXYjaZmR%26export%3Ddownload


# Component Hierarchy
```
src
      
|__ Components/
      |__ About.jsx
      |__ Login.jsx
      |__ Register.jsx
      |__ UpdateArticle.jsx
|__ Services/
      |__ api-helper.js
      |__ apiconfig.js
      |__ auth.js
|__ Shared/
      |__ Footer.jsx
      |__ Header.jsx
      |__ App.js
|__ Pages/
      |__ Main.jsx
      |__ Create.jsx
       
   ```  

## Component Breakdown

|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Logo       | functional |   n   |   n   | _This component holds the Logo of the website application_       |
|   Footer     | functional |   y   |   n   | _This holds the copyright and portolio_                              |
|    Login      | functional |   n   |   n   | _Login Component_.                      |
|    UpdateArticle    | functional |   y   |   y   | _Holds update article functionality_      |
|    App   | functional |   y   |   y   | _Holds the base of the code including routes_  |
|    Create | functional |   y   |   y   | _Holds Create component._    |
|    Main    | functional |   n   |   n   | _This is the home page._               |
|    Register    | functional |   n   |   n   | _Registration area_               |
|    Login    | functional |   n   |   n   | _Logn area_               |
|Register      | functional |   n   |   n   | _Register Component_.                      |
|About     | functional |   n   |   n   | _About component_.                      |

# Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add header component |    M     |     3 hrs      |      hrs     |      hrs      |
| Backend           |    H     |     3 hrs      |      hrs     |      hrs      |
| Render images       |    H     |     3 hrs      |      hrs     |      hrs      |
| Create Links        |    H     |     4 hrs      |      hrs     |       hrs     |
| Develop Articles page   |    H     |     5 hrs      |     hrs     |      hrs     |
| CRUD    |    H     |     5 hrs      |      1hrs     |       hr      |
| CSS                 |    M     |     5 hrs      |      hrs     |     hr       |
|     Debugging       |    H     |     3 hrs      |      hrs     |     hrs      |
|     Deploy       |    H     |     3 hrs      |      hrs     |     hrs      |
| TOTAL               |          |     30 hrs     |     hrs     |      hrs    |



# Server (Back End)
ERD Model:

<a href='https://postimg.cc/jw7MnZ3P' target='_blank'><img src='https://i.postimg.cc/jw7MnZ3P/desktop-project5-4.png' border='0' alt='desktop-project5-4'/></a>


# Post-MVP
```
limited posts to show at the time. 

```