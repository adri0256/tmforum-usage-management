import { FormControl, FormGroup } from '@angular/forms';
import { getRatedProductUsageForm } from './ratedProductUsage.form';
import { getRelatedParty } from './relatedParty.form';
import { getUsageCharacteristic } from './usageCharacteristic.form';
import { getUsageSpecificationRef } from './usageSpecificationRef.form';

enum UsageStatusType {
    received,
    rejected,
    recycled,
    guided,
    rated,
    rerated,
    billed
}

export function getUsageForm(): FormGroup {
    return new FormGroup ({
        id: new FormControl(),
        href: new FormControl(),
        usageDate: new FormControl(),
        description: new FormControl(),
        usageType: new FormControl(),
        retedProductUsage: new FormControl(
            getRatedProductUsageForm()
        ),
        relatedParty: new FormControl(
            getRelatedParty()
        ),
        status: new FormControl(UsageStatusType),
        usageCharacteristic: new FormControl(
            getUsageCharacteristic()
        ),
        usageSpecification: new FormControl(
            getUsageSpecificationRef()
        ),
        baseType: new FormControl(),
        schemaLocation: new FormControl(),
        type: new FormControl()
    });
}
