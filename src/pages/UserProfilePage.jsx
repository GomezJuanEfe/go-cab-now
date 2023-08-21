import React from 'react';
import UserProfile from '../components/UserProfile';
import Profile from '../components/Profile';
import FormUpdate from '../components/FormUpdate';

const UserProfilePage = () => (
  <UserProfile>
    <Profile />
    <FormUpdate />
  </UserProfile>
);

export default UserProfilePage;
