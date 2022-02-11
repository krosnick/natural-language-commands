setTimeout(function(){  
    console.log("within custom.js");
    
    // Player data
    const playerData = [
        {
            "playerFirstName": "Salvador",
            "playerLastName": "Perez",
            "position": "C",
            "team": "KC",
            "G": 161,
            "AB": 620,
            "R": 88,
            "H": 169,
            "2B": 24,
            "3B": 0,
            "HR": 48,
            "RBI": 121,
            "BB": 28,
            "SO": 170,
            "SB": 1,
            "CS": 0,
            "AVG": .273,
            "OBP": .316,
            "SLG": .544,
            "OPS": .860
        },
        {
            "playerFirstName": "Jose",
            "playerLastName": "Abreu",
            "position": "1B",
            "team": "CWS",
            "G": 152,
            "AB": 566,
            "R": 86,
            "H": 148,
            "2B": 30,
            "3B": 2,
            "HR": 30,
            "RBI": 117,
            "BB": 61,
            "SO": 143,
            "SB": 1,
            "CS": 0,
            "AVG": .261,
            "OBP": .351,
            "SLG": .481,
            "OPS": .832
        },
        {
            "playerFirstName": "Teoscar",
            "playerLastName": "Hernandez",
            "position": "RF",
            "team": "TOR",
            "G": 143,
            "AB": 550,
            "R": 92,
            "H": 163,
            "2B": 29,
            "3B": 0,
            "HR": 32,
            "RBI": 116,
            "BB": 36,
            "SO": 148,
            "SB": 12,
            "CS": 4,
            "AVG": .296,
            "OBP": .346,
            "SLG": .524,
            "OPS": .870
        },
        {
            "playerFirstName": "Rafael",
            "playerLastName": "Devers",
            "position": "3B",
            "team": "BOS",
            "G": 156,
            "AB": 591,
            "R": 101,
            "H": 165,
            "2B": 37,
            "3B": 1,
            "HR": 38,
            "RBI": 113,
            "BB": 62,
            "SO": 143,
            "SB": 5,
            "CS": 5,
            "AVG": .279,
            "OBP": .352,
            "SLG": .538,
            "OPS": .890
        },
        {
            "playerFirstName": "Adam",
            "playerLastName": "Duvall",
            "position": "LF",
            "team": "ATL",
            "G": 146,
            "AB": 513,
            "R": 67,
            "H": 117,
            "2B": 17,
            "3B": 2,
            "HR": 38,
            "RBI": 113,
            "BB": 35,
            "SO": 174,
            "SB": 5,
            "CS": 0,
            "AVG": .228,
            "OBP": .281,
            "SLG": .491,
            "OPS": .772
        }
    ];

    let selectedHeader = "RBI";
    let selectedColIndex = 9;
    let sortOrder = -1;
    playerData.sort(function(a, b){
        return sortOrder * (a[selectedHeader] - b[selectedHeader]);
    });

    // Populate player data in table
    const tableBodyHTML = generateDataHTML();
    document.querySelector("tbody").innerHTML = tableBodyHTML;

    // Highlight data in currently selected column
    highlightColumn(selectedColIndex);

    // Event listeners for clicking headers
    // Need event listener for headers: [data-row="h1"]
        // If currently selected header is clicked...
        // If any other header is clicked...

    document.querySelectorAll('[data-row="h1"]').forEach(function(item){ 
        item.addEventListener("click", function(event){
            const headerElement = event.target.closest('[data-row="h1"]'); // want the header ancestor
            
            let selectedHeader = headerElement.querySelector(".cellheader").textContent;
            let selectedColIndex = headerElement.getAttribute("data-col");

            // Check if this header is currently selected or not
            if(headerElement.classList.contains('selected-1vxxHvFg')){
                // This header is currently selected; reverse sort order for this header/column
                
                // Identify if this column data is sorted in ascending or descending order
                if(headerElement.querySelector(".current-sort-order-3ks7b_S5").classList.contains("desc-arrow-1lwaxUtc")){
                    // Currently in descending order; reverse to ascending order

                    // Update selected header arrow to reflect new sorting direction
                    headerElement.querySelector(".desc-arrow-1lwaxUtc").classList.remove("current-sort-order-3ks7b_S5");
                    headerElement.querySelector(".asc-arrow-U_ekHpRa").classList.add("current-sort-order-3ks7b_S5");

                    // Reverse order of data
                    let sortOrder = 1; // ascending order
                    playerData.sort(function(a, b){
                        return sortOrder * (a[selectedHeader] - b[selectedHeader]);
                    });

                    // Update data in DOM
                    const tableBodyHTML = generateDataHTML();
                    document.querySelector("tbody").innerHTML = tableBodyHTML;
                    highlightColumn(selectedColIndex); // because highlighting gets removed when we repopulated data

                }else{
                    // Currently in ascending order; reverse to descending order

                    // Update selected header arrow to reflect new sorting direction
                    headerElement.querySelector(".desc-arrow-1lwaxUtc").classList.add("current-sort-order-3ks7b_S5");
                    headerElement.querySelector(".asc-arrow-U_ekHpRa").classList.remove("current-sort-order-3ks7b_S5");

                    // Reverse order of data
                    let sortOrder = -1; // descending order
                    playerData.sort(function(a, b){
                        return sortOrder * (a[selectedHeader] - b[selectedHeader]);
                    });

                    // Update data in DOM
                    const tableBodyHTML = generateDataHTML();
                    document.querySelector("tbody").innerHTML = tableBodyHTML;
                    highlightColumn(selectedColIndex); // because highlighting gets removed when we repopulated data
                }
            }else{
                // This header is NOT currently selected; select this header and its corresponding column data
                
                // Sort data by this column in descending order
                let sortOrder = -1; // descending order
                playerData.sort(function(a, b){
                    return sortOrder * (a[selectedHeader] - b[selectedHeader]);
                });

                // Update data in DOM
                const tableBodyHTML = generateDataHTML();
                document.querySelector("tbody").innerHTML = tableBodyHTML;

                // Remove selection from previously selected header/col, and make this header/col selected
                highlightColumn(selectedColIndex);

                // Remove arrows from previously selected header, and add arrows to this new header
                document.querySelectorAll(".sort-order-icons-oE9uGocE").forEach(function(item){
                    item.remove();
                });
                const sortArrowElement = document.createElement('div');
                sortArrowElement.innerHTML = getSortArrowHTML();
                headerElement.querySelector(".column-header-container-3x78vsMu div").appendChild(sortArrowElement);
            }
        });
    });

    function getSortArrowHTML(){
        return '<div class="sort-order-icons-oE9uGocE" aria-label="Sort Order Toggle"><svg transform="rotate(0)" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bui-icon asc-arrow-U_ekHpRa" fill="" stroke=""><use xlink:href="#caret-up-spriteMap-OKfnQNHF"><symbol viewBox="0 0 11 6" id="caret-up-spriteMap-OKfnQNHF"><title id="title-caret-up-spriteMap-OKfnQNHF">caret-up</title><path d="M5.974.672l4.292 3.66a.65.65 0 0 1-.065 1.046.74.74 0 0 1-.88-.05L5.499 2.07 1.678 5.33a.739.739 0 0 1-.884.046.65.65 0 0 1-.062-1.043L5.027.671A.73.73 0 0 1 5.5.5c.17 0 .34.058.474.172zm-.808 1.114h.666L5.5 2.07l-.333-.284z" fill="" stroke=""></path></symbol></use></svg><svg transform="rotate(0)" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bui-icon desc-arrow-1lwaxUtc current-sort-order-3ks7b_S5" fill="" stroke=""><use xlink:href="#caret-down-spriteMap-OKfnQNHF"><symbol viewBox="0 0 11 6" id="caret-down-spriteMap-OKfnQNHF"><title id="title-caret-down-spriteMap-OKfnQNHF">caret-down</title><path d="M5.974 5.328l4.292-3.66a.65.65 0 0 0-.065-1.046.74.74 0 0 0-.88.05L5.499 3.928 1.678.671A.739.739 0 0 0 .794.625a.65.65 0 0 0-.062 1.042L5.027 5.33a.73.73 0 0 0 .473.17.727.727 0 0 0 .474-.171zm-.808-1.115h.666L5.5 3.93l-.333.284z" fill="" stroke=""></path></symbol></use></svg></div>';
    }

    function highlightColumn(colIndex){
        // First, unhighlight everything (else)
        document.querySelectorAll(".selected-1vxxHvFg").forEach(function(item){
            item.classList.remove("selected-1vxxHvFg");
        });

        // Then, highlight colIndex
        document.querySelectorAll(`[data-col="${colIndex}"], [data-col="${colIndex}"] .column-header-container-3x78vsMu, [data-col="${colIndex}"] .cellheader`).forEach(function(item){
            item.classList.add("selected-1vxxHvFg");
        });
    }

    function generateDataHTML(){
        let tableBodyHTML = "";
        for(let i = 0; i < playerData.length; i++){
            const player = playerData[i];
            const rowHTML = `<tr>
                <th scope="row" headers="tb-0-header-col0" id="tb-0-body-row${i}" class="pinned-col-3lxtuFnc col-group-start-sa9unvY0 number-aY5arzrB first-col-3aGPCzvr is-table-pinned-1WfPW2jT" data-col="0" data-row="${i}">
                    <div class="custom-cell-wrapper-34Cjf9P0">
                        <div class="index-3cdMSKi7">${i+1}</div>
                        <div class="value-wrapper-1W5GYs5E">
                            <div class="top-wrapper-1NLTqKbE">
                                <div><a class="bui-link " tabindex="0" aria-label="${player["playerFirstName"]} ${player["playerLastName"]}"><span class="full-3fV3c9pF">${player["playerFirstName"]}</span><span class="short-3OJ0bTju">${player["playerFirstName"].charAt(0)} ${player["playerLastName"]}</span><span class="full-3fV3c9pF">${player["playerLastName"]}</span></a></div>
                                <div class="position-28TbwVOg">${player["position"]}</div>
                            </div>
                        </div>
                    </div>
                    <div class="placeholder-wrapper-bEG1UFFP">
                        <div class="index-3cdMSKi7">${i+1}</div>
                        <div><span class="bui-skeleton"><span class="skeleton-row-2cL12jX9" style="background-color: rgb(238, 238, 238); background-image: linear-gradient(90deg, rgb(238, 238, 238), rgb(245, 245, 245), rgb(238, 238, 238)); border-radius: 50%; width: 42px; height: 42px;">‌</span></span>
                        </div>
                        <div class="placeholder-content-2l2UMerJ">
                            <div><span class="bui-skeleton"><span class="skeleton-row-2cL12jX9" style="background-color: rgb(238, 238, 238); background-image: linear-gradient(90deg, rgb(238, 238, 238), rgb(245, 245, 245), rgb(238, 238, 238)); border-radius: 4px; width: 200px; height: 16px;">‌</span></span>
                            </div>
                            <div><span class="bui-skeleton"><span class="skeleton-row-2cL12jX9" style="background-color: rgb(238, 238, 238); background-image: linear-gradient(90deg, rgb(238, 238, 238), rgb(245, 245, 245), rgb(238, 238, 238)); border-radius: 4px; width: 100px; height: 7px;">‌</span></span>
                            </div>
                        </div>
                    </div>
                </th>
                <td scope="row" headers="tb-0-header-col1" class="col-group-end-2UJpJVwW number-aY5arzrB align-left-3L2SU-Mk is-table-pinned-1WfPW2jT" data-col="1" data-row="${i}">${player["team"]}</td>
                <td scope="row" headers="tb-0-header-col2" class="col-group-start-sa9unvY0 number-aY5arzrB align-right-3nN_D3xs is-table-pinned-1WfPW2jT" data-col="2" data-row="${i}">${player["G"]}</td>
                <td scope="row" headers="tb-0-header-col3" class="col-group-end-2UJpJVwW number-aY5arzrB align-right-3nN_D3xs is-table-pinned-1WfPW2jT" data-col="3" data-row="${i}">${player["AB"]}</td>
                <td scope="row" headers="tb-0-header-col4" class="col-group-start-sa9unvY0 number-aY5arzrB align-right-3nN_D3xs is-table-pinned-1WfPW2jT" data-col="4" data-row="${i}">${player["R"]}</td>
                <td scope="row" headers="tb-0-header-col5" class="number-aY5arzrB align-right-3nN_D3xs is-table-pinned-1WfPW2jT" data-col="5" data-row="${i}">${player["H"]}</td>
                <td scope="row" headers="tb-0-header-col6" class="number-aY5arzrB align-right-3nN_D3xs is-table-pinned-1WfPW2jT" data-col="6" data-row="${i}">${player["2B"]}</td>
                <td scope="row" headers="tb-0-header-col7" class="number-aY5arzrB align-right-3nN_D3xs is-table-pinned-1WfPW2jT" data-col="7" data-row="${i}">${player["3B"]}</td>
                <td scope="row" headers="tb-0-header-col8" class="number-aY5arzrB align-right-3nN_D3xs is-table-pinned-1WfPW2jT" data-col="8" data-row="${i}">${player["HR"]}</td>
                <td scope="row" headers="tb-0-header-col9" class="col-group-end-2UJpJVwW number-aY5arzrB align-right-3nN_D3xs is-table-pinned-1WfPW2jT" data-col="9" data-row="${i}">${player["RBI"]}</td>
                <td scope="row" headers="tb-0-header-col10" class="col-group-start-sa9unvY0 number-aY5arzrB align-right-3nN_D3xs is-table-pinned-1WfPW2jT" data-col="10" data-row="${i}">${player["BB"]}</td>
                <td scope="row" headers="tb-0-header-col11" class="col-group-end-2UJpJVwW number-aY5arzrB align-right-3nN_D3xs is-table-pinned-1WfPW2jT" data-col="11" data-row="${i}">${player["SO"]}</td>
                <td scope="row" headers="tb-0-header-col12" class="col-group-start-sa9unvY0 number-aY5arzrB align-right-3nN_D3xs is-table-pinned-1WfPW2jT" data-col="12" data-row="${i}">${player["SB"]}</td>
                <td scope="row" headers="tb-0-header-col13" class="col-group-end-2UJpJVwW number-aY5arzrB align-right-3nN_D3xs is-table-pinned-1WfPW2jT" data-col="13" data-row="${i}">${player["CS"]}</td>
                <td scope="row" headers="tb-0-header-col14" class="col-group-start-sa9unvY0 number-aY5arzrB align-right-3nN_D3xs is-table-pinned-1WfPW2jT" data-col="14" data-row="${i}">${player["AVG"]}</td>
                <td scope="row" headers="tb-0-header-col15" class="number-aY5arzrB align-right-3nN_D3xs is-table-pinned-1WfPW2jT" data-col="15" data-row="${i}">${player["OBP"]}</td>
                <td scope="row" headers="tb-0-header-col16" class="number-aY5arzrB align-right-3nN_D3xs is-table-pinned-1WfPW2jT" data-col="16" data-row="${i}">${player["SLG"]}</td>
                <td scope="row" headers="tb-0-header-col17" class="col-group-end-2UJpJVwW number-aY5arzrB align-right-3nN_D3xs is-table-pinned-1WfPW2jT" data-col="17" data-row="${i}">${player["OPS"]}</td>
            </tr>`;
            tableBodyHTML += rowHTML;
        }
        return tableBodyHTML;
    }
}, 0);