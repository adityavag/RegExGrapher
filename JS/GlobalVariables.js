var regExInput = $(".regExInput");

regExInput.on('input', () => {
    console.log(regExInput.val().trim());
});