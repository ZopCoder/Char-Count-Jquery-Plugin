//jQuery Plugin to count input characters of a textarea/textbox with remaining characters to show in label.
;(function ($) {
    $.fn.charcount = function (options) {
             var settings = $.extend({}, $.fn.charcount.defaults, options);
             return this.each(function(){
                var $this = $(this);
                var currentValue = $this.text();
                var ctrl = "<br/><span id='spntxtMult" + $this.attr('id') + "'></span>";
                $( ctrl ).insertAfter( $this );
                var limit = $this.attr("data-maxlen");
                $this.keyup(function () {
                       $('#spntxtMult'+ $this.attr('id')).css('display','block');
					   var len = $this.val().length;
                       if (len > limit) {
						   $this.val($this.val().substring(0, limit));
                           return;
                       }
                       if (len >= (limit - settings.NumOfCharOfAlert)) {
                           $('#spntxtMult'+ $this.attr('id')).css('color', settings.errFontColor).css('font-weight', settings.FontWeight);
                           ((limit - len) <= 1) ? $('#spntxtMult'+ $this.attr('id')).text(limit - len + " character left") : $('#spntxtMult'+ $this.attr('id')).text(limit - len + " characters left");

                       }
                       else {
                           $('#spntxtMult'+ $this.attr('id')).css('color', settings.okFontColor).css('font-weight', settings.FontWeight);
                           $('#spntxtMult'+ $this.attr('id')).text(limit - len + " characters left");
                       }

                   }).focus(function () {
                          $('#spntxtMult'+ $this.attr('id')).css('display','block');
						  var len = $this.val().length;
                          if (len >= (limit - settings.NumOfCharOfAlert)) {
                              $('#spntxtMult'+ $this.attr('id')).css('color', settings.errFontColor).css('font-weight', settings.FontWeight);
                              ((limit - len) <= 1) ? $('#spntxtMult'+ $this.attr('id')).text(limit - len + " character left") : $('#spntxtMult'+ $this.attr('id')).text(limit - len + " characters left");
                          }
                          else {
                              $('#spntxtMult'+ $this.attr('id')).css('color', settings.okFontColor).css('font-weight', settings.FontWeight);
                              $('#spntxtMult'+ $this.attr('id')).text(limit - len + " characters left");
                          }
                      }).blur(function(){
							if(!settings.isAlwaysOn){
								$('#spntxtMult'+ $this.attr('id')).css('display','none');
						    }
                    });
               });
        };
       $.fn.charcount.defaults = {
           errFontColor: 'red',
           okFontColor: 'green',
           FontWeight: 'bold',
		   NumOfCharOfAlert: 20,
           isAlwaysOn: true
       }
})(jQuery);