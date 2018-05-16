import { Injectable } from '@angular/core';
import { LaunchOption } from '../models/launch_option';

@Injectable({
    providedIn: 'root'
})

export class LaunchOptionFactory {
    
    public invoke(config?: Object): LaunchOption[] {    
        return [{
            flight_number: null,
            launch_year: null,
            launch_date_utc: null,
            launch_date_local: null,
            rocket_id: null,
            rocket_name: null,
            rocket_type: null,
            core_serial: null,
            cap_serial: null,
            core_flight: null,
            block: null,
            core_reuse: null,
            side_core1_reuse: null,
            side_core2_reuse: null,
            fairings_reuse: null,
            capsule_reuse: null,
            site_id: null,
            site_name: null,
            site_name_long: null,
            payload_id: null,
            customer: null,
            payload_type: null,
            orbit: null,
            launch_success: null,
            reused: null,
            land_success: null,
            landing_type: null,
            landing_vehicle: null,
        }];
    }

}