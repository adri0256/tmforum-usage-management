import { CharacteristicRelationship } from './characteristicRelationship.model';

export interface UsageCharacteristic {
  id: string;
  name: string;
  value: string;
  valueType: string;
  characteristicRelationship: CharacteristicRelationship;
  baseType: string;
  schemaLocation: string;
  type: string;
}
