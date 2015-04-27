/**
* Custom directive for Context Menu.
*/
app.directive("myContextmenu", function ($document, $window) {
    var contextMenu = {};
    contextMenu.restrict = "A";
    contextMenu.scope = {
        "menuId": "@",
        "menuOptions": "=",
        "menuData": "="
    };

    contextMenu.link = function ($scope, $element, $attrs) {

        var contextmenuDiv = angular.element($scope.menuId);

        $element.on("contextmenu", function (e) {
            e.preventDefault();

            var ul, left, top;

            contextmenuDiv[0].innerHTML = "";

            ul = setContextmenuOptions($scope.menuOptions, $scope.menuData);
            contextmenuDiv.append(ul);
            
            left = event.pageX;
            top = event.pageY;

            contextmenuDiv.css({ "left": left, "top": top });
            contextmenuDiv.show();
        });

        $document.on("click", function (e) {
            contextmenuDiv.hide();
        });
    };
    
    /**
    * Set the Context Menu options depending on the menuId
    * @param options : the menu options, we need to set in our menu
    */
    function setContextmenuOptions(options, data) {
        var ul = $('<ul>'),
            a, li;
        angular.forEach(options, function (item, i) {
            if (i > 0) {
                ul.append("<hr>");
            }
            li = $('<li>');
            a = $('<a>');
            a.on("click", function () {
                item.callback(data);
            });
            a.text(item.text);
            li.append(a);
            ul.append(li);
        });
        return ul;
    }

    return contextMenu;
});