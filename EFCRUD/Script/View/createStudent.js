/// <reference path="../../Service/StudentWebService.asmx" />
/// <reference path="../../Service/StudentWebService.asmx" />
function StudentViewModel() {
    var self = this;

    self.name = ko.observable().extend({ required: true }),
    self.gender = ko.observable().extend({ required: true }),
    self.departmentId = ko.observable().extend({required: true}),

    self.errors = ko.validation.group(self);
    self.hasErrors = function () { return (self.errors().length > 0) ? true : false; };
    self.showErrors = function () { self.errors.showAllMessages(); };
    self.removeErrors = function () { self.errors.showAllMessages(false); };

    self.studentObj = function () {
        var obj = {
            Name: self.name(),
            Gender: self.gender(),
            DepartmentId: self.departmentId()
        };

        return {
            entity: obj
        };
    };

    self.create = function () {
        if (self.hasErrors()) {
            self.showErrors();
            return;
        }
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/Service/StudentWebService.asmx/Create",
            data: JSON.stringify(self.studentObj()),
            dataType: "json", cache : false,
            async: true,
            success: function (data) {
                alert(data.d);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert('Error occured due to some problem.');
            }
        });
    };

    self.init = function () {

    };
}

$(document).ready(function () {
    var viewModel = new StudentViewModel();
    ko.applyBindings(viewModel);
    viewModel.init();
});