"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async updatePrice(discountAmount) {
    return await strapi
      .query("activities")
      .model //get bookshelf model instance
      .query()
      .decrement("price", discountAmount);
  },
};
