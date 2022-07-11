import React from 'react';
import SubNavPage from "../SubNavPage/SubNavPage";
import FirstProductsPage from "../FirstProductsPage/FirstProductsPage";
import SecondProductsPage from "../SecondProductsPage/SecondProductsPage";
import WhyUsPage from "../WhyUsPage/WhyUsPage";
import FeedbackPage from "../FeedbackPage/FeedbackPage";

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
