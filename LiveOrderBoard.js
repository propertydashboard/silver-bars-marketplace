import { isValidOrder, getSortedSummaryInformation } from './utils'

export class LiveOrderBoard {
  constructor() {
    this.orders = []
  }

  getOrders() {
    return this.orders
  }

  getSummaryInformation() {
    return getSortedSummaryInformation(this.orders)
  }

  registerOrder(order) {
    if (isValidOrder(order)) {
      this.orders.push(order)
    }
  }

  cancelOrder(order) {
    if (this.orders.indexOf(order) > -1) {
      this.orders.splice(this.orders.indexOf(order), 1);
    }
  }
}