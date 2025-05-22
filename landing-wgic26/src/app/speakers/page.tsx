import PageHeader from "@/components/PageHeader";
import { FileText } from "lucide-react";

const Speakers = () => {
    return (
        <div>
            <PageHeader
                title="Speakers"
                description="Find here the top presenters and every other speaker that will take part of the event."
                buttonText="submit entry"
                buttonUrl="#"
                buttonIcon={<FileText size={18} />}
            />
            <section className="w-full justify-start text-xs">
                This is the rest of the page
            </section>
        </div>
    );
};

export default Speakers;