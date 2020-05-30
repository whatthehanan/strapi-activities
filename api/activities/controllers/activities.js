"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  updatePrice(ctx) {
    const { Discount } = ctx.request.body;

    if (!Discount) {
      ctx.send(
        {
          message: "invalid request",
        },
        400
      );
    }

    return "updating prices";
  },
};
