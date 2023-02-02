// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "PENDING": "PENDING",
  "COMPLETED": "COMPLETED",
  "ACCEPTED": "ACCEPTED",
  "DECLINED": "DECLINED"
};

const { OrderDish, Dish, Order, Resturaunt, User } = initSchema(schema);

export {
  OrderDish,
  Dish,
  Order,
  Resturaunt,
  User,
  OrderStatus
};