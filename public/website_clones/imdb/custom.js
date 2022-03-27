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
        <div class="ribbonize" data-tconst="tt1024648" data-caller="filmosearch" style="position: relative;"><div class="wl-ribbon standalone retina not-inWL" title="Click to add to watchlist"></div></div>
            </div>
            <div class="lister-item-image float-left">
    
    
    <a href="/title/tt1024648/?ref_=adv_li_i"> <img alt="Argo" class="loadlate" data-tconst="tt1024648" height="98" src="https://m.media-amazon.com/images/M/MV5BNzljNjY3MDYtYzc0Ni00YjU0LWIyNDUtNTE0ZDRiMGExMjZlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg" width="67">
    </a>        </div>
            <div class="lister-item-content">
    <h3 class="lister-item-header">
            <span class="lister-item-index unbold text-primary">9.</span>
        
        <a href="/title/tt1024648/?ref_=adv_li_tt">Argo</a>
        <span class="lister-item-year text-muted unbold">(2012)</span>
    </h3>
        <p class="text-muted ">
                <span class="certificate">R</span>
                     <span class="ghost">|</span> 
                    <span class="runtime">120 min</span>
                     <span class="ghost">|</span> 
                <span class="genre">
    Biography, Drama, Thriller            </span>
        </p>
        <div class="ratings-bar">
        <div class="inline-block ratings-imdb-rating" name="ir" data-value="7.7">
            <span class="global-sprite rating-star imdb-rating"></span>
            <strong>7.7</strong>
        </div>
                <div class="inline-block ratings-user-rating">
                    <span class="userRatingValue" id="urv_tt1024648" data-tconst="tt1024648">
                        <span class="global-sprite rating-star no-rating"></span>
                        <span name="ur" data-value="0" class="rate" data-no-rating="Rate this">Rate this</span>
                    </span>
        <div class="starBarWidget" id="sb_tt1024648">
    <div class="rating rating-list" data-starbar-class="rating-list" data-csrf-token="" data-user="" id="tt1024648|imdb|7.7|7.7|adv_li_tt||advsearch|title" data-ga-identifier="" title="Users rated this 7.7/10 (602,359 votes) - click stars to rate" itemtype="http://schema.org/AggregateRating" itemscope="" itemprop="aggregateRating">
      <meta itemprop="ratingValue" content="7.7">
      <meta itemprop="bestRating" content="10">
      <meta itemprop="ratingCount" content="602359">
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
    <span class="metascore  favorable">86        </span>
            Metascore
                </div>
        </div>
    <p class="text-muted">
    Acting under the cover of a Hollywood producer scouting a location for a science fiction film, a CIA agent launches a dangerous operation to rescue six Americans in Tehran during the U.S. hostage crisis in Iran in 1979.</p>
        <p class="">
        Director:
    <a href="/name/nm0000255/?ref_=adv_li_dr_0">Ben Affleck</a>
                     <span class="ghost">|</span> 
        Stars:
    <a href="/name/nm0000255/?ref_=adv_li_st_0">Ben Affleck</a>, 
    <a href="/name/nm0186505/?ref_=adv_li_st_1">Bryan Cranston</a>, 
    <a href="/name/nm0000422/?ref_=adv_li_st_2">John Goodman</a>, 
    <a href="/name/nm0000273/?ref_=adv_li_st_3">Alan Arkin</a>
        </p>
            <p class="sort-num_votes-visible">
                    <span class="text-muted">Votes:</span>
                    <span name="nv" data-value="602359">602,359</span>
        <span class="ghost">|</span>                <span class="text-muted">Gross:</span>
                    <span name="nv" data-value="136,025,503">$136.03M</span>
                
            </p>
            </div>
        </div>`,
            "US Box Office": 136.03,
            "Year": 2012,
            "Runtime": 120,
            "Number of Votes": 602359,
            "User Rating": 7.7
        },
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