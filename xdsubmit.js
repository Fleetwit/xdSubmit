$(function() {
 	var methods = {
		create: function(nodeType, appendTo, raw) {
			var element = document.createElement(nodeType);
			if (appendTo != undefined) {
				$(appendTo).append($(element));
			}
			return (raw === true)?element:$(element);
		},
		xdsubmit: function(url, data) {
			var j;
			var form	= $.create("form", $("body"));
			form.attr({
				method:	"post",
				action:	url,
				target:	"xdsubmit",
				src:	"about:blank"
			});
			for (j in data) {
				(function(_j, _data) {
					var input 	= $.create("input", form, true);
					input.type	= "hidden";
					input 		= $(input);
					input.attr("name", _j);
					if (typeof(_data[j]) != "string") {
						_data[j] = JSON.stringify(_data[j]);
					}
					input.val(_data[j]);
				})(j, data);
			}
			form.submit();
		}
	};
	$.extend(methods);
});