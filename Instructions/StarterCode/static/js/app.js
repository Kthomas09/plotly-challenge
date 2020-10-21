// function to build the necessary plots for the dashboard
function buildPlot(id){
    // reading the sample.json into the JavaScript
    d3.json("samples.json").then((data) =>{
    
    // Setting the variables to read in the specific portions of the JSON
    var metadata = data.metadata;
    var names = data.names;
    var samples = data.samples;
    
    // Setting the intial display message into drop down menu
    var message = ("Choose A Sample");
    d3.select("#selDataset")
      .append("option")
      .attr("value",message)
      .html(message)
    
    // populating the dropdown menu with the sample names
    var dropMenu = d3.select("#selDataset");
    names.forEach((sample)=>{
        var row = dropMenu.append("option")
                          .attr("value", sample);
        row.text(sample);
    });
    // function to change the drop down menu and append selected sample data.
    const dropMenuChange = () => {
        var demographTable = d3.select("#demographic-table");
        demographTable.html("");
        var inputElement = d3.select("#selDataset");
        var tableBody = d3.select("tbody");
        var inputValue = d3.select("value");

        var filterMetadata = metadata.filter(d => d.id == inputValue);
        var filterSamples = samples.filter(s => s.id == inputValue);

        console.log(filterSamples)
        console.log(filterMetadata)

        // filterMetadata.forEach((sample)=>{
        //     let row = tableBody.append("tr");
        //     Object.entries(sample).forEach(value =>{
        //         let cell = row.append("tr");
        //         cell.text("");
        //         cell.text(`${value[0]}: ${value[1]}`);
        //         var slicedSamples = filterSamples[0].sample_values.slice(0,10).reverse();
        //         var slicedOTU_ids = filterSamples[0].otu_ids.slice(0,10).reverse().map(d => `OTU `+ d);
        //         var slicedOTU_labels = filterSamples[0].otu_labels.slice(0,10).reverse();
        //         console.log(slicedSamples)
        //         console.log(slicedOTU_ids)
        //         console.log(slicedOTU_labels)
            
        //         var trace1 = {
        //             x: slicedSamples,
        //             y: slicedOTU_ids,
        //             text: slicedOTU_labels,
        //             type: "bar",
        //             orientation: "h"
        //         };
            
        //         var barGraphData = [trace1]
                
        //         var barGraphLayout = {
        //             title: "Top Ten Belly Button OTU Samples",
        //             xaxis: {title:"Ubiquity of OTU Samples"},
        //             yaxis: {title:"OTU ID Number"}
        //         };
        //         Plotly.newPlot("bar", barGraphData, barGraphLayout)
        //     })
        // });
    };
    

    
    });
};

buildPlot(0)