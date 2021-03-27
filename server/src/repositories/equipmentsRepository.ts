import { promisePool } from '../db'
import { EquipmentRequest } from '../models/Equipment';

export class EquipmentsRepository {
  public createEquipment = async (equipment: EquipmentRequest): Promise<void> => {
    const { id, title, description, type, equipmentType, imageName, stock } = equipment;
    await promisePool.query(
      'INSERT INTO equipments (id, title, description, type, equipmentType, imageName, stock) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [id, title, description, type, equipmentType, imageName, stock])
      .then(() => console.log(`Added new equipment to database!`))
      .catch(err => console.error(err));
  }
}
