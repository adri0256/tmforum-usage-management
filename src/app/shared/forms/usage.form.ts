import { FormArray, FormControl, FormGroup } from '@angular/forms';

export enum UsageStatusType {
  received,
  rejected,
  recycled,
  guided,
  rated,
  rerated,
  billed,
}

export function getUsageForm(): FormGroup {
  return new FormGroup({
    id: new FormControl(),
    href: new FormControl(),
    usageDate: new FormControl(),
    description: new FormControl(),
    usageType: new FormControl(),
    status: new FormControl(),
    baseType: new FormControl(),
    schemaLocation: new FormControl(),
    type: new FormControl(),

    ratedProductUsage: new FormArray([]),
    relatedParty: new FormArray([]),
    usageCharacteristic: new FormArray([]),
    usageSpecification: new FormArray([]),
  });
}
