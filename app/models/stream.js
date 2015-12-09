import DS from 'ember-data';

export default DS.Model.extend({
	actual_start_time: DS.attr(), 
    scheduled_start_time: DS.attr(), 
    site: DS.attr(), 
    title: DS.attr(), 
    url: DS.attr(),    
    user: DS.attr(),     
    viewers: DS.attr(),
    

    streamer: function() {
        let pos = this.get('url').lastIndexOf('/');
        return this.get('url').substr(pos + 1);
    }.property('url'),

    channel: function() {
    	return 'http://player.twitch.tv/?channel=' + this.get('streamer');
    }.property('url')

});
