import React  from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import  "semantic-ui-css//semantic.min.css";
// import { NavLink } from "react-router-dom";
import WelcomePage from "./WelcomePage"
import CharacterList from "./CharacterList"
import LocationsList from "./LocationsList"
import EpisodeList from "./EpisodeList"

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs
// https://react.semantic-ui.com/modules/tab/

const panes = [
        { menuItem: 'Home', render: () => <Tab.Pane><WelcomePage /></Tab.Pane> },
        { menuItem: 'Characters', render: () => <Tab.Pane><CharacterList /></Tab.Pane> },
        { menuItem: 'Locations', render: () => <Tab.Pane><LocationsList /></Tab.Pane> },
        { menuItem: 'Episodes', render: () => <Tab.Pane><EpisodeList /></Tab.Pane> },
      ]

const TabNav = () => <Tab panes={panes} />
export default TabNav
