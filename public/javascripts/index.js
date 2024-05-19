//login page request from Signup Page link

$(document).ready(()=>{
    $("#login-modal-request").click((e)=>{
        e.preventDefault();
        $("#signup-modal").modal("hide");
        $("#login-modal").modal("show");
    });
});

//signup page request from login page link
$(document).ready(()=>{
    $("#signup-modal-request").click((e)=>{
        e.preventDefault();
        $("#login-modal").modal("hide");
        $("#signup-modal").modal("show");
    });
});

// signup request

$(document).ready(()=>{
    $("#signup-form").submit((e)=>{
        e.preventDefault();
        $.ajax({
            type: "POST",
            url : "api/signup",
            data : new FormData(e.target),
            
            contentType: false,
            processData: false,
            success : (response)=>{
                console.log(response);
            }
        })
    })
})