app.controller('assetBrowserController', function ($scope, ContextmenuService) {

    $scope.items = [
        { name: "1st Item", type: "Odd < 5" },
        { name: "2nd Item", type: "Even < 5" },
        { name: "3rd Item", type: "Odd < 5" },
        { name: "4th Item", type: "Even < 5" },
        { name: "5th Item", type: "Equal to 5" }
    ];

    $scope.evenNumberOptions = [
        {
            text: "Even Number Explorer",
            description: "evenNumberExplorer",
            callback: function (number) {
                ContextmenuService.evenNumberExplorer("This contains my even item = " + number);
            }
        }
    ];

    $scope.oddNumberOptions = [
        {
            text: "Odd Number - Option 1",
            description: "oddNumberExplorer",
            callback: function () {
                ContextmenuService.oddNumberExplorer("First Option - This should contain my odd item, but I should add it in menu-data property to get it, Like in even number option");
            }
        },
        {
            text: "Odd Number - Option 2",
            description: "none",
            callback: function () { /* Add needed action here */ }
        }
    ];
});