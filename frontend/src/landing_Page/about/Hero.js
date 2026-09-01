import React from 'react';


function Hero() {
    return (
        <div className="container">

            <div className='row p-5 mb-5 mt-5'>
                <h1 className='fs-4 text-center'> We pioneered the discount broking model in India.<br /> Now, we are breaking ground with our technology.</h1>
            </div>


            <div className='row p-5 mt-5 border-top' style={{ lineHeight: "1.8", fontSize: "1.2em" }}>

                <div className='col-6 p-5'>
                    <p> We kick-started operations on the 1th of September, 2026 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company InvestVault, It combines “Invest,” representing investments, with “Vault,” representing security and protection—a secure place where investments are safeguarded.
                    </p>
                    <p> <a href="" style={{ textDecoration: "None" }}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                    <p> Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>

                <div className='col-6 p-5'>
                    <p>In addition, we run a number of popular open online educational and community initiatives aimed at empowering retail traders and investors with the knowledge and resources they need to make informed decisions.</p>
                    <p> Today, our disruptive pricing models and in-house technology have helped us become one of the largest stock brokers in India</p>
                    <p> And yet, we're always working on something new. Catch up on our latest updates through our blog and discover what the media has been saying about us.</p>
                </div>

            </div>

        </div>
    );
}

export default Hero;