import React from 'react';

import Page from '../components/Page/Page';
import { Equipment } from '../models/Equipment';
import { Item } from '../models/Item';
import { User } from '../models/User';
import { Magic } from '../models/Magic';
import { useArchmagistrationRequests } from '../utils/archmagistrationHooks';
import { NewItemForm } from '../components/Forms/NewItemForm';
import { NewEquipmentForm } from '../components/Forms/NewEquipmentForm';
import { NewUserForm } from '../components/Forms/NewUserForm';
import { NewMagicForm } from '../components/Forms/NewMagicForm';

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
    useMagicRequests,
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
  const {
    createMagicError,
    createMagicSuccess,
    callCreateMagic,
  } = useMagicRequests();

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

  const onSubmitMagic = async (values: Magic) => {
    await callCreateMagic(values);
  }

  return (
    <Page title="Archmagistration">
      <NewUserForm onSubmit={onSubmitUser} />
      {users && <UsersTable users={users} />}
      <hr />
      <NewItemForm onSubmit={onSubmitItem} />
      <NewEquipmentForm onSubmit={onSubmitEquipment} error={createEquipmentError} success={createEquipmentSuccess} />
      <NewMagicForm onSubmit={onSubmitMagic} error={createMagicError} success={createMagicSuccess} />
    </Page>
  )
}

export default Archmagistration;