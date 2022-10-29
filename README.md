
# Chainwhiz dApp

  

## Task Lifecycle

1. Create a task by filling up the task template. The task will have an issue number.

2. Once the issue is created, On the right hand side bottom, you will see an option to create branch.

3. Copy that brnach name (usual format: `<issue-number>-<issue-title>`) and create a branch locally.

4. Once you done with the happy flow(i.e. the basic or the minimal functionality), push the code and assigne someone for QA.

5. After QA is done and is approved, it will be merged to main branch.

  

## Bug Lifecycle

1. Bug takes the topmost prioirty.

2. Once a bug is assigned, the bug should be atteneded first and will follow the same procedure as Task Lifecycle.

  

## Feature Request Lifecycle.

1. They take up the least priority as these are mostly requests from the community.

2. But based on team discussion they can be either come to follow bug lifecycle o task lifecycle.


## Folder structure
In order to begin development on the application, one needs to be familiar with how the files, folders, and elements are created.

#### VS Code extensions
ES LInt
Prettier
px to rem & rpx (cssrem)

#### A unit :
A uint  is defined by a folder with the following structure:
```
+-- componentName
|   +-- index.tsx
|   +-- componentName.module.scss
```
#### File structure
**`__pages__/`**: This folder contains the logic of each page, it can be thought of as the corresponding view of a page, it holds information such as the segments and components.
```
+-- home
|   +-- components/
|   +-- segments/
|   +-- index.tsx
|   +-- home.module.scss
```
>**`__pages__/home`** : A folder which contains code and logic specific to "home" 			  	page.
>>**`__pages__/home/components`** : This contains all the reusable components which are going to be used throughout the application.
>>**`__pages__/home/segments`** : This contains sections of a component, perhaps a component has a is divided into two sections on the left and right, each "section"   is stored in the segment folder.
>>**`__pages__/home/index.tsx`**:  This contains the base layout/logic of this page,.
>> **`__pages__/home/home.module.scss`**: This contains styling information about the index.tsx page.

**`.github/`**: contains templates for issues and tasks assignments.
**`.next/`**: default configuration file for next js.
**`.vscode/`**: contains styling and settings specific and relevant to next js.
**`components/`**: This folder contains global components which are to be reused throughout the applications, each component follows the structure of ` A unit component` defined below.
```
+-- componentName
|   +-- index.tsx
|   +-- componentName.module.scss
```
**`constants/`**: contains constants to be reused throughout the entire application.
**`data/`**: contains  data which can be used through out the application either for mocking or for rendering static components.
**`hooks/`**: contains abstracted logic in the form of hooks which can be reused throughout the entire application.
**`pages/`**: contains the several routes which exist in the applicaition in the form of pages, each file/folder under this folder represents a route on the frontend. This file should only contain an index.tsx under it, which would contain basic information about the page and probably fetch data which would be used throughout the page, taking the following format. All styling logic and components logic should be moved to the view folder.
```
import React from "react";
import Head from "next/head";
import SampleView from "__pages__/sample";

export default function Sample() {
  //perform component level transformations and pass th eprops to the sample view

  return (
    <div>
      <Head>
        <title>Chainwhiz sample</title>
        <meta name="description" content="chainwhiz sample page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <SampleView />
    </div>
  );
}

```

**`public/`**: Contains public assets like images and fonts.
**`styles/`**: Here we define global styles like variables and mixins which are going to be imported all over the application, they form the foundation of the styling layer of the application.
```
+-- componentName
|   +-- mixins/
|   +-- font.scss
|   +-- globals.scss
|   +-- variables.scss
```
**`types/`**: Contains the different types used in the application.
**`utils/`**: Contains several reusable functions.
