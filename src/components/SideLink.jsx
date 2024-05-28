import React from 'react';
import { FaUserFriends, FaHome, FaProductHunt, FaCog, FaHistory } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Peta ikon
const iconMap = {
    FaUserFriends, FaHome, FaProductHunt, FaCog, FaHistory
};

const SideLink = ({ Title, Icon, LinkTo }) => {
    const SelectedIcon = iconMap[Icon]; // Pilih ikon dari peta

    return (
        <li className="relative px-6 py-3">
            <Link to={LinkTo} className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                {SelectedIcon && <SelectedIcon className='text-xl' />}
                <span className="ml-4">{Title}</span>
            </Link>
        </li>
    );
};

export default SideLink;
