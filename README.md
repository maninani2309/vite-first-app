


Exports and imports in react app

1.Named exports : for a particular file , the helper functionality designed component or function or variable is assigned with default Export.

    for a file we can have as many named expoorts
    to receive the named we must use curly braces
    to receivenamed export with diff name we must use "as" keyword

2.Default exports : for a particular file , the main functionality designed component or function or variable is assigned with default Export

    for a file we can have only one default Export
    to receive the default export we can call drectly without curly braces
    to receive the default export we can use any name






Git : 
1. Version control system
2. code collab

Why Git?
1. I can see versions of code
2. I can see who written the code
3. I can collab with diff teams , organisation by elimating manual sharing

GitHub: Cloud hosting services, (Microsoft)
NPM is the part of the github

how to check git exists in my local?
Git or git --version (in the command) 
to chek whether git is in current code use --> git status
git init is used to intialize the local git inside the working directory


working directory : its a folder or files where git was intilalised(.git)

Stagging area : to control what needs to be tracked in the git : all files in the staging area will be by git (git add .)

Note : Commited files will  be moved to local git
git commit -m "components"
local git : files being tracked

git log : gives the previous information

git config --list :this command gives the information and check the current account nd server git status

git push --set-upstream origin main : for the first time

creating the new branch : git checkout -b "feati...."

swith b/w the branches : git checkout main


topics:
1. exports and imports
2. git and github
3. git commands
4. git pull requests

Tasks: 
1. repeat the class
2. what is the git conflict and when to have a conflict?
3. when to raise the PR (many commits)
4. How to switch previous version of the code
5. Github vs bitbucket vs gitlab vs aws (R&D)
6. What is the link b/w CICD and branches in git

09-08-24:

git fetch : for the first time origin to use

git pull: 


javascript: synchronous and single threaded language

Synchronous: line by line exceution in the order how we written
Every task wait for the previous task
Drawback: My browser will get frozen or unresponsive when any long task will happened in the code

Asynchronous : Concurrent exceution of a task.
1. Callbacks
2. promises
3. Async and await 


We can handle async js using callbacks , using the callbacks , there will be callback hell makes code difficult to understand and difficult to maintainence

Promises:  promise is a object which tells eventual completion or failure of a particular task in a more easy way

Producing code : where we create a code of promise

props:

Props is an object , which shares the data or information from parent to children component
Props are immutable (it cannot be change)

Attribute : 
1. Additional info to element
<img src="" alt="" width="" height="">

2. Additional info to components 

Using the props we can customize the names
Using the props we can control what needs to display in the user interface 
for the props we can give any names


Destructure:

{
    name:"mani",
    score:99
}

const{name}=data

Note : Props stands for properties

## Using the props i can reuse the components

Props are of 2 ways :

1. general prop
2. children prop

Props can any datatype or it can be the function

30-08-24:

controlled components : react have control over the input states 

Steps:

1. Take the form in react component
2. Take a states for each input in the form or single state for entire form 
3.Provide value attribute for the input , assign the state that we created
4. For the field cntrols, we have onChange attribute which accepts the function
5. With in the function we can collect input value by event.target.value

02-09-24:

Useeeffect : useEffect is a react functional hook which is used to cause side effect with in the component.

side effects : async actions - dom manipulation , event listeners, data fetching, third party subscriptions 

useEffects is replacement of 3 lifr cycles methods in class components 
1. componentdidMount
2. componentDidUpdate
3. componentWillUnmount

Syntax : useEffect(()=>{},[])

note : useeffect behaiour will depends on 2 arguments which is an array


case 1: if array is empty , useEffect will behave like componentDidMout
it will run only once in a life cycle 
useEffect(()=>{},[])

case 2: if array is filled with values , depending upon value changes useEffect will behave like a componentDidUpdate
useEffect(()=>{},[value1,value2,....])
if values were changing useEffect will re-runs

this array will call it as the dependency array

case 3: no dependency array

 useEffect(()=>{})

 if no dependency array , component will keep on re-rendering when ever state or prop changes

 it might also leads to infinite rendering of component

 case 4: If useEffect callback fnctions returns the function , with in the returned function we can preent memory leaks of the component - componentWillUnmount

useEffect(()=>{
    return()=>{
        // prevent memory leaks
    }
})

03-09-24:

React - router - dom : To provide navigatiob in react app , we don't use anchor tags intsead we have a dedicated package or library called react-router-dom.

npm i react-router-dom

Types of naviggation :
1. static navigation 
2. dynamic navigation
3. nested navigations


1. Home screen
2. About screen
3. Setting Screen
4. ContactScreen
5. product detail screen