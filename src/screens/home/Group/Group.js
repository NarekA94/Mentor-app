import React, {useEffect} from 'react';
import {useState} from 'react';
import {CreateGroup} from '../../../components';
import {httpClient} from '../../../httpClient';

export const Group = () => {
  const [group, setGroup] = useState();
  useEffect(() => {
    async function fetchGroups() {
      try {
        const res = await httpClient.get('group/get-user-group');
        console.log(res);
        setGroup(res?.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchGroups()
  }, []);
  return <CreateGroup group={group} auth={true}  />;
};
