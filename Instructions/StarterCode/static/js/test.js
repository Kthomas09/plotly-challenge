
function hi(data){ 
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var names = data.names;
        var samples = data.samples;
        console.log(names)
        console.log(metadata)
        console.log(samples)

        var message = ("Choose A Sample");
        d3.select("#selDataset")
            .append("option")
            .attr("value", message)
            .html(message)

        // populating the dropdown menu with the sample names
        var dropMenu = d3.select("#selDataset");
        names.forEach((sample) => {
            var row = dropMenu.append("option")
                .attr("value", sample);
            row.text(sample);
        });
    });

    dropMenuChange(metadata)
    } 

    function dropMenuChange(metadata, names, sample) {
        // console.log(filterSamples)
        // console.log(filterMetadata)
        var demographTable = d3.select("#demographic-table");
        demographTable.html("");
        var inputElement = d3.select("#selDataset");
        var tableBody = d3.select("tbody");
        var inputValue = d3.select("value");

        var filterMetadata = metadata.filter(d => d.id == inputValue);
        var filterSamples = samples.filter(s => s.id == inputValue);
    };

    
    hi(0)
