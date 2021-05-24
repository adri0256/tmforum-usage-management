import { UsageSpecificationRef } from './usageSpecificationRef.model';
import { UsageStatusType } from '../forms/usage.form';
import { RatedProductUsage } from './ratedProductUsage.model';
import { RelatedParty } from './relatedParty.model';
import { UsageCharacteristic } from './usageChatacteristic.model';

export interface Usage {
    id: string;
    href: string;
    usageDate: Date;
    description: string;
    usageType: string;
    status: UsageStatusType;
    baseType: string;
    schemaLocation: string;
    type: string;

    ratedProductUsage?: RatedProductUsage;
    relatedParty?: RelatedParty;
    usageCharacteristic?: UsageCharacteristic;
    usageSpecification?: UsageSpecificationRef;
}
