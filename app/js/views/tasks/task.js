define([
  'text!templates/tasks/task.html'
], function(template) {
  var TaskView = Backbone.View.extend({
    tagName: 'li',
    className: 'controls well task row',

    template: _.template(template),

    events: {
      'click': 'open',
      'change .check-task': 'toggle'
    },

    initialize: function(options) {
      this.parentView = options.parentView;
    },

    render: function() {
      this.$el.data('taskId', this.model.get('id'));
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.find('.check-task').attr('checked', this.model.get('status') === 'completed');

      return this;
    },

    open: function(e) {
      e.preventDefault();

      if(this.parentView.activeTaskView) {
          this.parentView.activeTaskView.close();
      }
      this.$el.addClass('active');
      this.parentView.activeTaskView = this;
      this.parentView.editTask(this.model);
    },

    close: function(e) {
      this.$el.removeClass('active');
    },

    toggle: function() {
      var id = this.model.get('id')
        , $el = this.$el.find('.check-task')
        , self = this;

      this.model.set('status', $el.attr('checked') ? 'completed' : 'needsAction');
      if(this.model.get('status') === 'needsAction') {
          this.model.set('completed', null);
      }

      this.model.save(null, {
        success: function() {
          self.render();
        }
      });

      return false;
    }
  });

  return TaskView;
});