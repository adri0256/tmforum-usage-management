import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { getRatedProductUsageForm } from './ratedProductUsage.form';
import { getRelatedParty } from './relatedParty.form';
import { getUsageCharacteristic } from './usageCharacteristic.form';
import { getUsageSpecificationRef } from './usageSpecificationRef.form';

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
    relatedParty: new FormArray([getRelatedParty()]),
    usageCharacteristic: new FormArray([getUsageCharacteristic()]),
    usageSpecification: new FormArray([getUsageSpecificationRef()]),
  });
}
