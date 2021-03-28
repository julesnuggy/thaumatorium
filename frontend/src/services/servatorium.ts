import { getItems, createItem } from './itemService';
import { getEquipment, createEquipment } from './equipmentService';
import { getUsers, getUserByUsername, createUser, authenticateUser, verifySession, logout } from './userService'

export const itemApis = { getItems, createItem };
export const equipmentApis = { getEquipment, createEquipment };
export const userApis = { getUsers, getUserByUsername, createUser, authenticateUser, verifySession, logout };