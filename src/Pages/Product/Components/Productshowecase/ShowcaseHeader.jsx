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

const ShowcaseHeader = ({ startIndex, endIndex, totalItems }) => {
    const dispatch = useDispatch();
    const viewMode = useSelector((state) => state.view.mode);
    const { t } = useTranslation();

    const sortOptions = [
        { key: "1", label: t("Price Low to High") },
        { key: "2", label: t("Price High to Low") },
    ];

    return (
        <div>
            <h1 className="font-montserrat text-2xl sm:text-3xl md:text-[36px] font-bold text-black">
                {t("Products")}
            </h1>

            <div className="mt-4 sm:mt-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <p className="font-montserrat text-sm sm:text-base text-black01">
                    {t(`Showing ${startIndex} - ${endIndex} of ${totalItems} results.`)}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <span className="font-montserrat font-normal text-sm lg:text-base">
                            {t("Sort By")}:
                        </span>
                        <div className="w-full sm:w-[190px]">
                            <CustomDropdown
                                className="font-montserrat font-bold text-sm lg:text-base text-orange cursor-pointer w-full flex justify-between items-center"
                                icon={true}
                                items={sortOptions}
                            />
                        </div>
                    </div>

                    <div className="hidden sm:block w-[1px] h-[20px] bg-black100" />
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
