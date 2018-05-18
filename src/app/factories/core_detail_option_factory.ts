import { Injectable } from '@angular/core';
import { CoreDetailOption } from 'src/app/models/core_detail_option';

@Injectable({
    providedIn: 'root'
})

export class CoreDetailOptionFactory {
    
    public invoke(config?: Object): CoreDetailOption[] {    
        return [{
            core_serial: null,
            block: null,
            status: null,
            original_launch: null,
            missions: null,
            rtls_attempt: null,
            rtls_landings: null,
            asds_attempt: null,
            asds_landings: null,
            water_landing: null
        }];
    }

}