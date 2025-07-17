import React from 'react';
import Container from '../../../Golobalcomponentes/Container';

const MapLayout = () => {
    return (
        <div className="mt-8 mb-16">
            <Container>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2943.2835095498767!2d-73.8340412240655!3d40.76244417138613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQ1JzQ0LjgiTiA3M8KwNDknNTMuMyJX!5e1!3m2!1sen!2sbd!4v1750438087374!5m2!1sen!2sbd"
                        style={{
                            border: 0,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
            </Container>
        </div>
    );
};

export default MapLayout;
