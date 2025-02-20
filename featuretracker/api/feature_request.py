import frappe

@frappe.whitelist()
def get_feature_requests():
    return frappe.get_all("Feature Request", fields=["name", "title", "priority", "status", "date"])

@frappe.whitelist()
def get_feature_request(name):
    if not name or not frappe.db.exists("Feature Request", name):
        raise frappe.DoesNotExistError
    return frappe.get_value(
        "Feature Request",
        name,
        ["name", "title", "priority", "status", "date"],
        as_dict=True
    )

@frappe.whitelist()
def create_feature_request(title, description, priority):
    doc = frappe.get_doc({
        "doctype": "Feature Request",
        "title": title,
        "description": description,
        "priority": priority,
    })
    doc.insert()
    return doc

@frappe.whitelist()
def update_feature_request(name, title=None, description=None, priority=None, status=None, date=None):
    doc = frappe.get_doc("Feature Request", name)
    if title: doc.title = title
    if description: doc.description = description
    if priority: doc.priority = priority
    if status: doc.status = status
    if date: doc.date = date
    doc.save()
    return doc

@frappe.whitelist()
def delete_feature_request(name):
    frappe.delete_doc("Feature Request", name)
    return {"message": "Feature request deleted successfully"}