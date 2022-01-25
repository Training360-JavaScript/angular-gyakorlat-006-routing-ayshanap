import { Injectable } from '@angular/core';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventList: Event[] = [
    {
      name: 'Christmas party',
      date: '25 December',
      time: '10am',
      location: {address: 'Grandmere 202', city: 'Paris', country: 'France'}
    },
    {
      name: 'Lentil Party',
      date: '1 January',
      time: '19pm',
      location: {address: 'Francesco 101', city: 'Rome', country: 'Italy'}
    },
    {
      name: 'Banana Party',
      date: '20 March',
      time: '16pm',
      location: {address: 'Banana 303', city: 'London', country: 'England'}
    },
  ];

  getAll() : Event[] {
    return this.eventList;
  }

  constructor() { }
}
