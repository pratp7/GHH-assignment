Compononet structure - 

App Container
 - Heading (Website Bulder with Preview and save button)
 - Canvas Container
 - Side Bar container/Layout (Will be reused)
 - add button Component (to add elements and add rows) - will be reused
 - multiple reusable components layout (with icon, action as props) for scaling as multiple congigurations can come in (stateless)

Data Management
 - React Context (Manage global states or states related to canvas here) 
 - In some cases, few local state is fine


 Canvas Container (Stateful with Context)
    - left side panel with list of actions (just UI)
    - Top panel to show right side panel for actions
    - rest Canvas Area 
        - Click to add Rows/Element component (Component)
    - on Click of Top panel Button - open right side bar
