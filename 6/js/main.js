$(() => {
    $("#open-modal-btn").on(
        'click', 
        function() {
            $("#modal-window").toggle(400);
        }
    );
    
    $("#close-modal-btn").on(
        'click',
        function() {
            $("#modal-window").hide(400);
        }
    );
})
