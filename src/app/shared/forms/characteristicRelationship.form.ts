import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

export function getCharacteristicRelationship(): FormGroup {
  return new FormGroup({
    id: new FormControl(),
    href: new FormControl(),
    relationshipType: new FormControl(),
    baseType: new FormControl(),
    schemaLocation: new FormControl(),
    type: new FormControl(),
  });
}
