(function(window, document, undefined) {
    var checkCep = function() {
        var cep = document.getElementById('home-modal-txt').value;
        
        if (cep.length < 9) {
            document.getElementById('error-msg').style.display = '';
            input.focus();
            return;
        }

        var reqObj = {
            cep: cep
        };

        document.getElementById('loading-msg').style.display = '';
        setTimeout(function() {
            window.location.assign('/nao-disponivel?cep=' + cep);
        }, 1000);
    };

    var input = document.getElementById('home-modal-txt');

    var showModal = function() {
        document.getElementById('home-modal-background-layer')
            .style.display = '';
        document.getElementById('error-msg').style.display = 'none';
        document.getElementById('error-msg').style.display = 'none';
        input.focus();
    };

    var dismissModal = function() {
        document.getElementById('home-modal-background-layer')
            .style.display = 'none';
        input.value = '';
    };

    var processInput = function(e) {
        document.getElementById('error-msg').style.display = 'none';

        var x = e.which || e.keyCode;
        if (x === 27) {
            dismissModal();
        }

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

    var callToActionButtons = 
        document.querySelectorAll('#call-to-action-1, #call-to-action-2');
    for (var i = 0, len = callToActionButtons.length; i < len; ++i) {
        callToActionButtons[i].onclick = showModal;
    }

    document.getElementById('home-modal-background-layer').onclick = 
        dismissModal;
    document.getElementById('home-modal-close').onclick = dismissModal;

    document.getElementById('home-modal').onclick = function(e) {
        input.focus();
        e.stopPropagation();
    };

    input.oninput = processInput;
    input.onchange = processInput;
    input.onpaste = processInput;
    input.onkeyup = processInput;

    document.getElementById('check-cep-btn').onclick = function(e) {
        checkCep();

        e.stopPropagation();
    };

})(window, document, undefined);
