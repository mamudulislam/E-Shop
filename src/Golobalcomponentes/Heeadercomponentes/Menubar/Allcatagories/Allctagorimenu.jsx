import { Dropdown, Space } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { LuMenu } from 'react-icons/lu';
import { Catagoriesitems } from './Catagoriesitems';
import { IoIosArrowDown } from 'react-icons/io';

const Allctagorimenu = ({ isMenu, icons, className }) => {
    const { t } = useTranslation();
    return (
        <div>
            <Dropdown menu={{ items: Catagoriesitems }} trigger={['click']}>
                <div className={className}>
                    {isMenu && < LuMenu />} {t('All Categories')}{icons && <span>
                        <IoIosArrowDown size={24} />{" "}
                    </span>}
                </div>
            </Dropdown >
        </div >
    )
}

export default Allctagorimenu;