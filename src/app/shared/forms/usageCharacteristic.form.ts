import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { getCharacteristicRelationship } from './characteristicRelationship.form';

export function getUsageCharacteristic(): FormGroup {
  return new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    value: new FormControl(),
    valueType: new FormControl(),
    characteristicRelationship: new FormControl(
      getCharacteristicRelationship()
    ),
    baseType: new FormControl(),
    schemaLocation: new FormControl(),
    type: new FormControl(),
  });
}
