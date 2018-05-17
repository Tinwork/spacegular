import { Injectable } from "@angular/core";
import { Launch } from 'src/app/models/launch';
import { CapsuleInfo } from 'src/app/shared/models/CapsuleInfo';
import { TinworkCard } from 'src/app/models/tinwork-card';

function launchFactory (data: Array<Launch>) : Array<TinworkCard> {
  return data.map(object => {
    return {
      title: `${object.mission_name} - ${object.flight_number}`,
      subtitle: object.launch_year,
      content: object.details,
      image: object.links.mission_patch
    }
  })
}

/**
 * Capsule Factory
 * 
 * @param {Array<CapsuleInfo>} data
 * @param {Array<any>} img
 * @return {Array<TinworkCard>} 
 */
function capsuleFactory (data: Array<CapsuleInfo>) : Array<TinworkCard> {
  return data.map(data => {
    return {
      title: `Capsule: ${data.name}`,
      subtitle: `Status: ${data.active ? ': yes' : ': no'}`,
      image: data.image,
      content: `
        - Crew capacity: ${data.crew_capacity}
        - Orbit duration: ${data.orbit_duration_yr}
      `
    }
  });
}

@Injectable({
  providedIn: 'root'
})
export class FactoryCard {
  normalize(type: String, data: Array<any>) : Array<TinworkCard> {
    switch (type) {
      case 'launch':
        return launchFactory(data)
      case 'capsule':
        return capsuleFactory(data)
      default:
        throw new Error('No correct type defined')
    }
  }
}