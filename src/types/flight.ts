export interface Flight {
    id: number,
    callsign: number,
    flight_number: number,
    pax: number,
    cargo: number,
    route: string,
    network: string,
    currentLocation: {
        altitude: number,
        heading: number,
        latitude: string,
        longitude: string,
        groundspeed: number,
        distance_remaining: number,
        distance_flown: number,
        depature_time: string,
        estimated_arrival_time: string,
        time_flown: string
    },
    aircract: {
        registration: string,
        name: string,
        code: string,
        codename: string
    },
    depature: Airport,
    arrival: Airport,
    pilot: {
        username: string
    }
}

interface Airport {
    name: string,
    icao: string,
    iata: string,
    latitude: string,
    longitude: string
}