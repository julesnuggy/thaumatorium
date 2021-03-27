import React, { useCallback, useEffect } from 'react';

import Page from '../components/Page/Page';
import { Item } from '../models/Item';
import { User } from '../models/User';
import { itemApis, userApis } from '../services/servatorium';
import { useRequestState } from '../utils/hooksUtils';
import { NewItemForm } from '../components/Forms/NewItemForm';
import { NewUserForm } from '../components/Forms/NewUserForm';

const useItemsRequests = () => {
  const callCreateItem = useCallback((item: Item) =>  itemApis.createItem(item), []);
  const { loading, data, error } = useRequestState(callCreateItem);

  return {
    callCreateItem,
    loading,
    data,
    error
  };
}

const useUsersRequests = () => {
  const callCreateUser = useCallback((user: User) =>  userApis.createUser(user), []);
  const getUsers = useCallback(() => userApis.getUsers(), []);
  const callGetUserByUsername = useCallback((username: string) => userApis.getUserByUsername(username), []);
  const { loading: createUserLoading, data: newUser, error: createUserError } = useRequestState(callCreateUser);
  const { loading: getUsersLoading, data: users, error: getUsersError, call: callGetUsers } = useRequestState(getUsers);

  useEffect(() => {
    callGetUsers();
  }, [callGetUsers])

  return {
    callCreateUser,
    callGetUsers,
    callGetUserByUsername,
    createUserLoading,
    newUser,
    createUserError,
    getUsersLoading,
    users,
    getUsersError
  };
}

type UsersTableProps = {
  users: User[];
}

const UsersTable = ({ users }: UsersTableProps) => {
  const hasUsers = users.length > 0;
  return (
    <table>
      <thead>
        <th>User ID</th>
        <th>Username</th>
      </thead>
      <tbody>
        {hasUsers && users.map((user: User) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.username}</td>
          </tr>
        ))}
        {!hasUsers && <td colSpan={2}>No Users to Display</td>}
      </tbody>
    </table>
  );
}

const Archmagistration = () => {
  const { callCreateItem } = useItemsRequests();
  const { callCreateUser, callGetUsers, users } = useUsersRequests();

  const onSubmitUser = async (values: User) => {
    await callCreateUser(values);
    await callGetUsers();
  };

  const onSubmitItem = async (values: Item) => {
    await callCreateItem(values);
  }

  return (
    <Page title="Archmagistration">
      <NewUserForm onSubmit={onSubmitUser} />
      {users && <UsersTable users={users}/>}
      <hr />
      <NewItemForm onSubmit={onSubmitItem} />
    </Page>
  )
}

export default Archmagistration;