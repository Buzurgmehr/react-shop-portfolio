import React from 'react'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import '../styles/WhyUs.scss'

const WhyUs = () => {
    return (
        <section className="main">
            <div className="center-text">
                <h1>Why You Should Choose Us</h1>
            </div>
            <div className="content-choose">
                <div className="content-text">
                    <div className="icons">
                        <DeliveryDiningIcon className="icons-choose"/>
                    </div>
                    <p>Any Text 1</p>
                </div>
                <div className="content-text">
                    <div className="icons">
                        <AccessTimeIcon className="icons-choose"/>
                    </div>
                    <p>Any Text 1</p>
                </div>
                <div className="content-text">
                    <div className="icons">
                        <InsertEmoticonIcon className="icons-choose"/>
                    </div>
                    <p>Any Text 1</p>
                </div>
                <div className="content-text">
                    <div className="icons">
                        <BookOnlineIcon className="icons-choose"/>
                    </div>
                    <p>Any Text 1</p>
                </div>
            </div>
        </section>

    )
}

export default WhyUs