const searchUrl = "https://api.nal.usda.gov/fdc/v1/search"
const key = "NsxvM6LqSydimpmtkN9R86kUrFWf4ohmKJNwSHEC"

function search() {
    let query = document.getElementById("searchBar").value;
    console.log(query);
    let searchData = '{"generalSearchInput":"' + query + '"}'
    console.log(searchData);
    $.ajax({
        url: searchUrl + "?api_key=" + key,
        method: "POST",
        contentType: "application/json",
        data: searchData,
        success: function(result) {
            let foods = result.foods;
            console.log(foods[0].description)
            if (foods) {
              const len = foods.length;
              let txt = "";
              $("#table tr").remove();
              if (len > 0) {
                  for (let i=0; i<len; i++) {
                      if (foods[i].description) {
                          txt += "<tr><td>" + foods[i].description + "</td></tr>";
                      }
                  }
                  if (txt != "") {
                      $("#table").append(txt).removeClass("hidden");
                  }
              }
          }
        }
    })
}
