function readFile() {

    if (this.files && this.files[0]) {

        var FR = new FileReader();

        FR.addEventListener("load", function (e) {
            $("#img").attr('src', e.target.result);
            $("#b64").html(e.target.result);
        });

        FR.readAsDataURL(this.files[0]);
    }

}
$("#inp").on("change", readFile);

