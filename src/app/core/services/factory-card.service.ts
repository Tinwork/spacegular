import { Injectable } from "@angular/core";
import { Launch } from 'src/app/models/launch';
import { CapsuleInfo } from 'src/app/shared/models/CapsuleInfo';
import { TinworkCard } from 'src/app/models/tinwork-card';
import { RocketsInfo } from "../../shared/models/RocketsInfo";
import { LaunchpadInfo } from "../../shared/models/LaunchpadInfo";
import { CapsuleDetailOption } from "../../shared/models/capsule_detail_option";
import { CapsuleDetail } from "../../shared/models/CapsDetails";

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

/**
 * Rocket Factory
 * 
 * @param {Array<RocketsInfo>} data
 * @param {Array<any>} actions
 * @return {Array<TinworkCard>}
 */
function rocketFactory (data: Array<RocketsInfo>, actions: Array<any>) : Array<TinworkCard> {
  return data.map((data, idx) => {
    return {
      title: data.name,
      subtitle: `Status: ${data.active ? 'active' : 'no'}`,
      image: data.image,
      content: data.description,
      actions: actions[idx] === undefined ? null : [actions[idx]],
      type: actions[idx] === undefined ? null : actions[idx].type,
    };
  });
}

/**
 * Caps Factory
 * 
 * @param {Array<CapsuleDetail>} data
 * @return {Array<TinworkCard>}
 */
function capsFactory(data: Array<CapsuleDetail>) : Array<TinworkCard> {
  return data.map(data => {
    return {
      title: data.capsule_serial,
      subtitle: `Status: ${data.status}`,
      content: `
        launch: ${data.original_launch},
        landing: ${data.landings},
        details: ${data.details}
      `
    };
  });
}

/**
 * Launchpad Factory
 * 
 * @param {Array<LaunchpadInfo>} data
 * @return {Array<TinworkCard>}
 */
function launchpadFactory(data: Array<LaunchpadInfo>) : Array<TinworkCard> {
  return data.map(data => {
    return {
      title: data.full_name,
      subtitle: `Status: ${data.status}`,
      content: data.details
    }
  });  
}

@Injectable({
  providedIn: 'root'
})
export class FactoryCard {
  normalize(type: String, data: Array<any>, actions: Array<any> = []) : Array<TinworkCard> {
    switch (type) {
      case 'launch':
        return launchFactory(data)
      case 'capsule':
        return capsuleFactory(data)
      case 'launchpad':
        return launchpadFactory(data)
      case 'rocket':
        return rocketFactory(data, actions)
      case 'caps':
        return capsFactory(data)
      default:
        throw new Error('No correct type defined')
    }
  }
}