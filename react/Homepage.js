import React from 'react';
import Profile from './Profile';
import FavoriteFoods from './FavoriteFoods';

export default class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteFoods: [],
      pugProfile: {},
    };
    this.setProfile = this.setProfile.bind(this);
  }

  setProfile(newProfile) {
    this.setState(newProfile);
  }

  render() {
    return (
      <div id="clubhouse-homepage">
        <Profile profile={this.state.pugProfile} />
        <FavoriteFoods foods={this.state.favoriteFoods} />
      </div>
    );
  }
}
