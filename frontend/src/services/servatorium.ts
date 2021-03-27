import { getItems, createItem } from './itemService';
import { createEquipment } from './equipmentService';
import { getUsers, getUserByUsername, createUser, authenticateUser, verifySession, logout } from './userService'

export const itemApis = { getItems, createItem };
export const equipmentApis = { createEquipment };
export const userApis = { getUsers, getUserByUsername, createUser, authenticateUser, verifySession, logout };