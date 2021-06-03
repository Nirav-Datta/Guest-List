var names_of_guests_array = [];
var name_of_guest;
function submit1(){
    name_of_guest = document.getElementById(name_input).value;
    names_of_guests_array.push(name_of_guest);
    document.getElementById("l1").innerHTML=names_of_guests_array;
    console.log(name_of_guest);
}
function show(){
    var length_of_guests_array = names_of_guests_array.length;
    var display_guests_array = [];
    for(var k = 0; k < length_of_guests_array; k++ ){
        display_guests_array.push(names_of_guests_array[k])
    }
    var remove_commas = display_guests_array.join(" ")
    document.getElementById("l2").innerHTML = remove_commas;
    document.getElementById("sorted_list").innerHTML = remove_commas;
}
function sorting(){
    var sorted_list = remove_commas.sort();
    document.getElementById("sorted_list").innerHTML = sorted_list;
    console.log("sorted list =" + sorted_list)
}
function search(){
    var search = document.getElementById("search_input").value;
    var found = 0;
    var j;
    for(j=0; j<length_of_guests_array; j++){
        if(search==names_of_guests_array[j]){
            found=found+1;
        }
    }
    document.getElementById("search_result").innerHTML = "name found"+found+"time/s";
    console.log("name found" + found + "time/s")
}