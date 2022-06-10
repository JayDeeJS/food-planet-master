import React from 'react';
import FirstProductsPage from "../FirstProductsPage/FirstProductsPage";
import SecondProductsPage from "../SecondProductsPage/SecondProductsPage";
import WhyUsPage from "../WhyUsPage/WhyUsPage";
import FeedbackPage from "../FeedbackPage/FeedbackPage";
import SubNavPage from "../SubNavPage/SubNavPage";

const MainPage = () => {
    return (
        <div className="body">
            <SubNavPage/>
            <FirstProductsPage/>
            <SecondProductsPage/>
            <WhyUsPage/>
            <FeedbackPage/>
        </div>
    );
};

export default MainPage;