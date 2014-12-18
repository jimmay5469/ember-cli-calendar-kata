import Ember from 'ember';

export default Ember.Component.extend({
  pauseUpdates: false,
  startDate: null,
  endDate: null,
  didInsertElement: function() {
    var _this = this;
    this.$('.calendar').dateRangePicker({
      inline: true,
      container: '.calendar',
      alwaysOpen: true
    }).bind('datepicker-change', function(evnt,obj){
      if (_this.get('pauseUpdates')) {
        return;
      }
      _this.set('pauseUpdates', true);
      _this.setProperties({ startDate: obj.date1, endDate: obj.date2 });
      _this.set('pauseUpdates', false);
    });
  },
  bindRange: function(){
    if (this.get('pauseUpdates')) {
      return;
    }
    this.set('pauseUpdates', true);
    this.$('.calendar').data('dateRangePicker').setDateRange(this.get('startDate'), this.get('endDate'));
    this.set('pauseUpdates', false);
  }.observes('startDate', 'endDate'),
  willDestroyElement: function() {
    this.$('.range-selector-calendars').data('dateRangePicker').destroy();
  }
});
