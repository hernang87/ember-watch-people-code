import DS from 'ember-data';

export default DS.Model.extend({
	'actual_start_time': DS.attr(), 
    'scheduled_start_time': DS.attr(), 
    'site': DS.attr(), 
    'title': DS.attr(), 
    'url': DS.attr(),    
    'user': DS.attr(),     
    'viewers': DS.attr()  
});
