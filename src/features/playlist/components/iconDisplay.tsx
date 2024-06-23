import React from 'react';
import { FaYoutube, FaSpotify, FaApple, FaBandcamp } from 'react-icons/fa';
import { ImSoundcloud2 } from 'react-icons/im';
import { HiOutlineMusicNote } from 'react-icons/hi';

type IconType = 'YouTube' | 'Spotify' | 'SoundCloud' | 'AppleMusic' | 'LineMusic' | 'BandCamp' | string;

interface IconDisplayProps {
    type: IconType;
}

const IconDisplay: React.FC<IconDisplayProps> = ({ type }) => {
    switch (type) {
        case 'YouTube':
            return <FaYoutube />;
        case 'Spotify':
            return <FaSpotify />;
        case 'SoundCloud':
            return <ImSoundcloud2 />;
        case 'AppleMusic':
            return <FaApple />;
        case 'LineMusic':
            return <HiOutlineMusicNote />;
        case 'BandCamp':
            return <FaBandcamp />;
        default:
            return null;
    }
};

export default IconDisplay;
