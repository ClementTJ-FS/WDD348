## Dev Branch -
The working branch for the application.

### Changes -
- POC
    - Created initial React boiler plate.
    - Replaced default data with app information.
    - Added API call function using axios.
    - Added select input.
    - Added output list.
    - API now calls only when a selection is made. 
    - API data maps to output list.
    - Added very basic styling.

- Checkpoint 1
    - Added page boiler plates.
    - Added component boiler plates.
    - Installed React Router.
    - Implemented routes to pages.
    - Created basic Nav component.
    - Implemented Link on nav component.
    - Created basic Header component.
    - Created basic Search input component.
    - Added search and nav to Header component.
    - Added Header to App.
    - Added basic styling.
    - Created Pill component.
    - Created Dropdown component - Basic boiler plate.
    - Created MainCard component.
    - Created MainBtn component.
    - Added cards to Main.js.
    - Main.js now renders as homepage, data passed down from App.js.
    - Buttons now open links in new tab.
    - Added Pill text from data
    - Added placeholder loading component.
    - Games and Loot pages now render proper data.
    - Added details button to MainCard
    - Wired details buttons to collect cardId(Giveaway ID) and set to a state/local storage for preservation.
    - Created API call on details page, use id to pull data.
    - Added go to giveaway button to details page.
    
- Checkpoint 2
    - Applied stlying.
    - Added bottom border accent to active nav link.
    - Changed Nav component to reduce code and added styled-components.
    - Changed headersearch to link to results page.
    - Added search functionality.
    - Finished Results page.
    - Changed from BrowserRouter to HashRouter in index.js for future deployment.
    - Removed id state.
    - Implemented URL params to get details. (Allows for page linking/preservation.)
    - Finished Details page.


