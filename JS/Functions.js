// Dynamic Tab
$(document).ready(function () {
    $('a[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
        var activeTab = $(e.target).text(); // Get the name of active tab
        var previousTab = $(e.relatedTarget).text(); // Get the name of previous active tab
        $(".active-tab span").html(activeTab);
        $(".previous-tab span").html(previousTab);
    });
});