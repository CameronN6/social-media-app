# ConnectHub

ConnectHub is a simple, responsive social media feed built as a front-end software development project. Users can publish short text posts and like each post once. The application is implemented with plain HTML, CSS, and JavaScript, with no framework or build step.

## Features

- Displays example posts in a community feed.
- Lets users create posts with a name and text of up to 500 characters.
- Places new posts at the top of the feed and updates the post count.
- Provides a Like button for each post. A post can be liked once per page load.
- Adapts the layout for narrower screens.

## Project Files

```text
ConnectHub/
├── index.html    # Page structure and post form
├── styles.css    # Layout, colors, and responsive styling
├── script.js     # Post rendering and interaction behavior
└── README.md     # Project documentation
```

## Installation and Setup

1. Place `index.html`, `styles.css`, and `script.js` in the same project folder.
2. Open that folder in a code editor, such as Visual Studio Code.
3. Open `index.html` in a modern web browser.

No packages, framework, server, or build command are required. The stylesheet requests DM Sans and Manrope from Google Fonts; if those fonts are unavailable, the browser uses its sans-serif fallback.

## Usage

1. Enter your name in the **Your name** field.
2. Write a post of up to 500 characters.
3. Select **Share post**. The post appears at the top of the feed without a page refresh.
4. Select **Like** on a post to increase its count by one. Selecting it again does not add another like.

The name field accepts up to 40 characters. The feed starts with two example posts, and the post count updates as posts are added.

## Data and Project Scope

Posts and likes are stored in JavaScript memory in the current page. Reloading the page restores the example posts and clears posts created during that visit and likes added during that visit. ConnectHub does not include user accounts, a server, or persistent storage; it is a client-side demonstration.