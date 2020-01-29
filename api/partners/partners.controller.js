'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const PARTNER = "partners";
const UPLOAD = "partner_upload";

module.exports = {
	save_partners: (req, res) => {
		const data = req.body;
		var pVal = {
				first_name : data.first_name,
				last_name : data.last_name,
				title : data.title,
				business_email : data.business_email,
				business_phone_number : data.business_phone_number,
				college_school_name : data.college_school_name,
				address_line : data.address_line,
				city : data.city,
				state : data.state,
				zip_code : data.zip_code,
				company_website : data.company_website,
				designation : data.designation,
				partner_type: data.partner_type,
			 	additional_info : data.additional_info,
				admin_notes : data.admin_notes,
				status : data.status
		};
		console.log(data.status)
		if (data.partner_type == "college/school") {
			connection.query("INSERT INTO " + PARTNER + " SET ?", pVal, function (err, results, fields) {
				if(err) {
					res.status(500).json({status : "Fail", Err : err})
				} else {
					data.upload.forEach(function(item){
						console.log(item)
						var pVal1 = {
							aadhar_upload : item.aadhar_upload,
							tenth_upload : item.tenth_upload,
							twelveth_upload : item.twelveth_upload,
							partner_id : results.insertId
						};
						connection.query("INSERT INTO " + UPLOAD + " SET ?", pVal1, function(err, results, fields) {
							if (err) {
								res.status(500).json({ status: "Fail", err : err });
							} 
						});
					})
					res.status(200).json({result: data, Msg: "Successfully Added"});
				}
			})
		} else {
			var pVal1 = {
				first_name : data.first_name,
				last_name : data.last_name,
				title : data.title,
				business_email : data.business_email,
				business_phone_number : data.business_phone_number,
				address : data.address,
				currently_working : data.currently_working,
				experience : data.experience,
				company_name : data.company_name,
				address_line : data.address_line,
				city : data.city,
				state : data.state,
				zip_code : data.zip_code,
				company_website : data.company_website,
				designation : data.designation,
				partner_type: data.partner_type,
				degree_name : data.degree_name,
				year_of_passing : data.year_of_passing,
			 	additional_info : data.additional_info,
				admin_notes : data.admin_notes,
				status : data.status
			};
			connection.query("INSERT INTO " + PARTNER + " SET ?", pVal1, function (err, results, fields) {
				if(err) {
					res.status(500).json({status : "Fail", Err : err})
				} else {
					data.upload.forEach(function(item){
						console.log(item)
						var pVal2 = {
							aadhar_upload : item.aadhar_upload,
							tenth_upload : item.tenth_upload,
							twelveth_upload : item.twelveth_upload,
							partner_id : results.insertId
						};
						connection.query("INSERT INTO " + UPLOAD + " SET ?", pVal2, function(err, results, fields) {
							if (err) {
								res.status(500).json({ status: "Fail", err : err });
							} 
						});
					})
					res.status(200).json({result: data, Msg: "Successfully Added"});
				}
			})
		}
	},
	get_partners: (req, res) => {
		const user_id = req.params.id;
		console.log("req.query.partner_type ", req.query.partner_type);
		if(req.query.partner_type =="college/school"){
			console.log("ee")
			connection.query("SELECT partners.id,partners.first_name,partners.last_name,partners.title,partners.business_email,partners.business_phone_number,partners.college_school_name,partners.address_line,partners.city,partners.state,partners.zip_code,partners.company_website,partners.designation,partners.partner_type,partners.additional_info,partners.admin_notes, partner_upload.id as partner_upload_id,partner_upload.aadhar_upload,partner_upload.tenth_upload,partner_upload.twelveth_upload FROM partners INNER JOIN partner_upload ON partners.id = partner_upload.partner_id where partners.id = "+ user_id, function(err, results, fields) {
				if (err) {
					res.status(500).json({ status: "Fail", err : err });
				} else {
					res.status(200).json({result: results, Msg: " Fetched Successfully" });
				}
			}) 
		}
		else {
			if(req.query.partner_type =="vendor") {
				connection.query("SELECT partners.id,partners.first_name,partners.last_name,partners.title,partners.business_email,partners.business_phone_number,partners.address,partners.currently_working,partners.experience,partners.company_name,partners.address_line,partners.city,partners.state,partners.zip_code,partners.company_website,partners.designation,partners.partner_type,partners.additional_info,partners.admin_notes, partner_upload.id as partner_upload_id,partner_upload.aadhar_upload,partner_upload.tenth_upload,partner_upload.twelveth_upload FROM partners INNER JOIN partner_upload ON partners.id = partner_upload.partner_id where partners.id = "+ user_id, function(err, results, fields) {
					if (err) {
						res.status(500).json({ status: "Fail", err : err });
					} else {
						res.status(200).json({result: results, Msg: " Fetched Successfully" });
					}
				}) 
			}
		}
	
	},
	get_partner: (req, res) => {
		connection.query("SELECT id,first_name,last_name,partner_type,company_name,city FROM partners" , function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	}
	// update_status: (req, res) => {
		
	// }
	
}
