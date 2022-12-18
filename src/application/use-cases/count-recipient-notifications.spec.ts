import { makeNotification } from '@test/factory/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memories-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notification', () => {
  it('should be able to count recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
