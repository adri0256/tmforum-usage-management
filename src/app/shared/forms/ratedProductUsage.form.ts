import { FormArray, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { getProductRef } from './proudctRef.form';

export function getRatedProductUsageForm(): FormGroup {
  return new FormGroup({
    bucketValueConvertedInAmount: new FormGroup({
      unit: new FormControl(),
      value: new FormControl(),
    }),
    isBilled: new FormControl(),
    isTaxExempt: new FormControl(),
    offerTariffType: new FormControl(),
    ratingAmountType: new FormControl(),
    ratingDate: new FormControl(),
    taxExcludedRatingAmount: new FormGroup({
      unit: new FormControl(),
      value: new FormControl(),
    }),
    taxIncludedRatingAmount: new FormGroup({
      unit: new FormControl(),
      value: new FormControl(),
    }),
    taxRate: new FormControl(),
    usageRatingTag: new FormControl(),
    productRef: new FormArray([getProductRef()]),
    baseType: new FormControl(),
    schemaLocation: new FormControl(),
    type: new FormControl(),
  });
}
