import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

export function getUsageSpecificationRef(): FormGroup {
  return new FormGroup({
    href: new FormControl(),
    id: new FormControl(),
    name: new FormControl(),
    baseType: new FormControl(),
    referedType: new FormControl(),
    schemaLocation: new FormControl(),
    type: new FormControl(),
  });
}
