import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { getMoney } from './money.form';
import { getProductRef } from './proudctRef.form';

export function getRatedProductUsageForm(): FormGroup{
    return new FormGroup({
        bucketValueConvertedInAmount: new FormControl(
            getMoney()
        ),
        isBilled: new FormControl(),
        isTaxExempt: new FormControl(),
        offerTariffType: new FormControl(),
        ratingAmountType: new FormControl(),
        ratingDate: new FormControl(),
        taxExcludedRatingAmount: new FormControl(
            getMoney()
        ),
        taxIncludedRatingAmount: new FormControl(
            getMoney()
        ),
        taxRate: new FormControl(),
        usageRatingTag: new FormControl(),
        productRef: new FormControl(
            getProductRef()
        ),
        baseType: new FormControl(),
        schemaLocation: new FormControl(),
        type: new FormControl()
    });
}
