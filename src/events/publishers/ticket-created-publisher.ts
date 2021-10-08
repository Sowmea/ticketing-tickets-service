import {
  Publisher,
  Subjects,
  TicketCreatedEvent
} from '@ssticketscommon/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
