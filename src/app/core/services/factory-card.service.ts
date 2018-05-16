import { Injectable } from "@angular/core";
import { Launch } from 'src/app/models/launch';

function launchFactory (data: Array<Object>) : Array<Object> {
  return data.map(object => {
    return {
      header: `${object.mission_name} - ${object.flight_number}`,
      subtitle: object.launch_year,
      content: object.details,
      image: object.links.mission_patch
    }
  })
}

@Injectable({
  providedIn: 'root'
})

export class FactoryCard {
  normalize(type: String, data: Array<Object>) : Array<Object> {
    console.log(type)
    switch (type) {
      case 'launch':
        return launchFactory(data)
      default:
        throw new Error('No correct type defined')
    }
  }
}