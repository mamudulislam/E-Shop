import React, { useState } from 'react';
import Container from '../../Golobalcomponentes/Container';
import Leftbar from './Componentes/Leftbar';
import Rightbar from './Componentes/Rightbar';

const Profile = () => {
    const [options, setOptions] = useState(1);

    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_3.5fr] gap-4">
                <Leftbar setOptions={setOptions} />
                <Rightbar options={options} />
            </div>
        </Container>
    );
};

export default Profile;
