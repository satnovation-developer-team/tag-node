'use strict';

const express = require('express');
const connection = require('./../../config/db.js');
const TERMS = "terms";
const PRIVACY = "privacy_policy";

module.exports = {
	terms: (req, res) => {
		const data = req.body;
		var pVal = {
			terms_and_conditions : data.terms_and_conditions
		};
		connection.query("INSERT INTO " + TERMS + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	},
	get_terms: (req, res) => {
		connection.query("SELECT id,terms_and_conditions FROM terms" , function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	},
	privacy: (req, res) => {
		const data = req.body;
		var pVal = {
			privacy_policy : data.privacy_policy
		};
		connection.query("INSERT INTO " + PRIVACY + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	},
	get_privacy: (req, res) => {
		connection.query("SELECT id,privacy_policy FROM privacy_policy" , function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	}
}




