setTimeout(function(){  
    console.log("within custom.js");
    
    // Person data
    const personData = [
        {
            "rank": 1,
            "name": "Jeff Bezos",
            "id": "jeff-bezos",
            "net worth": 177,
            "age": 57,
            "country / territory": "United States",
            "source": "Amazon",
            "industry": "Technology",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 2,
            "name": "Elon Musk",
            "id": "elon-musk",
            "net worth": 151,
            "age": 49,
            "country / territory": "United States",
            "source": "Tesla, SpaceX",
            "industry": "Automotive",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 3,
            "name": "Bernard Arnault & family",
            "id": "bernard-arnault",
            "net worth": 150,
            "age": 72,
            "country / territory": "France",
            "source": "LVMH",
            "industry": "Fashion & Retail",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 4,
            "name": "Bill Gates",
            "id": "bill-gates",
            "net worth": 124,
            "age": 65,
            "country / territory": "United States",
            "source": "Microsoft",
            "industry": "Technology",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 5,
            "name": "Mark Zuckerberg",
            "id": "mark-zuckerberg",
            "net worth": 97,
            "age": 36,
            "country / territory": "United States",
            "source": "Facebook",
            "industry": "Technology",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 6,
            "name": "Warren Buffett",
            "id": "warren-buffett",
            "net worth": 96,
            "age": 90,
            "country / territory": "United States",
            "source": "Berkshire Hathaway",
            "industry": "Finance & Investments",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 7,
            "name": "Larry Ellison",
            "id": "larry-ellison",
            "net worth": 93,
            "age": 76,
            "country / territory": "United States",
            "source": "software",
            "industry": "Technology",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 8,
            "name": "Larry Page",
            "id": "larry-page",
            "net worth": 91.5,
            "age": 48,
            "country / territory": "United States",
            "source": "Google",
            "industry": "Technology",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 9,
            "name": "Sergey Brin",
            "id": "sergey-brin",
            "net worth": 89,
            "age": 47,
            "country / territory": "United States",
            "source": "Google",
            "industry": "Technology",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 10,
            "name": "Mukesh Ambani",
            "id": "mukesh-ambani",
            "net worth": 84.5,
            "age": 63,
            "country / territory": "India",
            "source": "diversified",
            "industry": "Diversified",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 11,
            "name": "Amancio Ortega",
            "id": "amancio-ortega",
            "net worth": 77,
            "age": 85,
            "country / territory": "Spain",
            "source": "Zara",
            "industry": "Fashion & Retail",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 12,
            "name": "Francoise Bettencourt Meyers & family",
            "id": "francoise-bettencourt-meyers",
            "net worth": 73.6,
            "age": 67,
            "country / territory": "France",
            "source": "L'Oréal",
            "industry": "Fashion & Retail",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 13,
            "name": "Zhong Shanshan",
            "id": "zhong-shanshan",
            "net worth": 68.9,
            "age": 66,
            "country / territory": "China",
            "source": "beverages, pharmaceuticals",
            "industry": "Food & Beverage",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 14,
            "name": "Steve Ballmer",
            "id": "steve-ballmer",
            "net worth": 68.7,
            "age": 65,
            "country / territory": "United States",
            "source": "Microsoft",
            "industry": "Technology",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 15,
            "name": "Ma Huateng",
            "id": "ma-huateng",
            "net worth": 65.8,
            "age": 49,
            "country / territory": "China",
            "source": "internet media",
            "industry": "Technology",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 16,
            "name": "Carlos Slim Helu & family",
            "id": "carlos-slim-helu",
            "net worth": 62.8,
            "age": 81,
            "country / territory": "Mexico",
            "source": "telecom",
            "industry": "Telecom",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 17,
            "name": "Alice Walton",
            "id": "alice-walton",
            "net worth": 61.8,
            "age": 71,
            "country / territory": "United States",
            "source": "Walmart",
            "industry": "Fashion & Retail",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 18,
            "name": "Jim Walton",
            "id": "jim-walton",
            "net worth": 60.2,
            "age": 72,
            "country / territory": "United States",
            "source": "Walmart",
            "industry": "Fashion & Retail",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 19,
            "name": "Rob Walton",
            "id": "rob-walton",
            "net worth": 59.5,
            "age": 76,
            "country / territory": "United States",
            "source": "Walmart",
            "industry": "Fashion & Retail",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 20,
            "name": "Michael Bloomberg",
            "id": "michael-bloomberg",
            "net worth": 59,
            "age": 79,
            "country / territory": "United States",
            "source": "Bloomberg LP",
            "industry": "Media & Entertainment",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 21,
            "name": "Colin Zheng Huang",
            "id": "colin-zheng-huang",
            "net worth": 55.3,
            "age": 41,
            "country / territory": "China",
            "source": "e-commerce",
            "industry": "Technology",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 22,
            "name": "MacKenzie Scott",
            "id": "macKenzie-scott",
            "net worth": 53,
            "age": 50,
            "country / territory": "United States",
            "source": "Amazon",
            "industry": "Technology",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 23,
            "name": "Daniel Gilbert",
            "id": "daniel-gilbert",
            "net worth": 51.9,
            "age": 59,
            "country / territory": "United States",
            "source": "Quicken Loans",
            "industry": "Finance & Investments",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 24,
            "name": "Gautam Adani & family",
            "id": "gautam-adani-1",
            "net worth": 50.5,
            "age": 58,
            "country / territory": "India",
            "source": "infrastructure, commodities",
            "industry": "Diversified",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        },
        {
            "rank": 25,
            "name": "Phil Knight & family",
            "id": "phil-knight",
            "net worth": 49.9,
            "age": 83,
            "country / territory": "United States",
            "source": "Nike",
            "industry": "Fashion & Retail",
            "status": '<img src="https://images.forbes.com/assets/list-landers/forbes-400-2020/Forbes400-UpArrow1.svg" alt="up arrow">'
        }
    ];

    let selectedHeader = "rank";
    let selectedColIndex = 0;
    let sortOrder = 1;
    personData.sort(function(a, b){
        return sortOrder * (a[selectedHeader] - b[selectedHeader]);
    });

    // Populate player data in table
    const tableBodyHTML = generateDataHTML();
    const tableSelector = ".table-body";
    document.querySelector(tableSelector).innerHTML = tableBodyHTML;

    /*// Highlight data in currently selected column
    highlightColumn(selectedColIndex);*/

    // Event listeners for clicking headers
    // Need event listener for headers: [data-row="h1"]
        // If currently selected header is clicked...
        // If any other header is clicked...

    document.querySelectorAll('.rank[role="columnheader"], .netWorth[role="columnheader"], .age[role="columnheader"]').forEach(function(item){ 
    //document.querySelectorAll('[role="columnheader"]').forEach(function(item){
        item.addEventListener("click", function(event){
            const headerElement = event.target.closest('[role="columnheader"]'); // want the header ancestor
            console.log("headerElement", headerElement);
            
            let selectedHeader = headerElement.textContent.trim().toLowerCase();
            console.log("selectedHeader", selectedHeader);

            // Check if this header is currently selected or not
            if(headerElement.classList.contains('active-sort')){
                // This header is currently selected; reverse sort order for this header/column
                
                // Identify if this column data is sorted in ascending or descending order
                if(headerElement.querySelector(".caret").classList.contains("descending")){
                    // Currently in descending order; reverse to ascending order

                    // Update selected header arrow to reflect new sorting direction
                    headerElement.querySelector(".caret").classList.remove("descending");
                    headerElement.querySelector(".caret").classList.add("ascending");

                    // Reverse order of data
                    let sortOrder = 1; // ascending order
                    personData.sort(function(a, b){
                        return sortOrder * (a[selectedHeader] - b[selectedHeader]);
                    });

                    // Update data in DOM
                    const tableBodyHTML = generateDataHTML();
                    document.querySelector(tableSelector).innerHTML = tableBodyHTML;
                    //highlightColumn(selectedColIndex); // because highlighting gets removed when we repopulated data

                }else{
                    // Currently in ascending order; reverse to descending order

                    // Update selected header arrow to reflect new sorting direction
                    headerElement.querySelector(".caret").classList.add("descending");
                    headerElement.querySelector(".caret").classList.remove("ascending");

                    // Reverse order of data
                    let sortOrder = -1; // descending order
                    personData.sort(function(a, b){
                        return sortOrder * (a[selectedHeader] - b[selectedHeader]);
                    });

                    // Update data in DOM
                    const tableBodyHTML = generateDataHTML();
                    document.querySelector(tableSelector).innerHTML = tableBodyHTML;
                    //highlightColumn(selectedColIndex); // because highlighting gets removed when we repopulated data
                }
            }else{
                // This header is NOT currently selected; select this header and its corresponding column data
                
                // Sort data by this column in descending order
                let sortOrder = -1; // descending order
                personData.sort(function(a, b){
                    return sortOrder * (a[selectedHeader] - b[selectedHeader]);
                });

                // Update data in DOM
                const tableBodyHTML = generateDataHTML();
                document.querySelector(tableSelector).innerHTML = tableBodyHTML;

                // Remove selection from previously selected header/col, and make this header/col selected
                //highlightColumn(selectedColIndex);

                // Remove .active-sort class from header that currently has it
                document.querySelectorAll(".active-sort").forEach(function(item){
                    item.classList.remove("active-sort");
                });

                // Remove arrows from previously selected header, and add arrows to this new header
                document.querySelectorAll(".header-name .indicator").forEach(function(item){
                    item.remove();
                });
                const sortArrowElement = document.createElement('div');
                sortArrowElement.className = "indicator";
                sortArrowElement.innerHTML = getSortArrowHTML();
                headerElement.classList.add("active-sort");
                headerElement.querySelector(".display").appendChild(sortArrowElement);
            }
        });
    });

    function getSortArrowHTML(){
        return '<div class="caret descending"><svg class="fs-icon fs-icon--chevron-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"></path><path transform="rotate(134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"></path></svg></div>';
    }

    function generateDataHTML(){
        let tableBodyHTML = "";
        for(let i = 0; i < personData.length; i++){
            const person = personData[i];
            const rowHTML = `
                <div role="row" id="${person.id}" class="table-row " style="display: flex; flex: 1 0 auto; min-width: 0px;">
                    <div class="rank" role="cell" style="box-sizing: border-box; flex: 150 0 auto; min-width: 0px; width: 150px;">${person.rank}.</div>
                    <div class="personName" role="cell" style="box-sizing: border-box; flex: 150 0 auto; min-width: 0px; width: 150px;">
                        <div>${person.name} </div>
                    </div>
                    <div class="netWorth" role="cell" style="box-sizing: border-box; flex: 150 0 auto; min-width: 0px; width: 150px;">
                        <div>$${person["net worth"]} B
                            <div class="status">${person.status}</div>
                        </div>
                    </div>
                    <div class="age" role="cell" style="box-sizing: border-box; flex: 150 0 auto; min-width: 0px; width: 150px;">
                        <div>${person.age}</div>
                    </div>
                    <div class="countryOfCitizenship" role="cell" style="box-sizing: border-box; flex: 150 0 auto; min-width: 0px; width: 150px;">${person["country / territory"]}</div>
                    <div class="source" role="cell" style="box-sizing: border-box; flex: 150 0 auto; min-width: 0px; width: 150px;">
                        <div class="source-column">
                            <div>${person.source}<span class="expand-row__icon expand-row__icon--mobile"><svg class="fs-icon fs-icon--chevron-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"></path><path transform="rotate(134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"></path></svg></span></div>
                            <div class="spac-star"></div>
                        </div>
                    </div>
                    <div class="category" role="cell" style="box-sizing: border-box; flex: 150 0 auto; min-width: 0px; width: 150px;">
                        <div>${person.industry} <span class="expand-row__icon"><svg class="fs-icon fs-icon--chevron-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"></path><path transform="rotate(134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"></path></svg></span></div>
                    </div>
                </div>
            `;
            tableBodyHTML += rowHTML;
        }
        return tableBodyHTML;
    }
}, 0);