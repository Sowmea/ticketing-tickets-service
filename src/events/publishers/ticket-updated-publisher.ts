import {
    Publisher,
    Subjects,
    TicketUpdatedEvent
  } from '@ssticketscommon/common';
  
  export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
  }
  