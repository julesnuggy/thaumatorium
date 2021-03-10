import React, { useCallback, useEffect, useState } from "react";

import Page from '../components/Page/Page';
import { Product } from "../models/Product";
import { User } from "../models/User";
import { productApis, userApis } from "../services/servatorium";
import { useRequestState } from "../utils/hooksUtils";
import { NewProductForm } from "../components/Forms/NewProductForm";
import { NewUserForm } from "../components/Forms/NewUserForm";

const useProductsRequests = () => {
  const callCreateProduct = useCallback((product: Product) =>  productApis.createProduct(product), []);
  const { loading, data, error } = useRequestState(callCreateProduct)

  return {
    callCreateProduct,
    loading,
    data,
    error
  };
}

const userUsersRequests = () => {
  const callCreateUser = useCallback((user: User) =>  userApis.createUser(user), []);
  const callGetUsers = useCallback(() => userApis.getUsers(), []);
  const callGetUserByUsername = useCallback((username: string) => userApis.getUserByUsername(username), []);
  const { loading, data, error } = useRequestState(callCreateUser)

  return {
    callCreateUser,
    callGetUsers,
    callGetUserByUsername,
    loading,
    data,
    error
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
  const [users, setUsers] = useState<User[]>([]);
  const { callCreateProduct } = useProductsRequests();
  const { callCreateUser, callGetUsers, callGetUserByUsername } = userUsersRequests();

  useEffect(() => {
    callGetUsers().then((res) => setUsers(res));
  }, [setUsers])

  const onSubmitUser = async (values: User) => {
    await callCreateUser(values);
  };

  const onSubmitProduct = async (values: Product) => {
    await callCreateProduct(values);
  }

  return (
    <Page title="Archmagistration">
      <NewUserForm onSubmit={onSubmitUser} />
      <UsersTable users={users}/>
      <hr />
      <NewProductForm onSubmit={onSubmitProduct} />
    </Page>
  )
}

export default Archmagistration;