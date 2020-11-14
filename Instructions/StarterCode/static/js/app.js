function gatheringDemographicInfo(id) {
    d3.json("samples.json").then((data)=>{
        var metadata = data.metadata;
        // console.log(metadata)
        var info = metadata.filter(m => m.id.toString()==id)[0];
        var demoInfo = d3.select("#sample-metadata");
        demoInfo.html("");
        Object.entries(info).forEach((key)=>{
            demoInfo.append("h5").text(key[0].toUpperCase()+": "+key[1]+"\n");
        });
    });
};

function buildPlot(id){
    d3.json("samples.json").then((data)=>{
        var one_sample_data = data.samples.filter(s => s.id.toString()==id)[0];
        console.log(one_sample_data)
        // ****
        var otu_ids = one_sample_data.otu_ids
        var sample_values = one_sample_data.sample_values.slice(0,10).reverse();
        var otu_labels = one_sample_data.otu_labels.slice(0,10).reverse();
        // ****
        // formatting data for plots
        // var top_otu_samples = (one_sample_data.slice(0,10)).reverse();
        // var top_otu_ids = top_otu_samples.map(d => "OTU " + d);
        // var top_otu_labels = data.samples[0].otu_labels.slice(0,10).reverse();
        // variable to plot the trace of the bar graph
        var trace_1 = {
            x: sample_values,
            y: otu_ids,
            // text: top_otu_labels,
            marker: {
            color: "red"},
            type: "bar",
            orientation: "h", 
        };
        // variable to create the data
        var data_1 = [trace_1];
        // varable to plot the layout of the bar graph
        var layout_1 = {
            title: "Top Ten Operational Taxonomic Units",
            yaxis:{
                tickmode: "Linear",
            },
            margin: {
                l:100,
                r:100,
                t:100,
                b:30
            }
        };

    // plot the bar graph
    Plotly.newPlot("bar", data_1, layout_1);
        // variable to plot the trace of the bubble chart
        // var trace_2 = {
        //     x: data.samples[0].otu_ids,
        //     y: data.samples[0].sample_values,
        //     mode: "markers",
        //     markers: {
        //         size: data.samples[0].sample_values,
        //         color: data.samples[0].otu_ids,
        //     },
        //     text: data.samples[0].otu_labels,
        // };
        // variable to create the data
        // var data_2 = [trace_2];
        // // varable to plot the layout of the bar graph
        // var layout_2 = {
        //     xaxis: {title: "OTU ID"},
        //     height: 600,
        //     width: 1000
        // };
    // plot the bubble chart
    // Plotly.newPlot("bubble", data_2,layout_2);
    })
};


function changeDemographic(id){
    buildPlot(id);
    gatheringDemographicInfo(id);
};

function init(){
    console.log("Here")
    var dropDownMenu= d3.select("#selDataset");
    console.log(dropDownMenu)
    d3.json("samples.json").then((data)=>{
        console.log(data)
        var sample_names = data.names
        sample_names.forEach((one_sample)=>{
            dropDownMenu.append("option").text(one_sample).property("value", one_sample);
        });
        gatheringDemographicInfo(data.name[0]);
        buildPlot(data.name[0]);
    })
};
init();
