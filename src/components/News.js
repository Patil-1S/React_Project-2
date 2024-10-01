import React, { Component } from "react";
import NewsItem from "./NewsItem";
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'

export class News extends Component {
  articles = [
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Alex Sundby, Brian Dakss, Jason Allen, David Yeomans",
      title:
        "Hurricane Helene makes landfall in Florida's Big Bend as Category 4 storm, over 1 million without power - CBS News",
      description:
        "More than 1.1 million customers in Florida were without power as the Helene made landfall in the Big Bend area on Florida's Gulf Coast.",
      url: "https://www.cbsnews.com/news/hurricane-helene-path-florida/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2024/09/27/55454e1d-501d-4688-8499-5833afca581c/thumbnail/1200x630/42be8bb6d1fb0344e2afbebb880346a2/late-night-hurricane.jpg?v=75eebeb27c74c775b9f2d93539861fb6",
      publishedAt: "2024-09-27T04:17:38Z",
      content:
        "Hurricane Helene strengthened to a dangerous Category 4 in the Gulf of Mexico before making landfall in Florida's Big Bend area late Thursday night. Helene was forecast to bring \"catastrophic and dea… [+10381 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Karen DeYoung, Rachel Chason",
      title:
        "Netanyahu dismisses Hezbollah cease-fire push, confounding White House - The Washington Post",
      description:
        "The U.S. said Israel had signaled it would agree to a temporary truce with Hezbollah. Instead, Prime Minister Benjamin Netanyahu vowed to keep fighting.",
      url: "https://www.washingtonpost.com/national-security/2024/09/26/netanyahu-israel-hezbollah-ceasefire/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FXU6N6DYEGOOAAWVCUD3RL6TJQ.JPG&w=1440",
      publishedAt: "2024-09-27T04:10:49Z",
      content:
        "Israels Prime Minister Benjamin Netanyahu on Thursday dismissed a U.S.-backed push for a 21-day cease-fire with Hezbollah in Lebanon and vowed that fighting would continue, even as Biden administrati… [+8363 chars]",
    },
    {
      source: {
        id: null,
        name: "NBCSports.com",
      },
      author: "Charean Williams",
      title:
        "Micah Parsons, Malik Nabers injured on back-to-back plays - NBC Sports",
      description: "Cowboys defensive end Micah Parsons has had a rough night.",
      url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/micah-parsons-malik-nabers-injured-on-back-to-back-plays",
      urlToImage:
        "https://nbcsports.brightspotcdn.com/dims4/default/c490e05/2147483647/strip/true/crop/2384x1341+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F3c%2Fc3%2F56d88b0641699ed98fc8bda35627%2Fhttps-api-imagn.com%2Frest%2Fdownload%2FimageID%3D24332475",
      publishedAt: "2024-09-27T03:15:42Z",
      content:
        "Cowboys defensive end Micah Parsons has had a rough night.\r\nHe got cleared from a concussion in the first half but missed time with a neck injury. \r\nWith 3:30 left, Parsons was rushing on center John… [+641 chars]",
    },
    {
      source: {
        id: null,
        name: "TVLine",
      },
      author: "Charlie Mason",
      title:
        "Grey’s Anatomy Season 21 Premiere Recap: Reversal of Misfortune — Plus, That Steamy Kiss… Damn - TVLine",
      description:
        "Our recap of the Season 21 premiere of 'Grey's Anatomy' has all the deets on Meredith's deal with the devil, Link's big surprise and that steamy kiss.",
      url: "https://tvline.com/lists/greys-anatomy-season-21-premiere-recap-jules-mika-kiss/",
      urlToImage:
        "https://tvline.com/wp-content/uploads/2024/09/greys-anatomy-season-26-episode-1-ellen-pompeo-1.jpg?w=650",
      publishedAt: "2024-09-27T03:00:00Z",
      content:
        "Season 21 of Greys Anatomy got off to a promising start Thursday even as it teased one characters ending.\r\nPicking up shortly after the events of the Season 20 finale (recapped here), If Walls Could … [+4831 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Whitney Vasquez",
      title:
        "Country superstar Shania Twain, 59, looks unrecognizable in dazzling denim at People’s Country Choice Awards - New York Post ",
      description:
        "The denim Barbie was hardly recognizable with her blonde bob.",
      url: "https://nypost.com/2024/09/26/entertainment/country-superstar-looks-unrecognizable-at-peoples-country-choice-awards/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2024/09/newspress-collage-s7hnbh7s9-1727409271958.jpg?quality=75&strip=all&1727394911&w=1024",
      publishedAt: "2024-09-27T02:43:00Z",
      content:
        "She’s not just a pretty face!\r\nQueen of country pop Shania Twain wasn’t impressed with Brad Pitt  but she certainly served when she walked the red carpet at the People’s Country Choice Awards on Thur… [+3683 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Michael Voepel",
      title: "Report: Sky fire Weatherspoon after one season - ESPN",
      description:
        "Teresa Weatherspoon has been fired as head coach after the Sky missed the playoffs for the first time in six seasons, according to the Chicago Sun-Times.",
      url: "https://www.espn.com/wnba/story/_/id/41465026/report-sky-fire-teresa-weatherspoon-one-season-coach",
      urlToImage:
        "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0927%2Fr1392401_1296x729_16%2D9.jpg",
      publishedAt: "2024-09-27T02:26:00Z",
      content:
        "The Chicago Sky have fired head coach Teresa Weatherspoon after just one season with the team, the Chicago Sun-Times reported Thursday night.\r\nSky rookie star Angel Reese appeared to confirm the news… [+1473 chars]",
    },
    {
      source: {
        id: null,
        name: "SciTechDaily",
      },
      author: "SciTechDaily",
      title:
        "Global Myopia Crisis: 1 in 3 Kids Now Near-Sighted - SciTechDaily",
      description: null,
      url: "https://scitechdaily.com/global-myopia-crisis-1-in-3-kids-now-near-sighted/",
      urlToImage: null,
      publishedAt: "2024-09-27T02:20:41Z",
      content: null,
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Greg Wehner",
      title:
        "Titan owner Rush claimed NASA helped develop carbon fiber hull; agency has different story - Fox News",
      description:
        "OceanGate CEO Stockton Rush claimed NASA and aerospace manufacturers helped develop and design the carbon fiber hull, but the space agency said it had little involvement.",
      url: "https://www.foxnews.com/us/titan-owner-rush-claimed-nasa-helped-develop-carbon-fiber-hull-agency-has-different-story",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2024/09/TITAN-submersible-split.jpg",
      publishedAt: "2024-09-27T01:50:00Z",
      content:
        "Stockton Rush, the OceanGate co-founder and CEO behind the ill-fated Titan submersible, claimed the carbon fiber hull of the deep-diving vessel was developed with the help of NASA and aerospace manuf… [+3380 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Helen Regan",
      title:
        "Japan’s next prime minister could be its first woman leader - CNN",
      description:
        "Japan’s ruling party will elect its new leader Friday, and the winner will become the country’s next prime minister.",
      url: "https://www.cnn.com/2024/09/26/asia/japan-ruling-party-election-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/20240926-japan-prime-minister-split.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-09-27T01:32:00Z",
      content:
        "Japans ruling party will elect its new leader Friday, and the winner will become the countrys next prime minister.\r\nOut of a record nine candidates, three frontrunners are fighting a very close race … [+5765 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Marshall Cohen",
      title:
        "Newsmax and Smartmatic settle 2020 election defamation case on eve of trial - CNN",
      description:
        "The pro-Trump cable outlet Newsmax and voting technology company Smartmatic settled a major 2020 election defamation lawsuit Thursday in a last-minute agreement to avoid a high-stakes trial.",
      url: "https://www.cnn.com/2024/09/26/media/newsmax-smartmatic-settle-defamation-case/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2161699508.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-09-27T01:31:00Z",
      content:
        "The pro-Trump cable outlet Newsmax and voting technology company Smartmatic settled a major defamation lawsuit Thursday in a last-minute agreement, averting a high-stakes trial over the airing of fal… [+4112 chars]",
    },
    {
      source: {
        id: null,
        name: "Sports Illustrated",
      },
      author: "Stephanie Apstein",
      title:
        "A’s Fans Hold Onto Old Memories, New Keepsakes in Team’s Farewell to Oakland - Sports Illustrated",
      description:
        "Oakland-Alameda County Coliseum hosted the A’s final home game in the Bay Area on Thursday. Fans mourned and commemorated the team by keeping what they could from the send-off.",
      url: "https://www.si.com/mlb/oakland-as-final-home-game-fans-farewell",
      urlToImage:
        "https://images2.minutemediacdn.com/image/upload/c_crop,w_2036,h_1145,x_121,y_194/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/si/01j8ret0a3ep7hgmtp0x.jpg",
      publishedAt: "2024-09-27T01:11:57Z",
      content:
        "In the end, what they wanted was the dirt. Some fans snuck in wrenches to try to remove seats, and some joked about walking off with urinals, but when 56 years at the Oakland Coliseum came to a drawn… [+5967 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Michelle Watson, Jason Hanna",
      title:
        "Alabama has executed Alan Eugene Miller, the second inmate known to die by nitrogen gas - CNN",
      description:
        "Alan Eugene Miller was executed Thursday evening in Alabama, state officials said, making him the second inmate known to die by nitrogen hypoxia, a controversial method critics say is tantamount to torture.",
      url: "https://www.cnn.com/2024/09/26/us/alan-eugene-miller-alabama-execution/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/220915122311-01-alan-eugene-miller-080599-file.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-09-27T01:10:00Z",
      content:
        "Alan Eugene Miller was executed Thursday evening in Alabama, state officials said, making him the second inmate known to die by nitrogen hypoxia, a controversial method critics say is tantamount to t… [+8436 chars]",
    },
    {
      source: {
        id: null,
        name: "WABC-TV",
      },
      author: null,
      title:
        "NYC Mayor Eric Adams indicted in federal corruption investigation; accused of accepting improper campaign contributions - ABC7 New York",
      description:
        "New York City Mayor Eric Adams is accused of taking bribes and illegal campaign contributions from foreign sources",
      url: "https://abc7ny.com/post/nyc-mayor-eric-adams-indicted-federal-corruption-investigation-administration-fbi/15358522/",
      urlToImage:
        "https://cdn.abcotvs.com/dip/images/15359251_092624-wabc-ap-adams-gracie-img.jpg?w=1600",
      publishedAt: "2024-09-27T00:19:46Z",
      content:
        "NEW YORK (WABC) -- A 57-page five-count federal indictment unsealed on Thursday morning has charged Mayor Eric Adams with bribery, wire fraud and accepting improper campaign contributions.\r\nAdams is … [+7050 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "CHRIS MEGERIAN",
      title:
        "Harris blasts proposals for Ukraine to cede territory to Russia during Zelenskyy meeting - The Associated Press",
      description:
        "Vice President Kamala Harris says calls for Ukraine to cede territory to Russia are “dangerous and unacceptable.” She spoke Thursday while meeting with Ukrainian President Volodymyr Zelenskyy in Washington. The comments from the Democratic nominee for preside…",
      url: "https://apnews.com/article/zelenskyy-joe-biden-kamala-harris-trump-229804fd42332c584dfbe05224634e44",
      urlToImage:
        "https://dims.apnews.com/dims4/default/cfe37fd/2147483647/strip/true/crop/3953x2224+0+210/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F34%2F0d%2Fb547e66d7d23abc384ffee1e43a5%2Fdcb8d5a12c5e429489c272fc8f35aa4c",
      publishedAt: "2024-09-26T23:59:00Z",
      content:
        "WASHINGTON (AP) With American support for Ukraine at a partisan crossroads, Vice President Kamala Harris on Thursday slammed suggestions that Kyiv should cede territory for the sake of peace with Mos… [+7937 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: "POLITICO",
      title:
        "Iranians indicted in connection with Trump campaign hack - POLITICO",
      description: null,
      url: "https://www.politico.com/news/2024/09/26/trump-campaign-hack-iran-indictment-00181321",
      urlToImage: null,
      publishedAt: "2024-09-26T23:15:26Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Hayden Field",
      title:
        "Sam Altman tells OpenAI staff there's no plan for him to receive 'giant equity stake' in company - CNBC",
      description:
        'At an all-hands meeting Thursday, OpenAI CEO Sam Altman denied reports that he received a "giant equity stake" in the company.',
      url: "https://www.cnbc.com/2024/09/26/openais-sam-altman-tells-employees-he-didnt-get-giant-equity-stake.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/108026796-1724873704599-gettyimages-2166044375-AA_13082024_1818768.jpeg?v=1727275084&w=1920&h=1080",
      publishedAt: "2024-09-26T23:07:41Z",
      content:
        'At an all-hands meeting on Thursday, OpenAI CEO Sam Altman denied that there are plans for him to receive a "giant equity stake" in the company, calling that information "just not true," according to… [+3586 chars]',
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: "POLITICO",
      title:
        "Massive civil fraud verdict against Trump gets frosty reception at New York appeals court - POLITICO",
      description: null,
      url: "https://www.politico.com/news/2024/09/26/trump-civil-fraud-appeal-oral-arguments-00181339",
      urlToImage: null,
      publishedAt: "2024-09-26T22:42:22Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Deadline",
      },
      author: "Glenn Garner",
      title:
        "Menéndez Brothers’ Family Slams Ryan Murphy’s ‘Monsters’ As “Repulsive” - Deadline",
      description:
        "Following the Netflix debut of 'Monsters: The Lyle and Erik Menéndez Story', the brothers' family is criticizing Ryan Murphy's depiction.",
      url: "http://deadline.com/2024/09/menendez-brothers-family-slams-ryan-murphy-monsters-repulsive-1236100823/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2024/05/GettyImages-539886710-e1727382379430.jpg?w=1024",
      publishedAt: "2024-09-26T21:05:00Z",
      content:
        "Lyle and Erik Menéndez‘s family are questioning who’s the real “monster” following Ryan Murphy‘s recent Netflix portrayal.\r\nOn Wednesday, Erik’s wife Tammi Menéndez shared a letter written by his aun… [+4055 chars]",
    },
    {
      source: {
        id: null,
        name: "NPR",
      },
      author: "Jane Arraf",
      title:
        "Over 90,000 people in Lebanon had to flee Israel's bombardments this week - NPR",
      description:
        "With Israel and Hezbollah locked in the fiercest fighting in decades, many Lebanese have taken refuge in schools, hotels and other shelters.",
      url: "https://www.npr.org/2024/09/26/nx-s1-5127325/israel-hezbollah-conflict-lebanon-displaced-residents",
      urlToImage:
        "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/6192x3483+0+323/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fbb%2F7d%2F322fa30648c49c1f572f307f7f45%2Fgettyimages-2173373472.jpg",
      publishedAt: "2024-09-26T21:03:55Z",
      content:
        "BEIRUT Around the concrete courtyard of Ahliah School in the center of Lebanons capital, families perch on plastic chairs, sharing news of what houses theyve heard have been destroyed in their villag… [+7185 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Like a Dragon: Pirate Yakuza in Hawaii - Official Combat Gameplay Trailer - IGN",
      description:
        "Enjoy the videos and music that you love, upload original content and share it all with friends, family and the world on YouTube.",
      url: "https://www.youtube.com/",
      urlToImage: "https://www.youtube.com/img/desktop/yt_1200.png",
      publishedAt: "2024-09-26T21:00:27Z",
      content: null,
    }
  ];

  constructor(){
    super();
    this.state={
      articles : this.articles,
      loading : false,
      page:1
    }

  }
   
  handlePrevClick= ()=>{
    this.setState({
      page: this.state.page -1,
      articles : this.articles
    })   
  }
  handleNextClick= ()=>{
    this.setState({
      page: this.state.page +1,
      articles : this.articles
    })  
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0, 45):""} 
            description={element.description?element.description.slice(0, 85):""} imageUrl= {element.urlToImage} newsUrl={element.url}
             author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
