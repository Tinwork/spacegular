export interface CoreDetail {
    core_serial: string;
    block?: any;
    status: string;
    original_launch: string;
    missions: string[];
    rtls_attempt: boolean;
    rtls_landings: number;
    asds_attempt: boolean;
    asds_landings: number;
    water_landing: boolean;
    details: string;
}