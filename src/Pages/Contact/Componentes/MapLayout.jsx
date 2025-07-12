import React from 'react';
import Container from '../../../Golobalcomponentes/Container';

const MapLayout = () => {
    return (
        <div className='mt-8 mb-16'>
            <Container>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2943.2835095498767!2d-73.8340412240655!3d40.76244417138613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQ1JzQ0LjgiTiA3M8KwNDknNTMuMyJX!5e1!3m2!1sen!2sbd!4v1750438087374!5m2!1sen!2sbd"
                    width="1460"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Container>
        </div>
    );
};

export default MapLayout;
