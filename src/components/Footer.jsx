import React from 'react';
import { FooterContaniner, FooterContentBox, FooterTitle, FooterText, EndFooter, TextSpan,
FooterInput, FooterButton, FooterInstagramList, FooterItem, FooterSocialList, FooterSocialImg,
FooterForm } from '../style/footer';
import useFooterImages from '../hooks/useFooterImages';

const Footer = () => {

    const [thumbCards, socialMedia] = useFooterImages(); 

    return (
        <FooterContaniner>
            <FooterContentBox>
                <FooterTitle>About Us</FooterTitle>
                <FooterText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta
                    tellus nec purus semper malesuada.
                </FooterText>
            </FooterContentBox>
            <FooterForm >
                <FooterTitle>Newsletter</FooterTitle>
                <FooterText>Stay updated with our latest</FooterText>
                <FooterInput type={'email'} required placeholder='Email'/>
                <FooterButton>{'>'}</FooterButton>
            </FooterForm>
            <FooterContentBox>
                <FooterTitle>Instagram</FooterTitle>
                <FooterInstagramList>
                    {thumbCards.map(img => {
                        return <FooterItem key={img} src={img}/>
                    })}
                </FooterInstagramList>
            </FooterContentBox>
            <FooterContentBox>
                <FooterTitle>Follow Us</FooterTitle>
                <FooterText>Let us be social</FooterText>
                <FooterSocialList>
                    {socialMedia.map(img=>{
                        return <FooterSocialImg key={img} src={img}/>
                    })}
                </FooterSocialList>
            </FooterContentBox>
            <EndFooter>
                Blooger | made by <TextSpan>Leonardo Rebouças</TextSpan>
            </EndFooter>
        </FooterContaniner>
    )

}

export default Footer;