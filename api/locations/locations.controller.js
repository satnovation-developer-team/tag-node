'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const LOCATION = "location";

module.exports = {
	save_location: (req, res) => {
		const data = req.body;
		var pVal = {
			location_name : data.location_name,
			latitude : data.latitude,
			longitude : data.longitude
		};

		connection.query("INSERT INTO " + LOCATION + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		});
	},
	get_location: (req, res) => {
		connection.query("SELECT id,location_name FROM location" , function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	}
}			


