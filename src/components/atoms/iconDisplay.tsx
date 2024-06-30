import React from 'react';
import { FaYoutube, FaSpotify, FaApple, FaBandcamp } from 'react-icons/fa';
import { ImSoundcloud2 } from 'react-icons/im';
import { HiOutlineMusicNote } from 'react-icons/hi';

type IconType = 'YouTube' | 'Spotify' | 'SoundCloud' | 'AppleMusic' | 'LineMusic' | 'BandCamp' | 'Twitter' | string;

interface IconDisplayProps {
    type: IconType;
    size?: number
}

const IconDisplay: React.FC<IconDisplayProps> = ({ type, size }) => {
    switch (type) {
        case 'YouTube':
            return <FaYoutube size={size} />;
        case 'Spotify':
            return <FaSpotify size={size} />;
        case 'SoundCloud':
            return <ImSoundcloud2 size={size} />;
        case 'AppleMusic':
            return <FaApple size={size} />;
        case 'LineMusic':
            return <HiOutlineMusicNote size={size} />;
        case 'BandCamp':
            return <FaBandcamp size={size} />;
        default:
            return null;
    }
};

export default IconDisplay;
