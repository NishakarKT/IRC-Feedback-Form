$('#contactForm').on("submit", e => {
    e.preventDefault();

    $.ajax({
        url: "<SCRIPT_URL>",
        type: "post",
        data: jQuery('#contactForm').serialize(),
        success: res => {
            e.target.reset();
            alert("Your response has been recorded!");
            window.location.reload();
        }
    });
});


// gooogle sheet: <SHEET_URL>