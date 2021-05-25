import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
    href: new FormControl('', Validators.required),
    usageDate: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    usageType: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    baseType: new FormControl(),
    schemaLocation: new FormControl(),
    type: new FormControl(),

    ratedProductUsage: new FormArray([]),
    relatedParty: new FormArray([]),
    usageCharacteristic: new FormArray([]),
    usageSpecification: new FormArray([]),
  });
}
