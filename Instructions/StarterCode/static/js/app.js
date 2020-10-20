// function to build the necessary plots for the dashboard
function buildPlot(id){
    // reading the sample.json into the JavaScript
    d3.json("samples.json").then((data) =>{
    
    // Setting the variables to read in the specific portions of the JSON
    var metadata = data.metadata;
    var names = data.names;
    var samples = data.samples;

    var message = ("Choose A Sample");
    d3.select("#selDataset")
      .append("option")
      .attr("value",message)
      .html(message)

    
    });
};

buildPlot(0)