import { useState } from 'react';
import thumbCard3 from '../assets/instagram/thumb-card3.png';
import thumbCard4 from '../assets/instagram/thumb-card4.png';
import thumbCard5 from '../assets/instagram/thumb-card5.png';
import thumbCard6 from '../assets/instagram/thumb-card6.png';
import thumbCard7 from '../assets/instagram/thumb-card7.png';
import thumbCard8 from '../assets/instagram/thumb-card8.png';
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'

function useFooterImages() {

    const [thumbCards] = useState([
        thumbCard3, thumbCard4, thumbCard5, thumbCard6, thumbCard7, thumbCard8
    ]);
    const [socialMedia] = useState([
        facebook, instagram, twitter, youtube
    ])

    return [thumbCards, socialMedia];

}

export default useFooterImages;