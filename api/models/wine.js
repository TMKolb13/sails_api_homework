/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    brand: {
      type: 'string',
      required: true
    },
    variety: {
      type: 'string',
      required: true,
      lowercase: true
    },
    color: {
      type: 'string',
      required: true,
      minLength: 3,
      alpha: true
    },
    abv: {
      type: 'decimal',
      required: true,
      max: 100
    }

  }
};
