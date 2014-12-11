/*
    required 
    1. jquery
    2. json2
    3. jquery.blockUI
*/

(function(jax, $) {

    jax.defaults = {
        blockWholeUI: false,
        blockContainerId: ''
    };

    /*Post: Json*/
    jax.postJson = function(url, objToPost, successCallBack, errorCallBack) {
        var json = JSON.stringify(objToPost);
        var ajax = $.ajax({
            url: url,
            dataType: "json",
            type: "POST",
            data: json,
            contentType: 'application/json; charset=utf-8',
            async: true,
            processData: false,
            cache: false,
        })
            .done(successCallBack)
            .fail(errorCallBack);
        return ajax;
    };
    /*Get: Json*/
    jax.getJson = function(url, successCallBack, errorCallBack) {
        var ajax = $.ajax({
            url: url,
            dataType: "json",
            type: "GET",
            contentType: 'application/json; charset=utf-8',
            async: true,
            processData: false,
            cache: false,
        })
            .done(successCallBack)
            .fail(errorCallBack);
        return ajax;
    };

    /*Deferred Post: Json*/
    jax.postJsonDfd = function(url, objToPost, successCallBack, errorCallBack) {
        var json = JSON.stringify(objToPost);
        var ajax = $.when(
            $.ajax({
                url: url,
                dataType: "json",
                type: "POST",
                contentType: 'application/json; charset=utf-8',
                data: json,
                async: false,
                processData: false,
                cache: false,
            })
        ).then(function(data, textStatus, jqXhr) {
            if (textStatus === 'success') {
                successCallBack(data, textStatus, jqXhr);
            } else {
                errorCallBack(jqXhr, textStatus, jqXhr.statusText);
            }
        });
        return ajax;
    };
    /*Deferred Get: Json*/
    jax.getJsonDfd = function(url, successCallBack, errorCallBack) {
        var ajax = $.when(
            $.ajax({
                url: url,
                dataType: "json",
                type: "GET",
                contentType: 'application/json; charset=utf-8',
                async: false,
                processData: false,
                cache: false,
            })
        ).then(function(data, textStatus, jqXhr) {
            if (textStatus === 'success') {
                successCallBack(data, textStatus, jqXhr);
            } else {
                errorCallBack(jqXhr, textStatus, jqXhr.statusText);
            }
        });
        return ajax;
    };

    jax.block = function() {
        if (jax.defaults.blockWholeUI) {
            $.blockUI();
        } else {
            $('#' + jax.defaults.blockContainerId).block({ message: null });
        }
    };
    jax.unBlock = function() {
        if (jax.defaults.blockWholeUI) {
            $.unblockUI();
        } else {
            $('#' + jax.defaults.blockContainerId).unblock();
        }

    };

    jax.postJsonBlock = function(url, objToPost, successCallBack, errorCallBack) {
        jax.block();
        var json = JSON.stringify(objToPost);
        var ajax = $.ajax({
            url: url,
            dataType: "json",
            type: "POST",
            data: json,
            contentType: 'application/json; charset=utf-8',
            async: true,
            processData: false,
            cache: false,
        })
            .done(function(data, textStatus, jqXhr) {
                successCallBack(data, textStatus, jqXhr);
                jax.unBlock();
            })
            .fail(function(qXhr, textStatus, error) {
                errorCallBack(qXhr, textStatus, error);
                jax.unBlock();
            });
        return ajax;
    };

    jax.getJsonBlock = function (url, successCallBack, errorCallBack) {
        jax.block();
        var ajax = $.ajax({
            url: url,
            dataType: "json",
            type: "GET",
            contentType: 'application/json; charset=utf-8',
            async: true,
            processData: false,
            cache: false,
        })
            .done(function(data, textStatus, jqXhr) {
                successCallBack(data, textStatus, jqXhr);
                jax.unBlock();
            })
            .fail(function(qXhr, textStatus, error) {
                errorCallBack(qXhr, textStatus, error);
                jax.unBlock();
            });
        return ajax;
    };
    
}(jax = {}, jQuery));