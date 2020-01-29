'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const SINGLEPAGE = "college_single_pages";
const QUESTION = "college_question";
const ARTICLE = "college_article";
const COLLEGETYPE = "college_type";
const OFFERS = "offers";
const RANK = "rank";
const SERVICECHARGES = "service_charges";
const INFORMATON = "college_information";
const COURSELIST = "course_list";
const COURSEDEMAND = "course_demand";
const REVIEW = "reviews";
const MODEOFSTUDY = "mode_of_studies";


module.exports = {
	save_colleges: (req, res) => {
		const data = req.body;
		var pVal = {
			overview : data.overview,
			eligibility_criteria : data.eligibility_criteria,
			GATE : data.GATE,
			JEEE : data.JEEE,
			entrance_exam : data.entrance_exam,
			class_room : data.class_room,
			auditorium : data.auditorium,
			category_image_upload : data.category_image_upload,
			category_name : data.category_name,
			event_image_upload : data.event_image_upload,
			event_name : data.event_name,
			event_date : data.event_date,
			event_description : data.event_description,
			scholarship : data.scholarship,
			college_title : data.college_title,
			college_description	 : data.college_description	,
			college_url	 : data.college_url	,
			college_email_id : data.college_email_id,
			college_mobile_number : data.college_mobile_number,
			college_phone_number : data.college_phone_number	,
			college_map : data.college_map
		};
		connection.query("INSERT INTO " + SINGLEPAGE + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				console.log(results.insertId)
				data.college_article.forEach(function(item) {
					console.log(item);
					var pVal1 = {
						college_sp_id :results.insertId,
						title : item.title,
						description : item.description
					};
					connection.query("INSERT INTO " + ARTICLE + " SET ?", pVal1, function(err, results,fields) {
						if (err) {
							res.status(500).json({ status: "Fail", err : err });
						}
					});
				});
				data.college_question.forEach(function(item) {
					console.log(item);
					var pVal2 = {
						question : item.question,
						answers : item.answers,
						college_sp_id :results.insertId,

					};
					connection.query("INSERT INTO " + QUESTION + " SET ?", pVal2, function(err, results,fields) {
						if (err) {
							res.status(500).json({ status: "Fail", err : err });
						}
					});
				});
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
		});

	},
	// get_collegesinglepage: (req, res) =>{
	// 	connection.query("SELECT * from college_single_pages inn")
	// },

	get_images: (req, res) => {
		connection.query("SELECT category_image_upload FROM college_single_pages", function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	},
	get_event: (req, res) => {
		connection.query("SELECT event_image_upload, event_name, event_date FROM college_single_pages", function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	},
	get_colleges: (req, res) => {
		connection.query("SELECT id from college_single_pages", function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	},
	save_collegetype: (req, res) => {
		const data = req.body;
		var pVal = {
			college_type : data.college_type
		};
		connection.query("INSERT INTO " + COLLEGETYPE + " SET ?", pVal, function(err, results, fields) {
					if (err) {
						res.status(500).json({ status: "Fail", err : err });
					} else {
						res.status(200).json({result: data, Msg: "Successfully Added" });
					}
		})
	},
	get_collegetype: (req, res) => {
		connection.query("SELECT id,college_type from college_type", function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	},
	save_offers: (req, res) => {
		const data = req.body;
		var pVal = {
			offers : data.offers
		};
		connection.query("INSERT INTO " + OFFERS + " SET ?", pVal, function(err, results, fields) {
					if (err) {
						res.status(500).json({ status: "Fail", err : err });
					} else {
						res.status(200).json({result: data, Msg: "Successfully Added" });
					}
		})
	},
	get_offers: (req, res) => {
		connection.query("SELECT id,offers FROM offers" , function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	},
	save_rank: (req, res) => {
		const data = req.body;
		var pVal = {
			rank : data.rank
		};
		connection.query("INSERT INTO " + RANK + " SET ?", pVal, function(err, results, fields) {
					if (err) {
						res.status(500).json({ status: "Fail", err : err });
					} else {
						res.status(200).json({result: data, Msg: "Successfully Added" });
					}
		})
	},
	get_rank: (req, res) => {
		connection.query("SELECT id,rank FROM rank" , function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	},
	save_servicecharges: (req, res) => {
		const data = req.body;
		var pVal = {
			service_charges : data.service_charges
		};
		connection.query("INSERT INTO " + SERVICECHARGES + " SET ?", pVal, function(err, results, fields) {
					if (err) {
						res.status(500).json({ status: "Fail", err : err });
					} else {
						res.status(200).json({result: data, Msg: "Successfully Added" });
					}
		})
	},
	save_coursedemand: (req, res) => {
		const data = req.body;
		var pVal = {
			course_demand : data.course_demand
		};
		connection.query("INSERT INTO " + COURSEDEMAND + " SET ?", pVal, function(err, results, fields) {
					if (err) {
						res.status(500).json({ status: "Fail", err : err });
					} else {
						res.status(200).json({result: data, Msg: "Successfully Added" });
					}
		})
	},
	get_coursedemand: (req, res) => {
		connection.query("SELECT id,course_demand FROM course_demand" , function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	},
	get_modeofstudy: (req, res) => {
		connection.query("SELECT id,mode_of_study_name from mode_of_studies", function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	},
	save_collegeinfo: (req, res) => {
		const data = req.body;
		var pVal = {
			image_upload : data.image_upload,
			university_name : data.university_name,
			college_name : data.college_name,
			broucher_upload : data.broucher_upload,
			college_type_id : data.college_type_id,
			locations_id : data.locations_id,
			placements_id : data.placements_id,
			accreditations_id : data.accreditations_id,
			ownerships_id : data.ownerships_id,
			approvals_id : data.approvals_id,
			offers_id : data.offers_id,
			application_charges_id : data.application_charges_id,
			service_charges_id : data.service_charges_id,
			rank_id : data.rank_id,
			featured : data.featured,
			top_colleges : data.top_colleges
		};
		connection.query("INSERT INTO " + INFORMATON + " SET ?", pVal, function(err, results, fields) {
					if (err) {
						res.status(500).json({ status: "Fail", err : err });
					} else {
						console.log(results.insertId)
						data.review_part.forEach(function(item){
							console.log(item)
							var pVal1 = {
								review_type : item.review_type,
								maximum_value : item.maximum_value,
								college_information_id : results.insertId
							};
							connection.query("INSERT INTO " + REVIEW + " SET ?", pVal1, function(err, results,fields) {
								if (err) {
									res.status(500).json({ status: "Fail", err : err });
								}
							});
						});
						data.courses.forEach(function(item){
							console.log('Inside ',item)
							var pVal2 = {
								course_year : item.course_year,
								course_id : item.course_id,
								college_information_id : results.insertId,
								admission_id :  item.admission_id,
								accreditation_id :  item.accreditation_id,
								specialization_id :  item.specialization_id,
								course_status_id :  item.course_status_id,
								course_demand_id :  item.course_demand_id,
								approvals_id :  item.approvals_id,
								rank_id : item.rank_id
							};
							connection.query("INSERT INTO " + COURSELIST + " SET ?", pVal2, function(err, results,fields) {
								if (err) {
									console.log(err)
									res.status(500).json({ status: "Fail", err : err });
								}
							});
						});
						data.mode.forEach(function(item){
							console.log(item)
							var pVal3 = {
								mode_of_study_name : item.mode_of_study_name,
								college_information_id : results.insertId
							};
							connection.query("INSERT INTO " + MODEOFSTUDY + " SET ?", pVal3, function(err, results,fields) {
								if (err) {
									res.status(500).json({ status: "Fail", err : err });
								}
							});
						});
						res.status(200).json({result: data, Msg: "Successfully Added" });
					}
		});
	}

}