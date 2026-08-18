import React from 'react';

function Awards() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>

                    <img src='media/images/largestBroker.svg' alt='Awards' />
                </div>

                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>Millions of investors trust InvestVault to trade and invest
                        across a wide range of financial products, including:</p>

                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Future and Options</p>
                                </li>
                                <li>
                                    <p>Commodity Derivatives</p>
                                </li>
                                <li>
                                    <p>Currency Derivatives</p>
                                </li>

                            </ul>
                        </div>

                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stockes & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct Mutual Funds</p>
                                </li>
                                <li>
                                    <p>Bonds & Government Securities</p>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Awards;
