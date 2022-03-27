setTimeout(function(){  
    console.log("within custom.js");
    
    // Person data
    const movieData = [
        {
            "US Box Office": "",
            "Year": 2020,
            "Runtime": 107,
            "Number of Votes": 147979,
            "User Rating": 7.3,
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt9770150" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt9770150/?ref_=adv_li_i"> <img alt="Nomadland" class="loadlate" data-tconst="tt9770150" height="98" src="https://m.media-amazon.com/images/M/MV5BMDRiZWUxNmItNDU5Yy00ODNmLTk0M2ItZjQzZTA5OTJkZjkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">1.</span>
        
        <a href="/title/tt9770150/?ref_=adv_li_tt">Nomadland</a>
        <span class="lister-item-year text-muted unbold">(2020)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">R</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">107 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Drama            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="7.3">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>7.3</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt9770150" data-tconst="tt9770150">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt9770150">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt9770150|imdb|7.3|7.3|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 7.3/10 (147,979 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="7.3">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="147979">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 102.2px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">7.3</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">93        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    A woman in her sixties, after losing everything in the Great Recession, embarks on a journey through the American West, living as a van-dwelling modern-day nomad.</p>
        <p class="">
        Director:
    <a href="/name/nm2125482/?ref_=adv_li_dr_0">Chloé Zhao</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0000531/?ref_=adv_li_st_0">Frances McDormand</a>, 
    <a href="/name/nm0000657/?ref_=adv_li_st_1">David Strathairn</a>, 
    <a href="/name/nm9584508/?ref_=adv_li_st_2">Linda May</a>, 
    <a href="/name/nm11894469/?ref_=adv_li_st_3">Gay DeForest</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="147979">147,979</span>
                
            </p>
            </div>
        </div>`
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt6751668" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt6751668/?ref_=adv_li_i"> <img alt="Parasite" class="loadlate" data-tconst="tt6751668" height="98" src="https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">2.</span>
        
        <a href="/title/tt6751668/?ref_=adv_li_tt">Parasite</a>
        <span class="lister-item-year text-muted unbold">(2019)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">R</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">132 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Comedy, Drama, Thriller            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="8.5">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>8.5</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt6751668" data-tconst="tt6751668">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt6751668">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt6751668|imdb|8.5|8.5|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 8.5/10 (729,094 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="8.5">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="729094">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 119px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">8.5</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">96        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.</p>
        <p class="">
        Director:
    <a href="/name/nm0094435/?ref_=adv_li_dr_0">Bong Joon Ho</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0814280/?ref_=adv_li_st_0">Kang-ho Song</a>, 
    <a href="/name/nm1310525/?ref_=adv_li_st_1">Sun-kyun Lee</a>, 
    <a href="/name/nm1856097/?ref_=adv_li_st_2">Yeo-jeong Cho</a>, 
    <a href="/name/nm6079248/?ref_=adv_li_st_3">Choi Woo-sik</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="729094">729,094</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="53,367,844">$53.37M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 53.37,
            "Year": 2019,
            "Runtime": 132,
            "Number of Votes": 729094,
            "User Rating": 8.5,
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt6966692" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt6966692/?ref_=adv_li_i"> <img alt="Green Book" class="loadlate" data-tconst="tt6966692" height="98" src="https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">3.</span>
        
        <a href="/title/tt6966692/?ref_=adv_li_tt">Green Book</a>
        <span class="lister-item-year text-muted unbold">(2018)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">PG-13</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">130 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Biography, Comedy, Drama            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="8.2">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>8.2</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt6966692" data-tconst="tt6966692">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt6966692">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt6966692|imdb|8.2|8.2|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 8.2/10 (456,949 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="8.2">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="456949">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 114.8px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">8.2</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">69        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.</p>
        <p class="">
        Director:
    <a href="/name/nm0268380/?ref_=adv_li_dr_0">Peter Farrelly</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0001557/?ref_=adv_li_st_0">Viggo Mortensen</a>, 
    <a href="/name/nm0991810/?ref_=adv_li_st_1">Mahershala Ali</a>, 
    <a href="/name/nm0004802/?ref_=adv_li_st_2">Linda Cardellini</a>, 
    <a href="/name/nm1724319/?ref_=adv_li_st_3">Sebastian Maniscalco</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="456949">456,949</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="85,080,171">$85.08M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 85.08,
            "Year": 2018,
            "Runtime": 130,
            "Number of Votes": 456949,
            "User Rating": 8.2,
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt5580390" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt5580390/?ref_=adv_li_i"> <img alt="The Shape of Water" class="loadlate" data-tconst="tt5580390" height="98" src="https://m.media-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">4.</span>
        
        <a href="/title/tt5580390/?ref_=adv_li_tt">The Shape of Water</a>
        <span class="lister-item-year text-muted unbold">(2017)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">R</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">123 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Drama, Fantasy, Romance            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="7.3">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>7.3</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt5580390" data-tconst="tt5580390">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt5580390">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt5580390|imdb|7.3|7.3|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 7.3/10 (406,386 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="7.3">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="406386">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 102.2px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">7.3</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">87        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.</p>
        <p class="">
        Director:
    <a href="/name/nm0868219/?ref_=adv_li_dr_0">Guillermo del Toro</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm1020089/?ref_=adv_li_st_0">Sally Hawkins</a>, 
    <a href="/name/nm0818055/?ref_=adv_li_st_1">Octavia Spencer</a>, 
    <a href="/name/nm0788335/?ref_=adv_li_st_2">Michael Shannon</a>, 
    <a href="/name/nm0427964/?ref_=adv_li_st_3">Doug Jones</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="406386">406,386</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="63,859,435">$63.86M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 63.86,
            "Year": 2017,
            "Runtime": 123,
            "Number of Votes": 406386,
            "User Rating": 7.3,
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt4975722" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt4975722/?ref_=adv_li_i"> <img alt="Moonlight" class="loadlate" data-tconst="tt4975722" height="98" src="https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">5.</span>
        
        <a href="/title/tt4975722/?ref_=adv_li_tt">Moonlight</a>
        <span class="lister-item-year text-muted unbold">(I) (2016)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">R</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">111 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Drama            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="7.4">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>7.4</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt4975722" data-tconst="tt4975722">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt4975722">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt4975722|imdb|7.4|7.4|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 7.4/10 (298,112 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="7.4">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="298112">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 103.6px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">7.4</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">99        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.</p>
        <p class="">
        Director:
    <a href="/name/nm1503575/?ref_=adv_li_dr_0">Barry Jenkins</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0991810/?ref_=adv_li_st_0">Mahershala Ali</a>, 
    <a href="/name/nm0365140/?ref_=adv_li_st_1">Naomie Harris</a>, 
    <a href="/name/nm5218990/?ref_=adv_li_st_2">Trevante Rhodes</a>, 
    <a href="/name/nm7683379/?ref_=adv_li_st_3">Alex R. Hibbert</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="298112">298,112</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="27,854,932">$27.85M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 27.85,
            "Year": 2016,
            "Runtime": 111,
            "Number of Votes": 298112,
            "User Rating": 7.4,
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt1895587" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt1895587/?ref_=adv_li_i"> <img alt="Spotlight" class="loadlate" data-tconst="tt1895587" height="98" src="https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">6.</span>
        
        <a href="/title/tt1895587/?ref_=adv_li_tt">Spotlight</a>
        <span class="lister-item-year text-muted unbold">(I) (2015)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">R</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">129 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Biography, Crime, Drama            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="8.1">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>8.1</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt1895587" data-tconst="tt1895587">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt1895587">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt1895587|imdb|8.1|8.1|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 8.1/10 (456,310 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="8.1">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="456310">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 113.4px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">8.1</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">93        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.</p>
        <p class="">
        Director:
    <a href="/name/nm0565336/?ref_=adv_li_dr_0">Tom McCarthy</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0749263/?ref_=adv_li_st_0">Mark Ruffalo</a>, 
    <a href="/name/nm0000474/?ref_=adv_li_st_1">Michael Keaton</a>, 
    <a href="/name/nm1046097/?ref_=adv_li_st_2">Rachel McAdams</a>, 
    <a href="/name/nm0000630/?ref_=adv_li_st_3">Liev Schreiber</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="456310">456,310</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="45,055,776">$45.06M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 45.06,
            "Year": 2015,
            "Runtime": 129,
            "Number of Votes": 456310,
            "User Rating": 8.1,
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt2562232" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt2562232/?ref_=adv_li_i"> <img alt="Birdman or (The Unexpected Virtue of Ignorance)" class="loadlate" data-tconst="tt2562232" height="98" src="https://m.media-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">7.</span>
        
        <a href="/title/tt2562232/?ref_=adv_li_tt">Birdman or (The Unexpected Virtue of Ignorance)</a>
        <span class="lister-item-year text-muted unbold">(2014)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">R</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">119 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Comedy, Drama            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="7.7">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>7.7</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt2562232" data-tconst="tt2562232">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt2562232">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt2562232|imdb|7.7|7.7|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 7.7/10 (614,766 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="7.7">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="614766">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 107.8px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">7.7</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">87        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.</p>
        <p class="">
        Director:
    <a href="/name/nm0327944/?ref_=adv_li_dr_0">Alejandro G. Iñárritu</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0000474/?ref_=adv_li_st_0">Michael Keaton</a>, 
    <a href="/name/nm0302108/?ref_=adv_li_st_1">Zach Galifianakis</a>, 
    <a href="/name/nm0001570/?ref_=adv_li_st_2">Edward Norton</a>, 
    <a href="/name/nm2057859/?ref_=adv_li_st_3">Andrea Riseborough</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="614766">614,766</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="42,340,598">$42.34M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 42.34,
            "Year": 2014,
            "Runtime": 119,
            "Number of Votes": 614766,
            "User Rating": 7.7,
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt2024544" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt2024544/?ref_=adv_li_i"> <img alt="12 Years a Slave" class="loadlate" data-tconst="tt2024544" height="98" src="https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">8.</span>
        
        <a href="/title/tt2024544/?ref_=adv_li_tt">12 Years a Slave</a>
        <span class="lister-item-year text-muted unbold">(2013)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">R</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">134 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Biography, Drama, History            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="8.1">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>8.1</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt2024544" data-tconst="tt2024544">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt2024544">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt2024544|imdb|8.1|8.1|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 8.1/10 (681,907 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="8.1">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="681907">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 113.4px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">8.1</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">96        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    In the antebellum United States, <a href="/name/nm1185849">Solomon Northup</a>, a free black man from upstate New York, is abducted and sold into slavery.</p>
        <p class="">
        Director:
    <a href="/name/nm2588606/?ref_=adv_li_dr_0">Steve McQueen</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0252230/?ref_=adv_li_st_0">Chiwetel Ejiofor</a>, 
    <a href="/name/nm0931324/?ref_=adv_li_st_1">Michael Kenneth Williams</a>, 
    <a href="/name/nm1055413/?ref_=adv_li_st_2">Michael Fassbender</a>, 
    <a href="/name/nm0000093/?ref_=adv_li_st_3">Brad Pitt</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="681907">681,907</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="56,671,993">$56.67M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 56.67,
            "Year": 2013,
            "Runtime": 134,
            "Number of Votes": 681907,
            "User Rating": 8.1,
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt1655442" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt1655442/?ref_=adv_li_i"> <img alt="The Artist" class="loadlate" data-tconst="tt1655442" height="98" src="https://m.media-amazon.com/images/M/MV5BMDUyZWU5N2UtOWFlMy00MTI0LTk0ZDYtMzFhNjljODBhZDA5XkEyXkFqcGdeQXVyNzA4ODc3ODU@._V1_UY98_CR1,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">10.</span>
        
        <a href="/title/tt1655442/?ref_=adv_li_tt">The Artist</a>
        <span class="lister-item-year text-muted unbold">(I) (2011)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">PG-13</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">100 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Comedy, Drama, Romance            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="7.9">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>7.9</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt1655442" data-tconst="tt1655442">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt1655442">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt1655442|imdb|7.9|7.9|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 7.9/10 (238,931 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="7.9">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="238931">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 110.6px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">7.9</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">89        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    An egomaniacal film star develops a relationship with a young dancer against the backdrop of Hollywood's silent era.</p>
        <p class="">
        Director:
    <a href="/name/nm0371890/?ref_=adv_li_dr_0">Michel Hazanavicius</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0241121/?ref_=adv_li_st_0">Jean Dujardin</a>, 
    <a href="/name/nm0067367/?ref_=adv_li_st_1">Bérénice Bejo</a>, 
    <a href="/name/nm0000422/?ref_=adv_li_st_2">John Goodman</a>, 
    <a href="/name/nm0000342/?ref_=adv_li_st_3">James Cromwell</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="238931">238,931</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="44,671,682">$44.67M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 44.67,
            "Year": 2011,
            "Runtime": 100,
            "Number of Votes": 238931,
            "User Rating": 7.9
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt1504320" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt1504320/?ref_=adv_li_i"> <img alt="The King's Speech" class="loadlate" data-tconst="tt1504320" height="98" src="https://m.media-amazon.com/images/M/MV5BMzU5MjEwMTg2Nl5BMl5BanBnXkFtZTcwNzM3MTYxNA@@._V1_UY98_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">11.</span>
        
        <a href="/title/tt1504320/?ref_=adv_li_tt">The King's Speech</a>
        <span class="lister-item-year text-muted unbold">(2010)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">R</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">118 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Biography, Drama, History            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="8">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>8.0</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt1504320" data-tconst="tt1504320">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt1504320">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt1504320|imdb|8|8|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 8/10 (668,302 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="8">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="668302">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 112px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">8</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">88        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    The story of <a href="/name/nm0454377">King George VI</a>, his impromptu ascension to the throne of the British Empire in 1936, and the speech therapist who helped the unsure monarch overcome his stammer.</p>
        <p class="">
        Director:
    <a href="/name/nm0393799/?ref_=adv_li_dr_0">Tom Hooper</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0000147/?ref_=adv_li_st_0">Colin Firth</a>, 
    <a href="/name/nm0001691/?ref_=adv_li_st_1">Geoffrey Rush</a>, 
    <a href="/name/nm0000307/?ref_=adv_li_st_2">Helena Bonham Carter</a>, 
    <a href="/name/nm0001394/?ref_=adv_li_st_3">Derek Jacobi</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="668302">668,302</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="138,797,449">$138.80M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 138.80,
            "Year": 2010,
            "Runtime": 118,
            "Number of Votes": 668302,
            "User Rating": 8.0
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt1010048" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt1010048/?ref_=adv_li_i"> <img alt="Slumdog Millionaire" class="loadlate" data-tconst="tt1010048" height="98" src="https://m.media-amazon.com/images/M/MV5BZmNjZWI3NzktYWI1Mi00OTAyLWJkNTYtMzUwYTFlZDA0Y2UwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">12.</span>
        
        <a href="/title/tt1010048/?ref_=adv_li_tt">Slumdog Millionaire</a>
        <span class="lister-item-year text-muted unbold">(2008)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">R</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">120 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Drama, Romance            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="8">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>8.0</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt1010048" data-tconst="tt1010048">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt1010048">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt1010048|imdb|8|8|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 8/10 (830,566 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="8">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="830566">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 112px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">8</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">84        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    A Mumbai teenager reflects on his life after being accused of cheating on the Indian version of "Who Wants to be a Millionaire?".</p>
        <p class="">
        Directors:
    <a href="/name/nm0000965/?ref_=adv_li_dr_0">Danny Boyle</a>, 
    <a href="/name/nm0849164/?ref_=adv_li_dr_1">Loveleen Tandan</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm2353862/?ref_=adv_li_st_0">Dev Patel</a>, 
    <a href="/name/nm2951768/?ref_=adv_li_st_1">Freida Pinto</a>, 
    <a href="/name/nm0795661/?ref_=adv_li_st_2">Saurabh Shukla</a>, 
    <a href="/name/nm0438463/?ref_=adv_li_st_3">Anil Kapoor</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="830566">830,566</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="141,319,928">$141.32M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 141.32,
            "Year": 2008,
            "Runtime": 120,
            "Number of Votes": 830566,
            "User Rating": 8.0
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt0887912" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt0887912/?ref_=adv_li_i"> <img alt="The Hurt Locker" class="loadlate" data-tconst="tt0887912" height="98" src="https://m.media-amazon.com/images/M/MV5BYWYxZjU2MmQtMmMzYi00ZWUwLTg2ZWQtMDExZTVlYjM3ZWM1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">13.</span>
        
        <a href="/title/tt0887912/?ref_=adv_li_tt">The Hurt Locker</a>
        <span class="lister-item-year text-muted unbold">(2008)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">R</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">131 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Drama, Thriller, War            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="7.6">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>7.6</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt0887912" data-tconst="tt0887912">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt0887912">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt0887912|imdb|7.6|7.6|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 7.6/10 (442,800 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="7.6">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="442800">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 106.4px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">7.6</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">95        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    During the Iraq War, a Sergeant recently assigned to an army bomb squad is put at odds with his squad mates due to his maverick way of handling his work.</p>
        <p class="">
        Director:
    <a href="/name/nm0000941/?ref_=adv_li_dr_0">Kathryn Bigelow</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0719637/?ref_=adv_li_st_0">Jeremy Renner</a>, 
    <a href="/name/nm1107001/?ref_=adv_li_st_1">Anthony Mackie</a>, 
    <a href="/name/nm1310016/?ref_=adv_li_st_2">Brian Geraghty</a>, 
    <a href="/name/nm0001602/?ref_=adv_li_st_3">Guy Pearce</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="442800">442,800</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="17,017,811">$17.02M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 17.02,
            "Year": 2008,
            "Runtime": 131,
            "Number of Votes": 442800,
            "User Rating": 7.6
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt0477348" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt0477348/?ref_=adv_li_i"> <img alt="No Country for Old Men" class="loadlate" data-tconst="tt0477348" height="98" src="https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">14.</span>
        
        <a href="/title/tt0477348/?ref_=adv_li_tt">No Country for Old Men</a>
        <span class="lister-item-year text-muted unbold">(2007)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">R</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">122 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Crime, Drama, Thriller            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="8.2">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>8.2</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt0477348" data-tconst="tt0477348">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt0477348">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt0477348|imdb|8.2|8.2|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 8.2/10 (934,256 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="8.2">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="934256">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 114.8px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">8.2</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">92        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.</p>
        <p class="">
        Directors:
    <a href="/name/nm0001053/?ref_=adv_li_dr_0">Ethan Coen</a>, 
    <a href="/name/nm0001054/?ref_=adv_li_dr_1">Joel Coen</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0000169/?ref_=adv_li_st_0">Tommy Lee Jones</a>, 
    <a href="/name/nm0000849/?ref_=adv_li_st_1">Javier Bardem</a>, 
    <a href="/name/nm0000982/?ref_=adv_li_st_2">Josh Brolin</a>, 
    <a href="/name/nm0000437/?ref_=adv_li_st_3">Woody Harrelson</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="934256">934,256</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="74,283,625">$74.28M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 74.28,
            "Year": 2007,
            "Runtime": 122,
            "Number of Votes": 934256,
            "User Rating": 8.2
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt0407887" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt0407887/?ref_=adv_li_i"> <img alt="The Departed" class="loadlate" data-tconst="tt0407887" height="98" src="https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">15.</span>
        
        <a href="/title/tt0407887/?ref_=adv_li_tt">The Departed</a>
        <span class="lister-item-year text-muted unbold">(2006)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">R</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">151 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Crime, Drama, Thriller            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="8.5">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>8.5</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt0407887" data-tconst="tt0407887">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt0407887">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt0407887|imdb|8.5|8.5|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 8.5/10 (1,277,475 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="8.5">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="1277475">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 119px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">8.5</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">85        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.</p>
        <p class="">
        Director:
    <a href="/name/nm0000217/?ref_=adv_li_dr_0">Martin Scorsese</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0000138/?ref_=adv_li_st_0">Leonardo DiCaprio</a>, 
    <a href="/name/nm0000354/?ref_=adv_li_st_1">Matt Damon</a>, 
    <a href="/name/nm0000197/?ref_=adv_li_st_2">Jack Nicholson</a>, 
    <a href="/name/nm0000242/?ref_=adv_li_st_3">Mark Wahlberg</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="1277475">1,277,475</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="132,384,315">$132.38M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 132.38,
            "Year": 2006,
            "Runtime": 151,
            "Number of Votes": 1277475,
            "User Rating": 8.5
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt0405159" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt0405159/?ref_=adv_li_i"> <img alt="Million Dollar Baby" class="loadlate" data-tconst="tt0405159" height="98" src="https://m.media-amazon.com/images/M/MV5BMTkxNzA1NDQxOV5BMl5BanBnXkFtZTcwNTkyMTIzMw@@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">16.</span>
        
        <a href="/title/tt0405159/?ref_=adv_li_tt">Million Dollar Baby</a>
        <span class="lister-item-year text-muted unbold">(2004)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">PG-13</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">132 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Drama, Sport            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="8.1">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>8.1</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt0405159" data-tconst="tt0405159">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt0405159">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt0405159|imdb|8.1|8.1|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 8.1/10 (672,004 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="8.1">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="672004">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 113.4px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">8.1</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">86        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    A determined woman works with a hardened boxing trainer to become a professional.</p>
        <p class="">
        Director:
    <a href="/name/nm0000142/?ref_=adv_li_dr_0">Clint Eastwood</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0005476/?ref_=adv_li_st_0">Hilary Swank</a>, 
    <a href="/name/nm0000142/?ref_=adv_li_st_1">Clint Eastwood</a>, 
    <a href="/name/nm0000151/?ref_=adv_li_st_2">Morgan Freeman</a>, 
    <a href="/name/nm0059431/?ref_=adv_li_st_3">Jay Baruchel</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="672004">672,004</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="100,492,203">$100.49M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 100.49,
            "Year": 2004,
            "Runtime": 132,
            "Number of Votes": 672004,
            "User Rating": 8.1
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt0375679" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt0375679/?ref_=adv_li_i"> <img alt="Crash" class="loadlate" data-tconst="tt0375679" height="98" src="https://m.media-amazon.com/images/M/MV5BOTk1OTA1MjIyNV5BMl5BanBnXkFtZTcwODQxMTkyMQ@@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">17.</span>
        
        <a href="/title/tt0375679/?ref_=adv_li_tt">Crash</a>
        <span class="lister-item-year text-muted unbold">(I) (2004)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">R</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">112 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Crime, Drama, Thriller            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="7.8">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>7.8</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt0375679" data-tconst="tt0375679">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt0375679">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt0375679|imdb|7.8|7.8|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 7.8/10 (432,120 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="7.8">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="432120">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 109.2px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">7.8</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">66        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    Los Angeles citizens with vastly separate lives collide in interweaving stories of race, loss and redemption.</p>
        <p class="">
        Director:
    <a href="/name/nm0353673/?ref_=adv_li_dr_0">Paul Haggis</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0000332/?ref_=adv_li_st_0">Don Cheadle</a>, 
    <a href="/name/nm0000113/?ref_=adv_li_st_1">Sandra Bullock</a>, 
    <a href="/name/nm0628601/?ref_=adv_li_st_2">Thandiwe Newton</a>, 
    <a href="/name/nm0037410/?ref_=adv_li_st_3">Karina Arroyave</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="432120">432,120</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="54,580,300">$54.58M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 54.58,
            "Year": 2004,
            "Runtime": 112,
            "Number of Votes": 432120,
            "User Rating": 7.8
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt0167260" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt0167260/?ref_=adv_li_i"> <img alt="The Lord of the Rings: The Return of the King" class="loadlate" data-tconst="tt0167260" height="98" src="https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">18.</span>
        
        <a href="/title/tt0167260/?ref_=adv_li_tt">The Lord of the Rings: The Return of the King</a>
        <span class="lister-item-year text-muted unbold">(2003)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">PG-13</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">201 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Action, Adventure, Drama            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="9">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>9.0</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt0167260" data-tconst="tt0167260">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt0167260">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt0167260|imdb|9|9|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 9/10 (1,765,461 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="9">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="1765461">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 126px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">9</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">94        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.</p>
        <p class="">
        Director:
    <a href="/name/nm0001392/?ref_=adv_li_dr_0">Peter Jackson</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0000704/?ref_=adv_li_st_0">Elijah Wood</a>, 
    <a href="/name/nm0001557/?ref_=adv_li_st_1">Viggo Mortensen</a>, 
    <a href="/name/nm0005212/?ref_=adv_li_st_2">Ian McKellen</a>, 
    <a href="/name/nm0089217/?ref_=adv_li_st_3">Orlando Bloom</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="1765461">1,765,461</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="377,845,905">$377.85M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 377.85,
            "Year": 2003,
            "Runtime": 201,
            "Number of Votes": 1765461,
            "User Rating": 9.0
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt0299658" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt0299658/?ref_=adv_li_i"> <img alt="Chicago" class="loadlate" data-tconst="tt0299658" height="98" src="https://m.media-amazon.com/images/M/MV5BN2E3NDU1ZTktNzZjNy00MWU3LWI4YmMtMjdjNTIzMDU0MDdiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">19.</span>
        
        <a href="/title/tt0299658/?ref_=adv_li_tt">Chicago</a>
        <span class="lister-item-year text-muted unbold">(2002)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">PG-13</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">113 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Comedy, Crime, Musical            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="7.2">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>7.2</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt0299658" data-tconst="tt0299658">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt0299658">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt0299658|imdb|7.2|7.2|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 7.2/10 (226,569 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="7.2">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="226569">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 100.8px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">7.2</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">81        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    Two death-row murderesses develop a fierce rivalry while competing for publicity, celebrity, and a sleazy lawyer's attention.</p>
        <p class="">
        Director:
    <a href="/name/nm0551128/?ref_=adv_li_dr_0">Rob Marshall</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0000250/?ref_=adv_li_st_0">Renée Zellweger</a>, 
    <a href="/name/nm0001876/?ref_=adv_li_st_1">Catherine Zeta-Jones</a>, 
    <a href="/name/nm0000152/?ref_=adv_li_st_2">Richard Gere</a>, 
    <a href="/name/nm0004875/?ref_=adv_li_st_3">Taye Diggs</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="226569">226,569</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="170,687,518">$170.69M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 170.69,
            "Year": 2002,
            "Runtime": 113,
            "Number of Votes": 226569,
            "User Rating": 7.2
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt0268978" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt0268978/?ref_=adv_li_i"> <img alt="A Beautiful Mind" class="loadlate" data-tconst="tt0268978" height="98" src="https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">20.</span>
        
        <a href="/title/tt0268978/?ref_=adv_li_tt">A Beautiful Mind</a>
        <span class="lister-item-year text-muted unbold">(2001)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">PG-13</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">135 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Biography, Drama            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="8.2">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>8.2</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt0268978" data-tconst="tt0268978">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt0268978">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt0268978|imdb|8.2|8.2|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 8.2/10 (904,539 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="8.2">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="904539">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 114.8px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">8.2</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">72        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    After <a href="/name/nm1171285">John Nash</a>, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.</p>
        <p class="">
        Director:
    <a href="/name/nm0000165/?ref_=adv_li_dr_0">Ron Howard</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0000128/?ref_=adv_li_st_0">Russell Crowe</a>, 
    <a href="/name/nm0000438/?ref_=adv_li_st_1">Ed Harris</a>, 
    <a href="/name/nm0000124/?ref_=adv_li_st_2">Jennifer Connelly</a>, 
    <a href="/name/nm0001626/?ref_=adv_li_st_3">Christopher Plummer</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="904539">904,539</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="170,742,341">$170.74M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 170.74,
            "Year": 2001,
            "Runtime": 135,
            "Number of Votes": 904539,
            "User Rating": 8.2
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt0172495" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt0172495/?ref_=adv_li_i"> <img alt="Gladiator" class="loadlate" data-tconst="tt0172495" height="98" src="https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">21.</span>
        
        <a href="/title/tt0172495/?ref_=adv_li_tt">Gladiator</a>
        <span class="lister-item-year text-muted unbold">(2000)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">R</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">155 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Action, Adventure, Drama            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="8.5">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>8.5</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt0172495" data-tconst="tt0172495">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt0172495">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt0172495|imdb|8.5|8.5|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 8.5/10 (1,443,978 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="8.5">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="1443978">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 119px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">8.5</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">67        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.</p>
        <p class="">
        Director:
    <a href="/name/nm0000631/?ref_=adv_li_dr_0">Ridley Scott</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0000128/?ref_=adv_li_st_0">Russell Crowe</a>, 
    <a href="/name/nm0001618/?ref_=adv_li_st_1">Joaquin Phoenix</a>, 
    <a href="/name/nm0001567/?ref_=adv_li_st_2">Connie Nielsen</a>, 
    <a href="/name/nm0001657/?ref_=adv_li_st_3">Oliver Reed</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="1443978">1,443,978</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="187,705,427">$187.71M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 187.71,
            "Year": 2000,
            "Runtime": 155,
            "Number of Votes": 1443978,
            "User Rating": 8.5
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt0169547" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt0169547/?ref_=adv_li_i"> <img alt="American Beauty" class="loadlate" data-tconst="tt0169547" height="98" src="https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">22.</span>
        
        <a href="/title/tt0169547/?ref_=adv_li_tt">American Beauty</a>
        <span class="lister-item-year text-muted unbold">(1999)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">R</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">122 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Drama            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="8.4">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>8.4</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt0169547" data-tconst="tt0169547">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt0169547">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt0169547|imdb|8.4|8.4|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 8.4/10 (1,126,923 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="8.4">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="1126923">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 117.6px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">8.4</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">84        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.</p>
        <p class="">
        Director:
    <a href="/name/nm0005222/?ref_=adv_li_dr_0">Sam Mendes</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0000228/?ref_=adv_li_st_0">Kevin Spacey</a>, 
    <a href="/name/nm0000906/?ref_=adv_li_st_1">Annette Bening</a>, 
    <a href="/name/nm0000301/?ref_=adv_li_st_2">Thora Birch</a>, 
    <a href="/name/nm0004747/?ref_=adv_li_st_3">Wes Bentley</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="1126923">1,126,923</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="130,096,601">$130.10M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 130.10,
            "Year": 1999,
            "Runtime": 122,
            "Number of Votes": 1126923,
            "User Rating": 8.4
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt0138097" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt0138097/?ref_=adv_li_i"> <img alt="Shakespeare in Love" class="loadlate" data-tconst="tt0138097" height="98" src="https://m.media-amazon.com/images/M/MV5BM2ZkNjM5MjEtNTBlMC00OTI5LTgyYmEtZDljMzNmNzhiNzY0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY98_CR1,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">23.</span>
        
        <a href="/title/tt0138097/?ref_=adv_li_tt">Shakespeare in Love</a>
        <span class="lister-item-year text-muted unbold">(1998)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">R</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">123 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Comedy, Drama, History            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="7.1">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>7.1</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt0138097" data-tconst="tt0138097">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt0138097">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt0138097|imdb|7.1|7.1|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 7.1/10 (222,421 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="7.1">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="222421">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 99.4px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">7.1</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">87        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    The world's greatest ever playwright, <a href="/name/nm0000636">William Shakespeare</a>, is young, out of ideas and short of cash, but meets his ideal woman and is inspired to write one of his most famous plays.</p>
        <p class="">
        Director:
    <a href="/name/nm0006960/?ref_=adv_li_dr_0">John Madden</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0000569/?ref_=adv_li_st_0">Gwyneth Paltrow</a>, 
    <a href="/name/nm0001212/?ref_=adv_li_st_1">Joseph Fiennes</a>, 
    <a href="/name/nm0001691/?ref_=adv_li_st_2">Geoffrey Rush</a>, 
    <a href="/name/nm0929489/?ref_=adv_li_st_3">Tom Wilkinson</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="222421">222,421</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="100,317,794">$100.32M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 100.32,
            "Year": 1998,
            "Runtime": 123,
            "Number of Votes": 222421,
            "User Rating": 7.1
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt0120338" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt0120338/?ref_=adv_li_i"> <img alt="Titanic" class="loadlate" data-tconst="tt0120338" height="98" src="https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">24.</span>
        
        <a href="/title/tt0120338/?ref_=adv_li_tt">Titanic</a>
        <span class="lister-item-year text-muted unbold">(1997)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">PG-13</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">194 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Drama, Romance            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="7.9">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>7.9</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt0120338" data-tconst="tt0120338">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt0120338">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt0120338|imdb|7.9|7.9|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 7.9/10 (1,126,339 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="7.9">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="1126339">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 110.6px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">7.9</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">75        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.</p>
        <p class="">
        Director:
    <a href="/name/nm0000116/?ref_=adv_li_dr_0">James Cameron</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0000138/?ref_=adv_li_st_0">Leonardo DiCaprio</a>, 
    <a href="/name/nm0000701/?ref_=adv_li_st_1">Kate Winslet</a>, 
    <a href="/name/nm0000708/?ref_=adv_li_st_2">Billy Zane</a>, 
    <a href="/name/nm0000870/?ref_=adv_li_st_3">Kathy Bates</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="1126339">1,126,339</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="659,325,379">$659.33M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 659.33,
            "Year": 1997,
            "Runtime": 194,
            "Number of Votes": 1126339,
            "User Rating": 7.9
        },
        {
            "html": `<div class="lister-item mode-advanced">
            <div class="lister-top-right">
        <div class="ribbonize" data-tconst="tt0116209" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt0116209/?ref_=adv_li_i"> <img alt="The English Patient" class="loadlate" data-tconst="tt0116209" height="98" src="https://m.media-amazon.com/images/M/MV5BOTkxZTdkNTQtM2QwOS00NzRlLWEyMGItYTcxOTE4NTgyNGVhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">25.</span>
        
        <a href="/title/tt0116209/?ref_=adv_li_tt">The English Patient</a>
        <span class="lister-item-year text-muted unbold">(1996)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">R</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">162 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Drama, Romance, War            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="7.4">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>7.4</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt0116209" data-tconst="tt0116209">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt0116209">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt0116209|imdb|7.4|7.4|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 7.4/10 (187,453 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="7.4">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="187453">
    <span class="rating-bg">&nbsp;</span>
    <span class="rating-imdb " style="width: 103.6px">&nbsp;</span>
    <span class="rating-stars">
          <a rel="nofollow" title="Register or login to rate this title"><span>1</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>2</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>3</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>4</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>5</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>6</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>7</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>8</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>9</span></a>
          <a rel="nofollow" title="Register or login to rate this title"><span>10</span></a>
    </span>
    <span class="rating-rating "><span class="value">7.4</span><span class="grey">/</span><span class="grey">10</span></span>
    <span class="rating-cancel "><a title="Delete" rel="nofollow"><span>X</span></a></span>
    &nbsp;</div>
        </div>
                </div>
                <div class="inline-block ratings-metascore">
    <span class="metascore  favorable">87        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    At the close of World War II, a young nurse tends to a badly-burned plane crash victim. His past is shown in flashbacks, revealing an involvement in a fateful love affair.</p>
        <p class="">
        Director:
    <a href="/name/nm0005237/?ref_=adv_li_dr_0">Anthony Minghella</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0000146/?ref_=adv_li_st_0">Ralph Fiennes</a>, 
    <a href="/name/nm0000300/?ref_=adv_li_st_1">Juliette Binoche</a>, 
    <a href="/name/nm0000353/?ref_=adv_li_st_2">Willem Dafoe</a>, 
    <a href="/name/nm0000218/?ref_=adv_li_st_3">Kristin Scott Thomas</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="187453">187,453</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="78,651,430">$78.65M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 78.65,
            "Year": 1996,
            "Runtime": 162,
            "Number of Votes": 187453,
            "User Rating": 74
        }
    ];

    let selectedHeader = "Year";
    let selectedColIndex = 0;
    let sortOrder = -1;
    movieData.sort(function(a, b){
        return sortOrder * (a[selectedHeader] - b[selectedHeader]);
    });

    // Populate data in table
    const tableBodyHTML = generateDataHTML();
    const tableSelector = ".lister-list";
    document.querySelector(tableSelector).innerHTML = tableBodyHTML;

    /*// Highlight data in currently selected column
    highlightColumn(selectedColIndex);*/

    // Event listeners for clicking headers
    // Need event listener for headers: [data-row="h1"]
        // If currently selected header is clicked...
        // If any other header is clicked...

    document.querySelectorAll('.sorting').forEach(function(item){ 
        item.addEventListener("click", function(event){
            const headerElement = event.target.closest('a'); // want the header ancestor
            console.log("headerElement", headerElement);
            
            if(headerElement){
                let selectedHeader = headerElement.textContent.trim();
                if(selectedHeader.substring(selectedHeader.length-1) === "▼" || selectedHeader.substring(selectedHeader.length-1) === "▲"){
                    // Trim off arrow at end
                    selectedHeader = selectedHeader.substring(0, selectedHeader.length - 1);
                }
                console.log("selectedHeader", selectedHeader);

                // If this is a sortable header, sort by it; otherwise do nothing
                if(Object.keys(movieData[0]).includes(selectedHeader)){
                    // Check if this header is currently selected or not
                    if(headerElement.textContent.indexOf("▼") > -1 || headerElement.textContent.indexOf("▲") > -1 ){
                        // This header is currently selected; reverse sort order for this header/column
                        
                        // Identify if this column data is sorted in ascending or descending order
                        if(headerElement.textContent.indexOf("▼") > -1){
                            // Currently in descending order; reverse to ascending order

                            // Update selected header arrow to reflect new sorting direction
                            headerElement.removeChild(headerElement.childNodes[1]);
                            headerElement.append("▲");

                            // Reverse order of data
                            let sortOrder = 1; // ascending order
                            movieData.sort(function(a, b){
                                return sortOrder * (a[selectedHeader] - b[selectedHeader]);
                            });

                            // Update data in DOM
                            const tableBodyHTML = generateDataHTML();
                            document.querySelector(tableSelector).innerHTML = tableBodyHTML;
                            //highlightColumn(selectedColIndex); // because highlighting gets removed when we repopulated data

                        }else{
                            // Currently in ascending order; reverse to descending order

                            // Update selected header arrow to reflect new sorting direction
                            headerElement.removeChild(headerElement.childNodes[1]);
                            headerElement.append("▼");

                            // Reverse order of data
                            let sortOrder = -1; // descending order
                            movieData.sort(function(a, b){
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
                        movieData.sort(function(a, b){
                            return sortOrder * (a[selectedHeader] - b[selectedHeader]);
                        });

                        // Update data in DOM
                        const tableBodyHTML = generateDataHTML();
                        document.querySelector(tableSelector).innerHTML = tableBodyHTML;

                        // Remove selection from previously selected header/col, and make this header/col selected
                        //highlightColumn(selectedColIndex);

                        // Remove bold and arrow from other headers (one of them has it)
                        document.querySelectorAll(".sorting a").forEach(function(item){
                            if(item.querySelector("strong")){
                                item.innerHTML = item.querySelector("strong").textContent;
                            }
                        });

                        headerElement.innerHTML = `<strong>${selectedHeader}</strong>▼`;
                    }
                }
            }
        });
    });

    function generateDataHTML(){
        let tableBodyHTML = "";
        for(let i = 0; i < movieData.length; i++){
            const movie = movieData[i];
            const rowHTML = movie.html;
            tableBodyHTML += rowHTML;
        }
        return tableBodyHTML;
    }
}, 0);