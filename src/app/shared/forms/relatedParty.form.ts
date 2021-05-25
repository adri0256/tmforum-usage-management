import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

export function getRelatedParty(): FormGroup {
  return new FormGroup({
    href: new FormControl('', Validators.required),
    id: new FormControl(),
    name: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    baseType: new FormControl(),
    referedType: new FormControl(),
    schemaLocation: new FormControl(),
    type: new FormControl(),
  });
}
