"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async updatePrice(ctx) {
    const { Discount } = ctx.request.body;

    if (!Discount) {
      return ctx.send(
        {
          message: "invalid request",
        },
        400
      );
    }

    await strapi.services.activities.updatePrice(Discount);

    return ctx.send({
      message: "prices updated successfully",
    });
  },

  async activityCreated(ctx) {
    await strapi.services.email.send(
      "info@mallorcard.es",
      "New Activity Created",
      "a new activity was created"
    );

    ctx.send({
      message: "success",
    });
  },
};
