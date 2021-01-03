function PeopleController($scope) {
    $scope.people = [{
        name: "John Doe",
        phone: "3452345678",
        city: "New York"
    }, {
        name: "Sarah Parker",
        phone: "1236548769",
        city: "Chicago"
    }, {
        name: "Little John",
        phone: "4567853432",
        city: "Los Angeles"
    }, {
        name: "Adam Doe",
        phone: "9025673152",
        city: "Las Vegas"
    }];




    $scope.Save = function() {

        $scope.people.push({
            name: $scope.newPerson.name,
            phone: $scope.newPerson.phone,
            city: $scope.newPerson.city
        });
        $scope.formVisibility = false;

    }



    $scope.ShowForm = function() {
        $scope.formVisibility = true;

    }

}
