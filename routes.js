'use strict';
module.exports = function(app) {
	app.use('/api/v1/nationalities', require('./api/nationalities'));
	app.use('/api/v1/auths', require('./api/auths'));
	app.use('/api/v1/users', require('./api/users'));
	app.use('/api/v1/applications', require('./api/applications'));
	app.use('/api/v1/courses', require('./api/courses'));
	// app.use('/api/v1/course_sel', require('./api/courses'));
	app.use('/api/v1/colleges', require('./api/colleges'));
	app.use('/api/v1/appcharges', require('./api/appcharges'));
	app.use('/api/v1/specializations', require('./api/specializations'));
	app.use('/api/v1/roles', require('./api/roles'));
	app.use('/api/v1/partners', require('./api/partners'));
	app.use('/api/v1/profiles', require('./api/profiles'));
	app.use('/api/v1/fileuploads', require('./api/fileuploads'));
	app.use('/api/v1/terms', require('./api/terms'));
	app.use('/api/v1/informations', require('./api/informations'));
	app.use('/api/v1/locations', require('./api/locations'));
	app.use('/api/v1/course', require('./api/course'));
	app.use('/api/v1/college', require('./api/college'));
	app.use('/api/v1/specialization', require('./api/specialization'));

};