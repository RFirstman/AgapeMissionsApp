# Agape Missions App

### _Note: This is a work in progress_

**Table of Contents**

[Description](#description)

[Sample Images](#sample-images)

[How to run the app locally](#running-the-app-locally)

## Description

A full stack web application created for Agape Missions, my friend's non-profit.

This application was built using Node.js/Express/MongoDB for the back end
and React.js with Bootstrap for the front end.

## Sample Images

**Home Page**

![Home Page](https://github.com/RFirstman/AgapeMissionsApp/raw/master/img/home.png "Home Page")

**Group Form (Admin Only)**

![Group Form](https://github.com/RFirstman/AgapeMissionsApp/raw/master/img/groupForm.png "Group Form")

**Job Site Form (Admin Only)**

![Job Site Form](https://github.com/RFirstman/AgapeMissionsApp/raw/master/img/jobSiteForm.png "Job Site Form")

**Group Page**

![Group Page](https://github.com/RFirstman/AgapeMissionsApp/raw/master/img/groupPage.png "Group Page")

**Job Site Page**

![Job Site Page](https://github.com/RFirstman/AgapeMissionsApp/raw/master/img/jobSitePage.png "Job Site Page")

## Running the app locally

First, ensure that [Node.js](https://nodejs.org/en/download/) is installed. 
Once this is satisfied, enter your terminal and run:

```bash
git clone https://github.com/RFirstman/AgapeMissionsApp.git
cd AgapeMissionsApp
npm install && npm install --prefix client
```

Now that you have the app's repository downloaded and required packages
are installed, two more packages need to be installed globally. Do this
by entering your terminal and running:

```bash
npm install -g nodemon concurrently
```

If the above fails, try: 

```bash
sudo npm install -g nodemon concurrently
```

Finally, the app is ready to run! This can be done by running `npm run dev`
while inside the app's root directory.