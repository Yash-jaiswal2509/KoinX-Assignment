import { pageBreadcrumbs } from "../Arrays";
import { useState } from "react";

const Breadcrumb = () => {
    const [selectLabel, setSelectLabel] = useState(0);

    return (
        <div className="flex pb-4 ml-1 gap-4 pr-20 border-b-2 font-medium text-sm 2xl:text-lg xl:text-base lg:pr-12 overflow-x-scroll scrollbar-thin scrollbar-track-black lg:overflow-auto" >
            {pageBreadcrumbs.map((name, id) => (
                <div className={`py-4 mr-2 text-nowrap cursor-pointer ${(id === selectLabel) ? `border-b-blue-800 border-b-2 text-blue-800` : ``}`} key={id}>
                    <input type="radio" id={id} className="hidden" checked={id === selectLabel} onChange={() => setSelectLabel(id)} />
                    <label htmlFor={id} className="cursor-pointer">{name}</label>
                </div>
            ))}
        </div>
    )

}

export default Breadcrumb;