import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-multi-lang';
import VietHongHeader from '../components/VietHongHeader';
import VietHongCalendar from '../components/VietHongCalendar';

const VietHong = () => {
    const t = useTranslation();
    return (
        <div>
            <Header/>
            <VietHongHeader/>
            <br/><br/><br/>
            <h5 style={{ textAlign: "center" }}>{t('viethong.home.heading')}<br/><br/> 
                {t('viethong.home.line1')} <br/>
                {t('viethong.home.line2')} <br/> 
                {t('viethong.home.line3')} <br/><br/>        
                {t('viethong.home.line4')} <br/><br/> 
                {t('viethong.home.line5')} <br/><br/>
                {t('viethong.home.line6')} <br/>
                {t('viethong.home.line7')} <br/><br/>
                {t('viethong.home.line8')} <br/><br/>
                {t('viethong.home.line9')} <br/>
                {t('viethong.home.line10')} <br/><br/>
                {t('viethong.home.line11')} <br/>
                {t('viethong.home.line12')} <br/><br/>
                </h5>              
                <div className="container-fluid text-center">
                <p id="viet-ngu" style={{width: '65%', margin: 'auto'}}>{t('viethong.home.announcement')}</p>
                <br/>
                <div className="container-fluid text-center">

                <p id="vn-schedule" className="center-50"> <b>Giờ học mỗi thứ Bảy</b> <br/>
                10:00 a.m. – 12:15 p.m. </p>
                </div>
                <VietHongCalendar />
                </div>
            <Footer/>
        </div>
    );
};

export default VietHong;