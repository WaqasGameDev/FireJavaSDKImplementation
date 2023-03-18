mergeInto(LibraryManager.library, {
   
	SetUserId: function(userId) {
        var userId = UTF8ToString(userId);
		
		setUserId(analytics, userId);
    }, 

	SetUserProperties: function(properties) {
        var props = JSON.parse(UTF8ToString(properties));
		
        setUserProperties(analytics, props);
    },
	
	SetAnalyticsCollectionEnabled : function(enabled){
	setAnalyticsCollectionEnabled(analytics, enabled);
	},
	
    LogEvent: function(eventName) {
        var event_name = UTF8ToString(eventName);
		
        logEvent(analytics, event_name);
    },
	
    LogEventWithParameter: function(eventName, eventParameter) {
        var event_name = Pointer_stringify(eventName);
        var event_param = JSON.parse(Pointer_stringify(eventParameter));
		
        logEvent(analytics, event_name, event_param);
    }
});