(function(window, document, undefined) {

    var cepInput = document.getElementById('subscribe-cep-txt');
    var params={};
    window.location.search.replace(
        /[?&]+([^=&]+)=([^&]*)/gi,
        function(str,key,value){
            params[key] = value;
        }
    );
    if (params.cep) {
        cepInput.value = params.cep;
    }

    var processInput = function(e) {
        document.getElementById('error-msg').style.display = 'none';
        var str = e.target.value;
        var outStr = '';

        for (var i = 0, len = str.length; i < len && i < 9; ++i) {
            if (i === 5) {
                outStr += '-';
            }

            if (!isNaN(str.charAt(i))) {
                outStr += str.charAt(i);
            }
        }

        e.target.value = outStr;
    };

    document.getElementById('subscribe-form').onsubmit = function() {
        var cep = cepInput.value;

        if (cep.length < 9) {
            document.getElementById('error-msg').style.display = '';
            return false;
        }

        document.getElementById('layer').style.display = '';
        var reqObj = {
            name: document.getElementById('subscribe-name-txt').value,
            email: document.getElementById('subscribe-email-txt').value,
            cep: cep
        };

        Parse.Cloud.run('subscribe', reqObj, {
            success: function(data) {
                document.getElementById('layer').style.display = 'none';

                var thankYouContent = document.getElementById('thank-you');
                var pageWrapper = document.getElementById('page-wrapper');

                pageWrapper.innerHTML = thankYouContent.innerHTML;
                document.getElementById('page-header').scrollIntoView();
            }
        });

        return false;
    };

   cepInput.oninput = processInput;
   cepInput.onchange = processInput;
   cepInput.onpaste = processInput;
   cepInput.onkeyup = processInput;

})(window, document, undefined);
