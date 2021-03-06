import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr('number'),
  category: DS.attr(),
  condition: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  feedbacks: DS.hasMany('feedback', { async: true })
});
