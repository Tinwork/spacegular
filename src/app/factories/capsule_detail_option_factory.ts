import { Injectable } from '@angular/core';
import { CapsuleDetailOption } from '../models/capsule_detail_option';

@Injectable({
    providedIn: 'root'
})

export class CapsuleDetailOptionFactory {
    
    public invoke(config?: Object): CapsuleDetailOption[] {    
        return [{
            capsule_id: null,
        }];
    }

}