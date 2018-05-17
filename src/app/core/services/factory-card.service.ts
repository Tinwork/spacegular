import { Injectable } from "@angular/core";
import { Launch } from 'src/app/models/launch';
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

@Injectable({
  providedIn: 'root'
})

export class FactoryCard {
  normalize(type: String, data: Array<any>) : Array<TinworkCard> {
    switch (type) {
      case 'launch':
        return launchFactory(data)
      default:
        throw new Error('No correct type defined')
    }
  }
}