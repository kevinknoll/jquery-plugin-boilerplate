/*
jQuery Plugin Boilerplate:
 - change 'PLUGINNAME'
 - add necessary default options
 - add init logic
 - create additional plugin methods, as needed (following Plugin.prototype.METHODNAME convention)

Usage:
 - $('<div>').PLUGINNAME();
 - $('<div>').PLUGINNAME('METHODNAME', {
    arg1:'value1',
    arg2:'value2'
 });
*/
;(function($){
  var pluginName = 'PLUGINNAME',
      defaults = {
        /*TODO: add defaults here*/
      };

  /*plugin instance*/
  function Plugin(element, options){
    this.el = element;
    this.$el = $(element);
    this.options = $.extend({}, defaults, options);
    this.init();
  }

  /*plugin methods*/
  Plugin.prototype.init = function(){
    /*TODO: add init logic here*/
  };

  /*plugin entry point*/
  $.fn[pluginName] = function(options, args){
    /*make sure we loop thru each element to ensure they each have their own instance of the plugin*/
    return this.each(function(){
      /*grab the plugin instance from element's data*/
      var instance = $(this).data('plugin_' + pluginName);
      if (!instance) {
        /*if no instance, create one (and store it in element's data)*/
        $(this).data('plugin_' + pluginName, new Plugin(this, options));
      } else if (instance[options]){
        /*call instance's method (if it exists)*/
        instance[options].call(instance, args);
      } else {
        /*throw error if method doesn't exist*/
        $.error('Method ' +  options + ' does not exist on jQuery.' + pluginName);
      }
    });
  };
})(jQuery);