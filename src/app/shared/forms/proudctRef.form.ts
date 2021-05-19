import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

export function getProductRef(): FormGroup {
  return new FormGroup({
    id: new FormControl(),
    href: new FormControl(),
    name: new FormControl(),
    baseType: new FormControl(),
    referedType: new FormControl(),
    schemaLocation: new FormControl(),
    type: new FormControl(),
  });
}
