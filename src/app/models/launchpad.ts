export interface Location {
    name: string;
    region: string;
    latitude: number;
    longitude: number;
}

export interface LaunchPad {
    id: string;
    full_name: string;
    status: string;
    location: Location;
    vehicles_launched: string[];
    details: string;
}