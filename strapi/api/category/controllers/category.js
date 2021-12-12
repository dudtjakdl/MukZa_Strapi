const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

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
  async findOne(ctx) {
    const { name } = ctx.params;

    const entity = await strapi.services.category.findOne({ name });
    return sanitizeEntity(entity, { model: strapi.models.category });
  },
  async update(ctx) {
    const { name } = ctx.params;

    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.category.update({ name }, data, {
        files,
      });
    } else {
      entity = await strapi.services.category.update(
        { name },
        ctx.request.body
      );
    }

    return sanitizeEntity(entity, { model: strapi.models.category });
  },
};
