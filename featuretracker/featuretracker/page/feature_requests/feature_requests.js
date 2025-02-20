frappe.pages['feature-requests'].on_page_load = function (wrapper) {
    var page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'Feature Requests',
        single_column: true
    });

    frappe.call({
        method: "featuretracker.api.feature_request.get_feature_requests",
        callback: function (r) {
            let data = r.message;

            // Compute total stats
            let totalRequests = data.length;
			
            let openedRequests = data.filter(req => req.status.toLowerCase() === "opened").length;
            let inProgressRequests = data.filter(req => req.status.toLowerCase() === "in progress").length;
            let closedRequests = data.filter(req => req.status.toLowerCase() === "closed").length;

            // Create summary section
            let summaryContent = `
                <div class="feature-summary">
                    <div class="summary-card all-requests">Total Requests <span>${totalRequests}</span></div>
                    <div class="summary-card status-open">Opened <span>${openedRequests}</span></div>
                    <div class="summary-card status-in-progress">In Progress <span>${inProgressRequests}</span></div>
                    <div class="summary-card status-closed">Closed <span>${closedRequests}</span></div>
                </div>
            `;

            // Create feature requests list
            let content = `<div class="feature-requests">`;

            data.forEach(request => {
                let priorityClass = getPriorityClass(request.priority);
                let statusClass = getStatusClass(request.status);

                content += `<div class="feature-card" onclick="showFeatureDetails('${request.name}')">
                    <h4>${request.title}</h4>
                    <div class="feature-meta">
                        <p><span class="${priorityClass}">${request.priority}</span></p>
                        <p><span class="${statusClass}">${request.status}</span></p>
                    </div>
                </div>`;
            });

            content += `</div>`;

            // Inject content into the page
            page.main.html(summaryContent + content);
        }
    });
};

window.showFeatureDetails = function (name) {
    frappe.call({
        method: "featuretracker.api.feature_request.get_feature_request",
        args: { name: name },
        callback: function (r) {
            let data = r.message;			

            let modal = new frappe.ui.Dialog({
                title: data.title,
                size: 'large',
                fields: [
                    {
                        fieldtype: 'HTML',
                        fieldname: 'details',
                        options: `
                            <div class="feature-detail-container">
                                <div class="feature-header">
                                    <h2>${data.title}</h2>
                                    <p class="feature-date"><i class="fa fa-calendar"></i> ${formatDate(data.date)}</p>
                                </div>
                                <div class="feature-content">
                                    <p class="feature-description">${data.description}</p>
                                    <div class="feature-meta">
                                        <span class="feature-badge ${getPriorityClass(data.priority)}">
                                            <i class="fa fa-exclamation-circle"></i> ${data.priority}
                                        </span>
                                        <span class="feature-badge ${getStatusClass(data.status)}">
                                            <i class="fa fa-tasks"></i> ${data.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        `
                    }
                ],
                primary_action_label: 'Close',
                primary_action: function () {
                    modal.hide();
                }
            });

            modal.show();
        }
    });
};

// Function to get the priority class
function getPriorityClass(priority) {
    switch (priority.toLowerCase()) {
        case "high": return "priority-high";
        case "medium": return "priority-medium";
        case "low": return "priority-low";
        default: return "";
    }
}

// Function to get the status class
function getStatusClass(status) {
    switch (status.toLowerCase()) {
        case "opened": return "status-open";
        case "in progress": return "status-in-progress";
        case "closed": return "status-closed";
        default: return "";
    }
}

// Utility function to format dates
function formatDate(dateStr) {
    let date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
}