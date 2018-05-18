export interface LaunchOption {
    query_type?: string;
    flight_number?: number;
    launch_year?: string;
    launch_date_utc?: string;
    launch_date_local?: string;
    rocket_id?: number;
    rocket_name?: string;
    rocket_type?: string;
    core_serial?: string;
    cap_serial?: string;
    core_flight?: string;
    block?: number;
    core_reuse?: boolean;
    side_core1_reuse?: boolean;
    side_core2_reuse?: boolean;
    fairings_reuse?: boolean;
    capsule_reuse?: boolean;
    site_id?: string;
    site_name?: string;
    site_name_long?: string;
    payload_id?: string;
    customer?: string;
    payload_type?: string;
    orbit?: string;
    launch_success?: boolean;
    reused?: boolean;
    land_success?: boolean;
    landing_type?: string;
    landing_vehicle?: string;
}