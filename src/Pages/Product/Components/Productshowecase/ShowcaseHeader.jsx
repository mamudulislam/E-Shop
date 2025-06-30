import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { HiBars3 } from "react-icons/hi2";
import { IoGridOutline } from "react-icons/io5";
import {
    setGridView,
    setListView,
} from "../../../../settings/Redux/feature/viewSlice";
import CustomDropdown from "../../../../Golobalcomponentes/CustomDropdown/CustomDropdown";

const ShowcaseHeader = ({ currentPage, pageSize }) => {
    const dispatch = useDispatch();
    const viewMode = useSelector((state) => state.view.mode);
    const { t } = useTranslation();

    const sortOptions = [
        { key: "1", label: t("Price Low to High") },
        { key: "2", label: t("Price High to Low") },
    ];

    // Calculate showing range
    const startItem = (currentPage - 1) * pageSize + 1;
    const endItem = Math.min(currentPage * pageSize, 160); // Assuming total is 160

    return (
        <div>
            <h1 className="font-montserrat text-[36px] font-bold text-black">
                {t("Products")}
            </h1>
            <div className="flex items-center justify-between mt-6">
                <p className="font-montserrat text-base text-black01">
                    {t(`Showing ${startItem} - ${endItem} of 160 results.`)}
                </p>
                <div className="flex items-center gap-x-4">
                    <div className="flex items-center gap-x-2">
                        <span className="font-montserrat font-normal text-sm lg:text-base">
                            {t("Sort By")}:
                        </span>
                        <div className="w-[190px]">
                            <CustomDropdown
                                className="font-montserrat font-bold text-sm lg:text-base text-orange cursor-pointer w-full flex justify-between items-center"
                                icon={true}
                                items={sortOptions}
                            />
                        </div>
                    </div>
                    <div className="w-[1px] h-[20px] bg-black100" />
                    <div className="flex items-center gap-x-2">
                        <span
                            className={`cursor-pointer hover:text-orange ${viewMode === "grid" ? "text-orange" : ""
                                }`}
                            onClick={() => dispatch(setGridView())}
                        >
                            <IoGridOutline size={24} />
                        </span>
                        <span
                            className={`cursor-pointer hover:text-orange ${viewMode === "list" ? "text-orange" : ""
                                }`}
                            onClick={() => dispatch(setListView())}
                        >
                            <HiBars3 size={28} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowcaseHeader;