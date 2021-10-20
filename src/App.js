import React,{ useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';
import wordsToNumbers from 'words-to-numbers';

const alankey = '9a9784e2cf1addc5b29f0bc7b885955a2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    
    const classes = useStyles();
    useEffect(() => {
        alanBtn({
            key: alankey,
            onCommand: ({command, articles, number }) =>{
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                    
                } 
            }
        })
    }, [])
    return(
        <div>
            <div className={classes.logoContainer}>
               {/* <img src="https://images.app.goo.gl/wNM7dGj73vENSwck9" className={classes.alanLogo} /> */ }
                
            </div>
            <NewsCards articles={newsArticles} />
        </div>
    );
}

export default App;