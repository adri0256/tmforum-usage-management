import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

export function getRelatedParty(): FormGroup {
  return new FormGroup({
    href: new FormControl(),
    id: new FormControl(),
    name: new FormControl(),
    role: new FormControl(),
    baseType: new FormControl(),
    referedType: new FormControl(),
    schemaLocation: new FormControl(),
    type: new FormControl(),
  });
}
