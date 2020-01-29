'use strict';

const express = require('express');
const connection = require('./../../config/db.js');

const ACCREDITATION = "accreditations";
const LOCATION = "locations";
const PLACEMENT = "placements";
const OWNERSHIP = "ownerships";
const COURSESTATUS = "course_statuses";
const APPROVAL = "approvals";
const COLLEGES = "colleges";
const MAPPING = "college_course_mapping";
const SINGLEPAGE = "college_single_page";
const CRITERIA = "college_criterias";
const EXAM = "college_exams";
const IMAGE = "college_facility_image";
const SCHOLARSHIP = "college_scholarships";
const QUESTION = "college_qn_ans";
const ARTICLE = "college_articles";
const EVENT = "college_events";
const GROUP = "college_gallerygrp";




module.exports = {
	save_accreditation: (req, res) => {
		const data = req.body;
		var pVal = {
			accreditation_name : data.accreditation_name
		};
		connection.query("INSERT INTO " + ACCREDITATION + " SET ?", pVal, function(err, results, fields) {
					if (err) {
						res.status(500).json({ status: "Fail", err : err });
					} else {
						res.status(200).json({result: data, Msg: "Successfully Added" });
					}
		})
	},
	get_accreditation: (req, res) => {
		connection.query("SELECT * FROM accreditations" , function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	},
	
	save_location: (req, res) => {
		const data = req.body;
		var pVal = {
			location_name : data.location_name
		};
		connection.query("INSERT INTO " + LOCATION + " SET ?", pVal, function(err, results, fields) {
					if (err) {
						res.status(500).json({ status: "Fail", err : err });
					} else {
						res.status(200).json({result: data, Msg: "Successfully Added" });
					}
		})
	},
	get_location: (req, res) => {
		connection.query("SELECT id,location_name FROM locations" , function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err});
			} else {
				res.status(200).json({result: results, Msg: "Fetched Successfully"});
			}
		})
	},
	save_placement: (req, res) => {
		const data = req.body;
		var pVal = {
			placement_name : data.placement_name
		};
		connection.query("INSERT INTO " + PLACEMENT + " SET ?", pVal, function(err, results, fields) {
					if (err) {
						res.status(500).json({ status: "Fail", err : err });
					} else {
						res.status(200).json({result: data, Msg: "Successfully Added" });
					}
		})
    },
    get_placement: (req, res) => {
    	connection.query("SELECT * FROM placements" , function(err, results, fields) {
    		if (err) {
    			res.status(500).json({ status: "Fail", err : err});
    		} else {
    			res.status(200).json({result: results, Msg: "Fetched Successfully"});
    		}
    	})
    },
	save_ownership: (req, res) => {
		const data = req.body;
		var pVal = {
			ownership_name : data.ownership_name
		};
		connection.query("INSERT INTO " + OWNERSHIP + " SET ?", pVal, function(err, results, fields) {
					if (err) {
						res.status(500).json({ status: "Fail", err : err });
					} else {
						res.status(200).json({result: data, Msg: "Successfully Added" });
					}
		})
    },
    get_ownership: (req, res) => {
    	connection.query("SELECT * FROM ownerships" , function(err, results, fields) {
    		if (err) {
    			res.status(500).json({ status: "Fail", err : err});
    		} else {
    			res.status(200).json({result: results, Msg: "Fetched Successfully"});
    		}
    	})
    },
	save_coursestatus: (req, res) => {
		const data = req.body;
		var pVal = {
			course_status_name : data.course_status_name
		};
		connection.query("INSERT INTO " + COURSESTATUS + " SET ?", pVal, function(err, results, fields) {
					if (err) {
						res.status(500).json({ status: "Fail", err : err });
					} else {
						res.status(200).json({result: data, Msg: "Successfully Added" });
					}
		})
    },
    get_coursestatus: (req, res) => {
    	connection.query("SELECT * FROM course_statuses" , function(err, results, fields) {
    		if (err) {
    			res.status(500).json({ status: "Fail", err : err});
    		} else {
    			res.status(200).json({result: results, Msg: "Fetched Successfully"});
    		}
    	})
    },
	// save_modeofstudy: (req, res) => {
	// 	const data = req.body;
	// 	var pVal = {
	// 		mode_of_study_name : data.mode_of_study_name
	// 	};
	// 	connection.query("INSERT INTO " + MODEOFSTUDY + " SET ?", pVal, function(err, results, fields) {
	// 				if (err) {
	// 					res.status(500).json({ status: "Fail", err : err });
	// 				} else {
	// 					res.status(200).json({result: data, Msg: "Successfully Added" });
	// 				}
	// 	})
 //    },
	save_approval: (req, res) => {
		const data = req.body;
		var pVal = {
			approval_name : data.approval_name
		};
		connection.query("INSERT INTO " + APPROVAL + " SET ?", pVal, function(err, results, fields) {
					if (err) {
						res.status(500).json({ status: "Fail", err : err });
					} else {
						res.status(200).json({result: data, Msg: "Successfully Added" });
					}
		})
    },
    get_approval: (req, res) => {
    	connection.query("SELECT * FROM approvals" , function(err, results, fields) {
    		if (err) {
    			res.status(500).json({ status: "Fail", err : err});
    		} else {
    			res.status(200).json({result: results, Msg: "Fetched Successfully"});
    		}
    	})
    },
	save_college: (req, res) => {
		const data = req.body;

		var pVal = {
			college_name : data.college_name,
			broucher_upload : data.broucher_upload,
			location_id : data.location_id,
			placement_id : data.placement_id,
			accreditation_id : data.accreditation_id,
			ownership_id : data.ownership_id,
		};
		connection.query("INSERT INTO " + COLLEGES + " SET ?", pVal, function(err, results, fields) {
					if (err) {
						res.status(500).json({ status: "Fail", err : err });
					} else {
						console.log(results.insertId)

						data.courses.forEach(function(item){
							console.log(item);
							var pVal1 = {
								course_id : item.course_id,
								college_id :results.insertId,
								accreditation_id : item.accreditation_id,
								specialization_id : item.specialization_id,
								course_status_id : item.course_status_id,
								mode_of_study_id : item.mode_of_study_id,
								approval_id : item.approval_id
							};
							connection.query("INSERT INTO " + MAPPING + " SET ?", pVal1, function(err, results,fields) {
								if (err) {
									res.status(500).json({ status: "Fail", err : err });
								}
							});
						});
						res.status(200).json({ Msg: "Successfully Added" });
					}
		})
    },
    save_singlepage: (req, res) => {
    	const data = req.body;
    	var pVal = {
    		image_upload : data.image_upload,
    		overview : data.overview,
    		placement_max_val : data.placement_max_val,
    		infrastructure_max_val : data.infrastructure_max_val,
    		faculty_max_val : data.faculty_max_val,
    		campuslife_max_val : data.campuslife_max_val,
    		value_formoney_max_val : data.value_formoney_max_val,
    		facility : data.facility,
    		mobile_number : data.mobile_number,
    		landline_number : data.landline_number,
    		email_id : data.email_id,
    		address_line : data.address_line,
    		city : data.city,
    		state : data.state,
    		zipcode : data.zipcode,
    		college_web_url : data.college_web_url,
    		google_map_link	 : data.google_map_link	

    	};
    	connection.query("INSERT INTO " + SINGLEPAGE + " SET ?", pVal, function(err, results, fields) {
			if (err) {
				res.status(500).json({ status: "Fail", err : err });
			} else {
				res.status(200).json({result: data, Msg: "Successfully Added" });
			}
    	})
    },
    save_collegecriteria: (req, res) => {
		const data = req.body;
		var pVal = {
		 	college_sp_id : data.college_sp_id,
		 	criteria : data.criteria,
		 	points : data.points
		};
		connection.query("INSERT INTO " + CRITERIA + " SET ?", pVal, function(err, results, fields) {
		 	if (err) {
		 		res.status(500).json({ status: "Fail", err : err });
		 	} else {
		 		res.status(200).json({result: data, Msg: "Successfully Added" });
		 	}
		}) 
	},	
    save_collegeexam: (req, res) => {
		const data = req.body;
		var pVal = {
		 	college_sp_id : data.college_sp_id,
		 	exam_title : data.exam_title,
		 	exam_description : data.exam_description
		};
		connection.query("INSERT INTO " + EXAM + " SET ?", pVal, function(err, results, fields) {
		 	if (err) {
		 		res.status(500).json({ status: "Fail", err : err });
		 	} else {
		 		res.status(200).json({result: data, Msg: "Successfully Added" });
		 	}
		}) 
	},
    save_facilityimage: (req, res) => {
		const data = req.body;
		var pVal = {
		 	college_sp_id : data.college_sp_id,
		 	image : data.image
		 	};
		connection.query("INSERT INTO " + IMAGE + " SET ?", pVal, function(err, results, fields) {
		 	if (err) {
		 		res.status(500).json({ status: "Fail", err : err });
		 	} else {
		 		res.status(200).json({result: data, Msg: "Successfully Added" });
		 	}
		}) 
	},
    save_collegescholarship: (req, res) => {
		const data = req.body;
		var pVal = {
		 	college_sp_id : data.college_sp_id,
		 	title : data.title,
		 	description : data.description
		};
		connection.query("INSERT INTO " + SCHOLARSHIP + " SET ?", pVal, function(err, results, fields) {
		 	if (err) {
		 		res.status(500).json({ status: "Fail", err : err });
		 	} else {
		 		res.status(200).json({result: data, Msg: "Successfully Added" });
		 	}
		}) 
	},					
    save_collegeqn: (req, res) => {
		const data = req.body;
		var pVal = {
		 	college_sp_id : data.college_sp_id,
		 	question : data.question,
		 	answer : data.answer
		};
		connection.query("INSERT INTO " + QUESTION + " SET ?", pVal, function(err, results, fields) {
		 	if (err) {
		 		res.status(500).json({ status: "Fail", err : err });
		 	} else {
		 		res.status(200).json({result: data, Msg: "Successfully Added" });
		 	}
		}) 
	},	
    save_collegearticle: (req, res) => {
		const data = req.body;
		var pVal = {
		 	college_sp_id : data.college_sp_id,
		 	title : data.title,
		 	description : data.description
		};
		connection.query("INSERT INTO " + ARTICLE + " SET ?", pVal, function(err, results, fields) {
		 	if (err) {
		 		res.status(500).json({ status: "Fail", err : err });
		 	} else {
		 		res.status(200).json({result: data, Msg: "Successfully Added" });
		 	}
		}) 
	},	
    save_collegeevent: (req, res) => {
		const data = req.body;
		var pVal = {
		 	college_sp_id : data.college_sp_id,
		 	title : data.title,
		 	description : data.description
		};
		connection.query("INSERT INTO " + EVENT + " SET ?", pVal, function(err, results, fields) {
		 	if (err) {
		 		res.status(500).json({ status: "Fail", err : err });
		 	} else {
		 		res.status(200).json({result: data, Msg: "Successfully Added" });
		 	}
		}) 
	},	
    save_gallerygrp: (req, res) => {
		const data = req.body;
		var pVal = {
		 	college_sp_id : data.college_sp_id,
		 	group_name : data.group_name
		};
		connection.query("INSERT INTO " + GROUP + " SET ?", pVal, function(err, results, fields) {
		 	if (err) {
		 		res.status(500).json({ status: "Fail", err : err });
		 	} else {
		 		res.status(200).json({result: data, Msg: "Successfully Added" });
		 	}
		}) 
	}																				
}    
	