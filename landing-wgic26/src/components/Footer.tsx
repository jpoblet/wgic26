import { School } from "lucide-react";
import React from "react";

const Footer = () => {
    return (
        <footer className="flex flex-col lg:pt-3 lg:pb-1.5 lg:px-8 p-0 gap-0">
            <div className="flex flex-col gap-4 bg-cactus lg:rounded-xl text-cement w-full pl-8 pr-14 md:pl-12 pr-18 py-12 md:py-16">
                <div className="flex flex-col sm:flex-row justify-between items-between gap-16 sm:gap-10">
                    <div className="flex flex-col gap-8 w-1/2 md:w-1/4">
                        <div className="text-2xl sm:text-lg lg:text-xl xl:text-2xl uppercase">
                            World <strong>Green</strong><br />Infrastructure<br />Congress 2026<br /><strong>Barcelona</strong>
                        </div>
                        <div className="text-xs font-light text-white/60">27-30 OCT 2026</div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-20 xl:gap-40">
                        <div className="flex flex-col gap-6 items-start">
                            <div className="uppercase text-xs text-white/40">legal</div>
                            <div className="flex flex-col gap-6 text-xs">
                                <a href="#" className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-potus">Privacy Policy</a>
                                <a href="#" className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-potus">Terms & Conditions</a>
                                <a href="#" className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-potus">Cookies</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 items-start">
                            <div className="uppercase text-xs text-white/40">Contact</div>
                            <div className="flex flex-col gap-6 text-xs">
                                <a href="#" className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-potus">X</a>
                                <a href="#" className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-potus">Linkedin</a>
                                <a href="#" className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-potus">Email</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row py-8 px-8 sm:px-6 sm:py-8 lg:py-6 text-white/60 bg-cactus lg:bg-monstera/60 justify-between gap-2 text-[10px]">
                <div>WGIC 2026 - All rights reserved</div>
                <div className="flex gap-2 items-end">
                    Another<a href="http://jordipoblet.com" className="flex gap-1 items-center text-white underline underline-offset-4 decoration-1 decoration-potus lg:no-underline hover:underline hover:underline-offset-4 hover:decoration-1 hover:decoration-potus"><School size={14} />Paesetto</a>creation.
                </div>
            </div>

        </footer>
    );
};

export { Footer };