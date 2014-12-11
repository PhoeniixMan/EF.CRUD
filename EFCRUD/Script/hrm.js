/*Date picker for knockout*/
ko.bindingHandlers.datepicker = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var options = allBindingsAccessor().datepickerOptions || {};
        $(element).datepicker(options).on("changeDate", function (ev) {
            var observable = valueAccessor();
            observable(ev.date);
            $(element).datepicker('hide');
            $(element).blur();
        });
    },
    update: function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        $(element).datepicker("setValue", value);
    }
};



/*datetime utility*/
function currentDate() {
    return moment();
};
function clientDate(date) {
    return moment(date);
};

function dateFromDateString(dateString) {
    return moment(dateString, 'DD-MM-YYYY');
};

function clientDateStringFromDate(date) {
    return moment(date).format('DD-MM-YYYY');
};

function clientDateTimeStringFromDate(date) {
    //return moment(date).format('LLLL');
    return moment(date).format('dddd, MMMM D YYYY, h:mm:ss a');
};

/*Active main menu*/
function activeParentMenu(object) {
    object.addClass('active');
    object.parents('li:eq(1)').find('a:first').addClass('active');
}

/*Toaster notifications
http://codeseven.github.io/toastr/demo.html
*/
function ToastError(error) {
    toastr.options = {
        "closeButton": true,
        "debug": true,
        "positionClass": "toast-top-right",
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
    toastr.error(error, 'Error');
    //toastr.error('There has been an error, please try again', 'Error');
}

function ToastSuccess(message) {
    toastr.options = {
        "closeButton": true,
        "debug": true,
        "positionClass": "toast-top-right",
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
    toastr.success(message, 'Success');
}



/*block UI*/
$.blockUI.defaults.overlayCSS.opacity = 0.01;
$.blockUI.defaults.message = '<img src="/Content/images/ajax_loader_blue_128.gif" />';
$.blockUI.defaults.css = {
    padding: 0,
    margin: 0,
    width: '30%',
    top: '40%',
    left: '35%',
    textAlign: 'center',
    color: '#000',
    cursor: 'wait'
};


/*Custom ajax - Jax*/
jax.defaults.blockWholeUI = true;
jax.defaults.blockContainerId = 'main';


/*template setup*/
$(function () {
    infuser.defaults.templateUrl = "/Templates";
    infuser.defaults.templatePrefix = "_";
    infuser.defaults.templateSuffix = ".tmpl.html";
});

/*jquery extn*/
$.ifNull = function (variable, value) {
    return (variable == null) ? value : variable;
};

//var ifNull = function (variable, value, ifNotNullValue) {
//    return (variable == null) ? value : ifNotNullValue;
//};

$.ifNullThan = function (variable, value, ifNotNullValue) {
    return (variable == null) ? value : ifNotNullValue;
};
