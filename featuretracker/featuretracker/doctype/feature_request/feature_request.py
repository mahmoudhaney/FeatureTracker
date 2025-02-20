# Copyright (c) 2025, Mahmoud Haney and contributors
# For license information, please see license.txt

import frappe, featuretracker
from frappe.model.document import Document
import re
from frappe.utils import today, get_date_str


class FeatureRequest(Document):
	def validate(self):
		self.validate_title()
		self.validate_date()

	def validate_title(self):
		if self.title and not re.match(r'^[A-Za-z0-9, \(\)\-]+$', self.title):
			frappe.throw(featuretracker.FEATURE_TRACKER_ERRORS.get("invalid_title"))

	def validate_date(self):
		# Validate that the date is today
		# Only validate on creation
		if self.is_new():
			if get_date_str(self.date) != today():
				frappe.throw(featuretracker.FEATURE_TRACKER_ERRORS.get("invalid_date"))
