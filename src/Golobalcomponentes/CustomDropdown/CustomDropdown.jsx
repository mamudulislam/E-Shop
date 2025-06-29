import { Dropdown } from "antd";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const CustomDropdown = ({
    items = [],
    icon = true,
    defaultSelectedKey = null,
    placement = "bottomRight",
    className = "",
    onSelect,
}) => {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        if (defaultSelectedKey) {
            const found = items.find((item) => item.key === defaultSelectedKey);
            setSelected(found || items[0]);
        } else if (items.length) {
            setSelected(items[0]);
        }
        if (onSelect && items[0]) {
            onSelect(items[0]);
        }
    }, [items, defaultSelectedKey]);

    const handleClick = ({ key }) => {
        const selectedItem = items.find((item) => item.key === key);
        setSelected(selectedItem);
        if (onSelect) onSelect(selectedItem);
    };

    const menu = {
        items: items.map((item) => ({
            ...item,
            onClick: () => handleClick({ key: item.key }),
        })),
    };

    return (
        <div className="flex justify-end">
            <Dropdown
                menu={menu}
                trigger={["click"]}
                placement={placement}
                overlayClassName="rounded-xl shadow-lg w-64 bg-white"
            >
                <div className={`flex items-center gap-1 cursor-pointer ${className}`}>
                    {selected?.label || "Select"}
                    {icon && <MdKeyboardArrowDown size={20} />}
                </div>
            </Dropdown>
        </div>
    );
};

export default CustomDropdown;