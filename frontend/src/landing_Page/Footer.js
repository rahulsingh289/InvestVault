import React from 'react';

function Footer() {
    return (
        <footer style={{ backgroundColor: "rgb (250, 250, 250)" }} >
            <div className="container border-top mt-5">
                <div className="row mt-5">
                    <div className="col">
                        <img src="media/images/logo.svg" style={{ width: "50%" }} />
                        <p>
                            &copy; 2010 - 2024, Not InvestVault Broking Ltd. All lights reserved.</p>
                    </div>

                    <div className='col'>
                        <p>Company</p>
                        <a href=''>About</a><br />
                        <a href=''>Products</a><br />
                        <a href=''>Pricing</a><br />
                        <a href=''>Referral programme</a><br />
                        <a href=''>Careers</a><br />
                        <a href=''>Zerodha.tech</a><br />
                        <a href=''>Press & media</a><br />
                        <a href=''>Zerodha cares (CSR)</a><br />
                    </div>

                    <div className='col'>
                        <p>Support</p>
                        <a href=''>About</a><br />
                        <a href=''>Support portal</a><br />
                        <a href=''>I-Connect blog</a><br />
                        <a href=''>List of charges</a><br />
                        <a href=''>Downloads & resources</a><br />

                    </div>

                    <div className='col'>
                        <p>Account</p>
                        <a href=''>Open an account</a><br />
                        <a href=''>Fund transfer</a><br />
                        <a href=''>60 day challenge</a><br />

                    </div>

                </div>
                <div className="mt-5 text-muted" style={{ fontSize: "10px" }}>
                    <p>InvestVault Financial Technologies: A digital investment and market-tracking platform designed to provide users with tools for discovering securities, tracking market information, managing watchlists and monitoring portfolios. InvestVault is not a SEBI-registered stock broker, depository participant, investment adviser, or research analyst.</p>

                    <p>Registered Address: InvestVault Financial Technologies, India. For any account, technical or service-related concerns, please contact the InvestVault Support Team through the official support channel available on the platform.</p>

                    <p>Procedure to file a complaint: Contact the InvestVault Support Team through the official support channel and provide your registered name, email address and relevant details regarding your concern for effective communication and speedy resolution.</p>

                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                    <p>Prevent unauthorised transactions in your account. Update your registered mobile number and email address and never share your passwords, OTPs, PINs or other confidential information with anyone. Receive and review transaction notifications and account activity regularly. KYC and other verification requirements may apply where financial services are provided through authorized third-party partners.</p>

                    <p>InvestVault does not provide guaranteed returns or unauthorized stock tips and has not authorized anyone to trade or invest on behalf of others.If you find anyone claiming to be part of InvestVault and offering such services, please contact InvestVault Support through the official platform.</p>


                </div>

            </div>
        </footer>
    );
}

export default Footer;
