function IndexViewModel() {
    var self = this;
    self.showToCreate = function() {
        window.location = '/View/CreateStudent.html';
    };
    
    self.showToUpdate = function () {
        window.location = '/View/UpdateStudent.html';
    };

    self.init = function() {

    };
}

$(document).ready(function () {
    var viewModel = new IndexViewModel();
    ko.applyBindings(viewModel);
    viewModel.init();
});