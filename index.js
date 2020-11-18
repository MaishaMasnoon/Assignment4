import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import star1 from './star1.jpg';
import star2 from './star2.jpg';
import star4 from './star4.jpg';
import button from './homeButton.png';

class Square extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			HomePage: 'flex',
			Article1: 'none',
			Article2: 'none',
			Article3: 'none',
			error: null,
			isLoaded: false,
			items: [],
		};
		this.handleHomePage = this.handleHomePage.bind(this);
		this.handleArticle1 = this.handleArticle1.bind(this);
		this.handleArticle2 = this.handleArticle2.bind(this);
		this.handleArticle3 = this.handleArticle3.bind(this);
	}
	handleHomePage() {
		this.setState({
			HomePage: 'flex',
			Article1: 'none',
			Article2: 'none',
			Article3: 'none',
		})
	}

	handleArticle1() {
		console.log("Hello World");

		this.setState({
			HomePage: 'none',
			Article1: 'flex',
			Article2: 'none',
			Article3: 'none',
		})
	}
	handleArticle2() {
		console.log("Hello World");

		this.setState({
			HomePage: 'none',
			Article1: 'none',
			Article2: 'flex',
			Article3: 'none',
		})
	}
	handleArticle3() {
		console.log("Hello World");
		console.log(this.state.items);
		this.setState({
			HomePage: 'none',
			Article1: 'none',
			Article2: 'none',
			Article3: 'flex',
		})
	}
	componentDidMount() {
		fetch("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1a54a811dffc4659ae980af17913ebaa")
			.then(res => res.json())
			.then(res => {
				this.setState({
					isLoaded: true,
					items: res.articles
				});
			},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)

	}
	render() {
		var { error, isLoaded, items } = this.state;



		var itemInfo = items.map(item => <div><b>{item.title}</b><div className="lineGap"></div></div>);
		//refressing the headlines in every 5 second using setInterval
		setInterval(itemInfo, 5000);
		var i;
		var x;


		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className="square">

					<div className="head">
						<button onClick={this.handleHomePage} className="btn"><img src={button} className="btn" /></button>
						<h1 className="headTxt">
							LITTLE WONDERS OF THE SKY
        				</h1>
					</div>

					<div className="body" style={{ display: this.state.HomePage }}>

						<div className="main">
							<div className="lineGap"></div>
							<div className="summary">
								It has always been my dream to live in the Northern Hemisphere, to gaze at the night
								sky full of starry heavens. I have always wondered how would it feel to find my way home by just
								looking at the North Star(Polaris). From an early age people have been curious about the stars, some even chose to
								put faith in them and in certain civilization there was tradition for worshiping the stars.
								<div className="lineGap"></div>
								As an admierer of stars, I am
								perticularly drawn to North Star because of it's exceptional qualities.
							 </div>
							<a href="#" onClick={this.handleArticle1}>
								<h3 className="link">
									STAR OF NORTHERN SKY
	        				</h3>
							</a>
							<img src={star1} className="pic1" />

							<div className="date">
								11 November, 2020
	        				</div>
							<div className="smallGap"></div>
							<div className="summary">
								<b>"What's the light that will guide you out of your own tangeld woods- both
								the woods 'out there' in the world and the one's 'in here', inside your own mind"-Rick Hanson, Ph.D.</b>
								<div className="lineGap"></div>
									The exceptional North star located at the north celestial pole is also known as Pole star or Polaris.
									It is famous for many reasons. For one, it appears to be holding still in the sky while the entire Northern
									sky moves around it. Second, it’s almost exactly aligned with the earth’s axis.<b>[1]</b>

							</div>
							<div className="lineGap"></div>
							<div className="summary">
								When I was a kid, I used to believe that stars are alive. What a funny thought, right? However, like living
								things, stars also have life cycle. They are formed by multiple gaseous Components and shine brightly because
								of the energy produced by nuclear reacton. After a time period when they exaust all the energy they die.
							</div>
							<div className="lineGap"></div>
							<a href="#" onClick={this.handleArticle2}>
								<h3 className="link">
									UP ABOVE AND BEYOND
	        					</h3>
							</a>
							<img src={star2} className="pic1" />
							<div className="date">
								12 November, 2020
	        				</div>
							<div className="smallGap"></div>
							<div className="summary">
								Stars are formed in clouds of gas and dust, known as nebulae. Nuclear reactions at the centre (or core) of
								stars provides enough energy to make them shine brightly for many years.. The exact lifetime of a star depends
								very much on its size. Very large, massive stars burn their fuel much faster than smaller stars and may only last
								a few hundred thousand years.<b>[2]</b>
							</div>
							<div className="lineGap"></div>
							<a href="#" onClick={this.handleArticle3}>
								<h3 className="link">
									BELIEFS OF ANCIENT CIVILIZATION
	        				</h3>
							</a>
							<img src={star4} className="pic1" />
							<div className="date">
								16 November, 2020
	        				</div>
							<div className="smallGap"></div>
							<div className="summary">
								For tens of thousands of years, human beings have been fascinated by the patterns of stars in the sky above Earth.
								Early on, they noticed that the Moon changed shape from night to night as well as its position among the stars.
								Like many ancient peoples, the Egyptians studied the night sky, taking measurements from the stars to accurately align
								their pyramids and sun temples with the earth's four cardinal points.<b>[3]</b>
								<div className="lineGap"></div>
								Taking sightings of the Great Bear and Orion with an instrument called a merkhet,
								astronomer-priests marked out the foundations of buildings with astonishing accuracy.<b>[3, 4]</b>
							</div>
						</div>

						<div className="nav">
							<a href="#" onClick={this.handleHomePage} className="anchor">Home</a>
							<h3>TODAY'S HEADLINE</h3>
							<ul>
								{itemInfo}
							</ul>
						</div>
					</div>


					<div style={{ display: this.state.Article1 }} className="article">
						<div className="margin">
							<h3 className="aPic1">
								STARS OF NORTHERN SKY
					    	</h3>

							<img src={star1} className="aPic1" />
							<div className="date1">
								11 November, 2020
	        				</div>
							<div className="aPic1">
								<b>"What's the light that will guide you out of your own tangeld woods- both
								the woods 'out there' in the world and the one's 'in here', inside your own mind"-Rick Hanson, Ph.D.</b>
								<div className="lineGap"></div>
									The exceptional North star located at the north celestial pole is also known as Pole star or Polaris.
									It is famous for many reasons <b>[1]</b>. For one, it appears to be holding still in the sky while the entire Northern
									sky moves around it. Second, it’s almost exactly aligned with the earth’s axis. This means that if you venture
									further north, it will appear to ascend higher in the sky. At the North Pole, the North Star is visible directly
									overhead.
									<div className="lineGap"></div>
									These qualities have made the North Star a well-known beacon and navigation tool. It provided nighttime guidance
									for slaves escaping to northern states and Canada before the end of the Civil War. To locate the North Star, the
									slaves looked for two stars on the edge of the cup of the Big Dipper (what they referred to as the “Drinking Gourd”)
									first. These two stars directly point to the North Star on the Little Dipper.<b>[1]</b>
								<div className="lineGap"></div>
									Due to its powerful history as a navigation tool, the North Star has also captured the collective imagination as a
									symbol for personal growth. Just as the literal North Star provides direction and helps us stay on course, so does
									our inner North Star. It’s our inner compass; the part of us that knows our passion, purpose, and life direction.
									<div className="lineGap"></div>
									According to psychologist and best-selling author Rick Hanson, Ph.D., “When you find your North Star, you know where
									you’re headed. That alone feels good. Plus, your North Star is (presumably) wholesome and vital, so aiming toward it
									will bring more and more happiness and benefit to yourself and others. And you can dream bigger dreams and take more
									chances in life since if you lose your way, you’ve got a beacon to home in on.”
									<div className="lineGap"></div>
									North Stars are unique for everyone, and only you truly hold the knowledge of what yours are. Some examples of North
									Stars are fulfilling a lifelong dream of becoming a pediatric nurse or traveling to Asia, committing to a spiritual
									path of becoming a more compassionate person, or creating a documentary about a topic you are passionate about. When
									Hanson inquired into his own North Star, the answers he got were “truth,” followed by “love.” As you can see from these
									examples, North Stars can be concrete (i.e., realizing a life goal, following through on a cherished dream or project,
									developing a talent or skill, working toward an ideal career) or more abstract (i.e., cultivating a personal quality;
									exploring a principle or way of being).<b>[1]</b>
							</div>
						</div>
						<div className="nav">
							<a href="#" onClick={this.handleHomePage} className="anchor">Home</a>
							<h3>TODAY'S HEADLINE</h3>
							<ul>
								{itemInfo}
							</ul>
						</div>
					</div>
					<div style={{ display: this.state.Article2 }} className="article">
						<div className="margin">
							<h3 className="aPic1">
								UP ABOVE AND BEYOND
						</h3>
							<img src={star2} className="aPic1" />
							<div className="date1">
								12 November, 2020
	        			</div>
							<div className="aPic1">
								Stars are formed in clouds of gas and dust, known as nebulae. Nuclear reactions at the centre (or core) of
								stars provides enough energy to make them shine brightly for many years.. The exact lifetime of a star depends
								very much on its size. Very large, massive stars burn their fuel much faster than smaller stars and may only last
								a few hundred thousand years. Smaller stars, however, will last for several billion years, because they burn their
								fuel much more slowly.<b>[2]</b>
								<div className="lineGap"></div>
								Eventually, however, the hydrogen fuel that powers the nuclear reactions within stars will begin to run out, and they
								will enter the final phases of their lifetime. Over time, they will expand, cool and change colour to become red giants.
								The path they follow beyond that depends on the mass of the star.
								<div className="lineGap"></div>
								Small stars, like the Sun, will undergo a relatively peaceful and beautiful death that sees them pass through a
								planetary nebula phase to become a white dwarf, which eventually cools down over time and stops glowing to become
								a so-called "black dwarf". Massive stars, on the other hand, will experience a most energetic and violent end, which
								will see their remains scattered about the cosmos in a enormous explosion, called a supernova. Once the dust clears,
								the only thing remaining will be a very dense star known as a neutron star, these can often be rapidly spinning and
								are known as pulsars. If the star which explodes is especially large, it can even form a black hole.<b>[2]</b>
							</div>
						</div>
						<div className="nav">
							<a href="#" onClick={this.handleHomePage} className="anchor">Home</a>
							<h3>TODAYS HEADLINE</h3>
							<ul>
								{itemInfo}
							</ul>
						</div>
					</div>
					<div style={{ display: this.state.Article3 }} className="article">
						<div className="margin">
							<h3 className="aPic1">
								BELIEFS OF ANCIENT CIVILIZATION
					</h3>
							<img src={star4} className="aPic1" />
							<div className="date1">
								16 November, 2020
	        			</div>
							<div className="aPic1">
								For tens of thousands of years, human beings have been fascinated by the patterns of stars in the sky above Earth.
								Early on, they noticed that the Moon changed shape from night to night as well as its position among the stars.
								Like many ancient peoples, the Egyptians studied the night sky, taking measurements from the stars to accurately align
								their pyramids and sun temples with the earth's four cardinal points.<b>[3]</b>
								<div className="lineGap"></div>
								Taking sightings of the Great Bear and Orion with an instrument called a merkhet,
								astronomer-priests marked out the foundations of buildings with astonishing accuracy.<b>[3, 4]</b>
								Early people noticed constellations of stars in the sky that looked like animals and people, and made up stories
								about what they thought they saw. In fact, the oldest records we have of astronomical observations are 30,000-year-old
								paintings found on the walls of caves. Ancient Egyptians were very interested in the night sky. In particular, they were
								drawn to two bright stars that always could be seen circling the North Pole. The Egyptians referred to those stars as
								"the indestructibles." Today we know them as Kochab, in the bowl of the Little Dipper (Ursa Minor), and Mizar, in the
								middle of the handle of the Big Dipper (Ursa Major).<b>[3]</b>
								<div className="lineGap"></div>
								Early Greek astronomers learned from the Babylonians. The Greek philosopher Pythagoras about 550 B.C. noticed that the
								so-called evening star and morning star were the same body, the planet Venus.In the 4th century B.C., Aristotle of Stagira
								knew the Earth was round because of eclipses observed when Earth passed between the Moon and the Sun.
								<div className="lineGap"></div>
								In the 3rd century B.C., Eratosthenes was a Greek astronomer working in Egypt when he noticed the Sun directly over one
								city cast a shadow in another city 500 miles north. Eratosthenes understood correctly that meant Earth's surface is
								curved. He calculated correctly that Earth is a ball about 25,000 miles around.<b>[3]</b>
								<div className="lineGap"></div>
								Egyptians aligned their pyramids and temples toward the north because they believed their pharaohs became stars in
								the northern sky after they died. To assure that a king would join the circumpolar stars, the pyramids were laid out
								facing due north toward the "indestructible" stars. They thought that aligning the pyramids toward north gave the
								deceased pharaohs direct access to the northern sky. Each of the two stars was about 10 degrees from the celestial
								pole which lay directly between them. When one star was exactly above the other in the sky, astronomers could find
								a line that pointed due north. That alignment was only true for a few years around 2,500 B.C. An Egyptian astronomer
								might have held up a plumb line and waited for the night sky to slowly pivot around the unmarked pole as the Earth
								rotated. When the plumb line exactly intersected both stars -- one about 10 degrees above the invisible pole and the
								other 10 degrees below it -- the sight line to the horizon would aim directly north. However, Earth's axis is unstable.
								Our planet wobbles like a gyroscope over a period of 26,000 years. Modern astronomers now know that the celestial north
								pole was exactly aligned between Kochab and Mizar only in the year 2467 B.C. Before or after that date, the Egyptian
								astronomers would have been less accurate as they tried to mark true north. The Great Pyramid at Giza is known today
								as one of the Seven Wonders of the Ancient World. Nearly 4,500 years ago, in the year 2467 B.C., the "indestructible"
								stars lay precisely along a straight line that included the celestial pole. Research suggests that the Great Pyramid
								at Giza was constructed within 10 years of 2,480 B.C.<b>[3]</b>
							</div>
						</div>
						<div className="nav">
							<a href="#" onClick={this.handleHomePage} className="anchor">Home</a>
							<h3>TODAY'S HEADLINE</h3>
							<ul>
								{itemInfo}
							</ul>
						</div>
					</div>
					<div className="footer">
						<h4>Reference</h4>
						[1] Retrieved from: https://healthypsych.com/your-own-north-star-finding-life-purpose-and-passion/
						<div></div>
						[2] Retrieved from: https://www.schoolsobservatory.org/learn/astro/stars/cycle
						<div></div>
						[3] Retrieved from: http://www2.nau.edu/~gaud/bio301/content/erlast.htm
						<div></div>
						[4] Retrieved from: https://www.historymuseum.ca/cmc/exhibitions/civil/egypt/egcs03e.html
					</div>
				</div>
			);
		}
	}
}


// ========================================

ReactDOM.render(
	<Square />,
	document.getElementById('root')
);
