import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

export function getMoney(): FormGroup {
    return new FormGroup({
        unit: new FormControl(),
        value: new FormControl()
    });
}
