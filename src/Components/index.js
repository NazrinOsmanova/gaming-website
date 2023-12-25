import React from 'react'
import item_logo1 from '../Images/f4.png'
import item_logo2 from '../Images/f5.jpg'
import item_logo3 from '../Images/f6.jpg'
import memory_game_logo from '../Images/game_logos/memory_game_logo.png'
import tetris_game_logo from '../Images/tetris_game_logo.png'
import subway_surfers_game_logo from '../Images/subway_surfers_game_logo.jpg'
import paint_game_logo from '../Images/paint_game_logo.jpg'
import Nav from './nav'
import Header from './header'
import Footer from './footer'
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <>
            <Header />
            <Nav />
            <main className='indexMain'>
                <section>
                    <div className="items">
                        <div className="item">
                            <h3>New Games</h3>
                            <div className="games">

                                <div className="game">
                                    <img src={memory_game_logo} alt="logo2" />
                                    <Link to="/memorygame">
                                        <h5>Memory Game</h5>
                                    </Link>
                                </div>
                                <div className="game">
                                    <img src={item_logo2} alt="logo2" />
                                    <h5>Cube-Game</h5>
                                </div>
                                <div className="game">
                                    <img src={item_logo3} alt="logo2" />
                                    <h5>Ball-Game</h5>
                                </div>
                                <div className="game">
                                    <img src={item_logo1} alt="logo2" />
                                    <h5>Fire And Water</h5>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <h3>Trend Games</h3>
                            <div className="games">
                                <div className="game">
                                    <img src={paint_game_logo} alt="logo2" />
                                    <h5>Game-Name</h5>
                                </div>
                                <div className="game">
                                    <img src={subway_surfers_game_logo} alt="logo2" />
                                    <h5>Subway Surfers</h5>
                                </div>
                                <div className="game">
                                    <img src={tetris_game_logo} alt="logo2" />
                                    <h5>Tetris</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Index