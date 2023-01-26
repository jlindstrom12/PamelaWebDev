// function showDescription(descript){
//     $("#description").html("Description: " + descript);
// }
// function hideDescription(){
//     $("#description").html("");
// }
function validate(){
    var z = $("#zipCode").val();
    if(z.length != 5 || isNaN(z)){
        alert("Zip Code is invalid. Please make sure it is 5 digits.");
        return false;
    }

    

}



    
    

