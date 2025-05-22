import React from "react";

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
    return (
        <section className="w-full justify-start">
            <div className="flex flex-col sm:flex-row gap-5 items-start justify-between py-8 border-y-1 border-white/50 w-full">
                <div className="text-2xl uppercase text-potus w-full">{title}</div>
                {description && <div className="text-[10px] text-white/70 w-3/4 lg:w-2/3">{description}</div>}
            </div>
        </section>
    );
};

export default PageHeader;
