var names_of_guests_array = [];
function submit(){
    names_of_guests_array.push(document.getElementById(name_input).value);
    document.getElementById("l1").innerHTML=names_of_guests_array;
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