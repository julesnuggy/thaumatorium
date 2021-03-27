import { promisePool } from '../db'
import { EquipmentRequest } from '../models/Equipment';

export class EquipmentsRepository {
  public createEquipment = async (equipment: EquipmentRequest): Promise<void> => {
    await promisePool.query(
      'INSERT INTO equipments (id, title, description, type, imageName, stock) VALUES (?, ?, ?, ?, ?, ?)',
      [equipment.id, equipment.title, equipment.description, equipment.type, equipment.imageName, equipment.stock])
      .then(() => console.log(`Added new equipment to database!`))
      .catch(err => console.error(err));
  }
}
