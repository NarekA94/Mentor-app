import React, {useContext} from 'react';
import {CreateGroup} from '../../../components';
import {AuthContext} from '../../../context';

export const AuthGroup = () => {
  const {user} = useContext(AuthContext);
  return <CreateGroup user={user} />;
};
