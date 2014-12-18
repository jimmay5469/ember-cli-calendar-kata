import Ember from 'ember';

export default Ember.Component.extend({
  start: null,
  end: null,
  actions: {
    selectLast7: function() {
      this.setProperties({
        start: moment().subtract('days', 7).format(),
        end: moment().subtract('days', 1).format()
      });
    },
    selectLast30: function() {
      this.setProperties({
        start: moment().subtract('days', 30).format(),
        end: moment().subtract('days', 1).format()
      });
    },
    setThisWeek: function() {
      this.set('start', moment().startOf('week').format());
      this.set('end', moment().endOf('week').format());
    },
    setLastWeek: function() {
      this.set('start', moment().startOf('week').subtract('week', 1).format());
      this.set('end', moment().startOf('week').subtract('days', 1).format());
    },
    setLastMonth: function() {
      this.set('start', moment().startOf('month').subtract('month', 1).format());
      this.set('end', moment().startOf('month').subtract('days', 1).format());
    }
  }
});
