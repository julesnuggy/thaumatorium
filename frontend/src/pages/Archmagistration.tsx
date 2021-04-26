import React from 'react';

import Page from '../components/Page/Page';
import { Item } from '../models/Item';
import { User } from '../models/User';
import { useArchmagistrationRequests } from '../utils/archmagistrationHooks';
import { NewItemForm } from '../components/Forms/NewItemForm';
import { NewEquipmentForm } from '../components/Forms/NewEquipmentForm';
import { NewUserForm } from '../components/Forms/NewUserForm';
import { Equipment } from '../models/Equipment';

type UsersTableProps = {
  users: User[];
}

const UsersTable = ({ users }: UsersTableProps): React.FC => {
  const hasUsers = users.length > 0;
  return (
    <table>
      <thead>
        <th>User ID</th>
        <th>Username</th>
      </thead>
      <tbody>
        {hasUsers && users.map((user: User) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
          </tr>
        ))}
        {!hasUsers && <td colSpan={2}>No Users to Display</td>}
      </tbody>
    </table>
  );
}

const Archmagistration = (): React.FC => {
  const {
    useEquipmentRequests,
    useItemsRequests,
    useUsersRequests,
  } = useArchmagistrationRequests();
  const { callCreateItem } = useItemsRequests();
  const {
    callCreateEquipment,
    createEquipmentError,
    createEquipmentSuccess,
  } = useEquipmentRequests();
  const {
    callCreateUser,
    callGetUsers,
    users,
  } = useUsersRequests();

  const onSubmitUser = async (values: User) => {
    await callCreateUser(values);
    await callGetUsers();
  };

  const onSubmitItem = async (values: Item) => {
    await callCreateItem(values);
  }

  const onSubmitEquipment = async (values: Equipment) => {
    await callCreateEquipment(values);
  }

  return (
    <Page title="Archmagistration">
      <NewUserForm onSubmit={onSubmitUser} />
      {users && <UsersTable users={users} />}
      <hr />
      <NewItemForm onSubmit={onSubmitItem} />
      <NewEquipmentForm onSubmit={onSubmitEquipment} error={createEquipmentError} success={createEquipmentSuccess} />
    </Page>
  )
}

export default Archmagistration;