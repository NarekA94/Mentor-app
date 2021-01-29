import React, {useEffect} from 'react';
import {CreateGroup} from '../../../components';
import {fetchGroup} from '../../../store/actions/group';
import {useDispatch, useSelector} from 'react-redux';

export const Group = () => {
  const {group} = useSelector((state) => state.group);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGroup());
  }, []);
  return <CreateGroup group={group} auth={true} />;
};
