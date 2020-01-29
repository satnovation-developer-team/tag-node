'use strict';

const express = require('express');
const connection = require('./../../config/db.js');
const multer = require('multer');
const fs = require('fs');


const APPLICATION = "applications";


module.exports = {
	app: (req, res) => {
		const data = req.body;
		var today = new Date();
		var pVal = {
			image_upload: data.img,
			nationality : data.nationality,
			course : data.course,
			specialization : data.specialization,
			first_name : data.first_name,
			last_name : data.last_name,
			dob : data.dob,
			gender : data.gender,
			category : data.category,
			stream : data.stream,
			father_name : data.father_name,
			father_occupation : data.father_occupation,
			mother_name : data.mother_name,
			mother_occupation : data.mother_occupation,
			temporary_address : data.temporary_address,
			permanent_address : data.permanent_address,
			phone_number : data.phone_number,
			email_id : data.email_id,
			name_of_standard : data.name_of_standard,
			year_of_passing : data.year_of_passing
		};
		connection.query("INSERT INTO " + APPLICATION + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		})
	}
}