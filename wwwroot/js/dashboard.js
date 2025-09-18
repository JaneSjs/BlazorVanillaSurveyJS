window.initializeSurveyDashboard = function (surveyJsonString, surveyDataJsonString, dotnetHelper) {
    try {
        const surveyJson = JSON.parse(surveyJsonString);
        const surveyData = JSON.parse(surveyDataJsonString);

        // Create the dashboard
        const dashboard = new SurveyAnalytics.Dashboard("surveyDashboardContainer", surveyJson, surveyData);

        // Optional: handle dashboard interactions if needed
        dashboard.onAfterRender.add(function () {
            console.log("Dashboard rendered successfully");
            if (dotnetHelper) {
                dotnetHelper.invokeMethodAsync("OnDashboardRendered");
            }
        });

        console.log("Survey Dashboard initialized successfully");
    } catch (error) {
        console.error("Error initializing Survey Dashboard:", error);
    }
};
