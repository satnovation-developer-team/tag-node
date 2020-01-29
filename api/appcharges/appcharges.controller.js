'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const APPCHARGES = "application_charges";
const CHARGE = "charges";
const SERVICE = "service_charges";

module.exports = {
	charge: (req, res) => {
		const data = req.body;
		var pVal = {
			app_charges : data.app_charges
		};
		connection.query("INSERT INTO " + APPCHARGES + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	},
	get_appcharge: (req, res) => {
		connection.query("SELECT id,app_charges FROM application_charges" , function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	},
	get_servicecharge: (req, res) => {
		connection.query("SELECT id,service_charges FROM service_charges" , function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	},
	servicecharge: (req, res) => {
		const data = req.body;
		var pVal = {
			service_charges : data.service_charges
		};
		connection.query("INSERT INTO " + SERVICE + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	},
	application_charge: (req, res) => {
		const data = req.body;
		var pVal = {
			education : data.education,
			college_school_name : data.college_school_name,
			from_date : data.from_date,
			to_date : data.to_date,
			application_charges : data.application_charges,
			service_charges : data.service_charges
		};
		connection.query("INSERT INTO " + CHARGE + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	},

	get_charge: (req, res) => {
		connection.query("SELECT college_school_name, application_charges, service_charges FROM charges", function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	}
}