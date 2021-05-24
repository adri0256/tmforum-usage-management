import { Money } from './money.model';
import { ProductRef } from './productRef.model';

export interface RatedProductUsage {
    bucketValueConvertedInAmount: Money;
    isBilled: number;
    isTaxExempt: number;
    offerTariffType: string;
    ratingAmountType: string;
    ratingDate: Date;
    taxExcludedRatingAmount: Money;
    taxIncludedRatingAmount: Money;
    taxRate: number;
    usageRatingTag: string;
    productRef: ProductRef;
    baseType: string;
    schemaLocation: string;
    type: string;
}
