import { Injectable } from '@angular/core';
import { CapsuleDetailOption } from 'src/app/shared/models/capsule_detail_option';

@Injectable({
    providedIn: 'root'
})

export class CapsuleDetailOptionFactory {
    
    public invoke(config?: Object): CapsuleDetailOption[] {    
        return [{
            capsule_serial: null,
            capsule_id: null,
            status: null,
            original_launch: null,
            missions: null,
            landings: null,
            type: null,
            details: null,
        }];
    }

}