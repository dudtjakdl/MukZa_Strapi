const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Delete a record.
   *
   * @return {Object}
   */

  async delete(ctx) {
    const { name } = ctx.params;

    const entity = await strapi.services.category.delete({ name });
    return sanitizeEntity(entity, { model: strapi.models.category });
  },
};
