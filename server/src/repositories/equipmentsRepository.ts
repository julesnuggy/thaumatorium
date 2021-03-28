import { promisePool } from '../db'
import { EquipmentRequest, EquipmentResponse } from '../models/Equipment';

export class EquipmentsRepository {
  public getEquipment = async (): Promise<EquipmentResponse[]> => {
    const [rows] = await promisePool.query('SELECT * FROM equipments');
    return rows as EquipmentResponse[];
  }

  public createEquipment = async (equipment: EquipmentRequest): Promise<void> => {
    const { id, title, description, type, equipmentType, imageName, stock } = equipment;
    await promisePool.query(
      'INSERT INTO equipments (id, title, description, type, equipmentType, imageName, stock) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [id, title, description, type, equipmentType, imageName, stock])
      .then(() => console.log(`Added new equipment to database!`))
      .catch(err => console.error(err));
  }
}
